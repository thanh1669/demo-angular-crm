/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";

@Component({
    selector: 'ui-card-table',
    templateUrl: './card-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardTableComponent {
    _data!: any[];
    _collums!: any[];
    _tableWidth!: number;
    _rowSelected = new Set<any>();
    _indeterminated = false;
    _selectedAllValue = false;

    @Input() nzTotal!: number;
    @Input() nzScroll!: boolean;
    @Input() nzLoading!: boolean;
    @Input() nzPageSize!: number;
    @Input() nzHeight = window.innerHeight;
    @Input() expandTemplate!: TemplateRef<null>;

    @Output() nzCallback = new EventEmitter<any[]>();
    @Output() nzSizeChange = new EventEmitter<number>();
    @Output() nzIndexChange = new EventEmitter<number>();
    @Output() nzSelectedChange = new EventEmitter<Set<any>>()

    @Input() set nzData(values: any[]) {
        this._data = values
            ? values.map(i => ({ ...i, expand: false }))
            : [];
        this.subscribeRowSelectedChange();
    };

    @Input() set nzSelectedKeys(value: Set<any>) {
        if (value) {
            this._rowSelected = new Set(value);
            this.subscribeRowSelectedChange();
        }
    }

    @Input() set nzHead(heads: any[]) {
        if (heads && heads.length) {
            this._collums = heads.filter(
                i => i.checked
            );
            this._tableWidth = this._collums.reduce(
                (a, b) => a + b.width, 0
            );
        }
    }

    setRowSelectedChange(rowId: any, rowChecked: boolean): void {
        this._data.forEach((row) => (rowId === 'all' || row.id === rowId) && this._rowSelected[rowChecked ? 'add' : 'delete'](row.id));
        this.nzSelectedChange.emit(this._rowSelected);
    }

    subscribeRowSelectedChange(): void {
        this._selectedAllValue = this._data && this._data
            .every(({ id }) => this._rowSelected.has(id));
        this._indeterminated = this._data && this._data
            .some(({ id }) => this._rowSelected.has(id)) &&
            !this._selectedAllValue;
    }

    setExpandVisibility(row: any) {
        this._data = this._data.map(i => ({ ...i, expand: i.id === row.id && !i.expand }));
        this.nzScroll = this._data.every(({ expand }) => expand === false);
    }
}