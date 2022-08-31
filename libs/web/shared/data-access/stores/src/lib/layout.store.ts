import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface LayoutState {
    currentStore: any;
    currentHeight: number;
    isShowLoading: boolean;
}

@Injectable({ providedIn: 'root' })
export class LayoutStore extends ComponentStore<LayoutState> {
    constructor() {
        super(<LayoutState>{});
    }

    readonly currentHeight$ = this.select((s) => s.currentHeight);
    readonly isShowLoading$ = this.select((s) => s.isShowLoading);
    readonly currentStore$ = this.select((s) => s.currentStore);
}
