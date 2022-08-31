import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { PromptUpdateService } from './promp-update.service';

@Component({
    selector: 'app-crm-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    constructor(
        private promptUpdate: PromptUpdateService
    ) { }

    ngOnInit() {
        if (environment.production) {
            this.initForceUpdate();
        }
    }

    /**
     * Force Update App
     * @private
     */
    private initForceUpdate() {
        this.promptUpdate.forceUpdate().subscribe();
    }
}
