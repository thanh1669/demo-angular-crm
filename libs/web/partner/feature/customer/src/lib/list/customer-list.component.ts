import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CustomerStore } from "@app-crm/web/partner/data-access/stores";
import { ConstantsType } from "@app-crm/web/shared/data-access/models";

@Component({
    selector: 'app-crm-customer-list',
    templateUrl: 'customer-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CustomerStore]
})
export class CustomerListComponent implements OnInit {
    readonly vm$ = this.store.vm$;
    readonly ConstantsType = ConstantsType;

    constructor(
        private readonly store: CustomerStore
    ) { }

    ngOnInit(): void {
        this.store.initAuth();
        this.store.initFilter();
    }

    download() {
        void this.store.download({ type: 'full' });
    }

    setFilter<T>(params: T) {
        console.log(params);
        void this.store.setFilter(params);
    }

    setCollumVisibility<T>(collum: T) {
        void this.store.setCollumVisibility({ collum });
    }

    setCustomerCreateVisibility() {
        void this.store.setCustomerCreateVisibility({ isShow: true });
    }

    setListButtonAddOnVisibility(values: Set<any>): void {
        void this.store.setListButtonAddOnVisibility({ values });
    }
}