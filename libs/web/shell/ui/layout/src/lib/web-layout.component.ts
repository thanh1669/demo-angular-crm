/* eslint-disable @angular-eslint/component-selector */
import { AuthStore } from "@app-crm/web/shared/auth-config";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-layout',
    templateUrl: './web-layout.component.html',
    styleUrls: ['./web-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
    constructor(
        private authStore: AuthStore
    ) { }

    ngOnInit(): void {
        this.authStore.init();
    }
}