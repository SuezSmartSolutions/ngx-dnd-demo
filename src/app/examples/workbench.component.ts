import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './workbench.component.html'
})
export class WorkBenchComponent implements OnDestroy {
    sub = Subscription.EMPTY;
    tsCode: string;

    constructor(private client: HttpClient, router: Router) {
        router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                const path = event.snapshot.routeConfig.path;
                if (!path) {
                    return;
                }

                const idx = path.indexOf('-');
                const folder = path.substring(0, idx);
                const file = path.substring(idx + 1);
                if (folder && file) {
                    const req = new HttpRequest('GET', `${environment.virtualFolder}/app/examples/${folder}/${file}.component.ts`, null, { responseType: 'text' });
                    this.client.request(req).subscribe(res => {
                        if (res.type === HttpEventType.Response) {
                            this.tsCode = `${res.body}`;
                        }
                    });
                }
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
