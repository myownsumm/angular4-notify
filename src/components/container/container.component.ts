import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Notify} from '../../models';
import {NotificationsService} from '../../services/notifications.service';

@Component({
    selector: 'angular4-notify-notifications-container',
    templateUrl: './container.component.html',
    styleUrls: [
        './../../notifications.styles.css'
    ]
})
export class ContainerComponent implements OnInit, OnDestroy {
    protected sub: Subscription;
    protected notifications: Notify[] = [];

    protected render(notification) {
        this.notifications.push(notification);
    }

    constructor(protected notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.sub = this.notificationsService.notifications
            .subscribe((n: Notify) => {
                this.render(n);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
