import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Notification} from '../../models';
import {NotificationsService} from '../../services/notifications.service';
import {Router, NavigationStart} from "@angular/router";

import 'rxjs/add/operator/filter';


@Component({
    selector: 'angular4-notify-notifications-container',
    templateUrl: './container.component.html',
    styleUrls: [
        './../../notifications.styles.css'
    ]
})
export class ContainerComponent implements OnInit, OnDestroy {
    protected sub: Subscription;
    protected routerSub: Subscription;

    protected notifications: Notification[] = [];

    protected render(notification) {
        this.notifications.push(notification);
    }

    protected findSimilar(notification: Notification) {
        return this.notifications.find(existingNotification => {
            return existingNotification.message == notification.message
                && existingNotification.type == notification.type
        });
    }

    constructor(protected notificationsService: NotificationsService,
                protected router: Router) {
    }

    ngOnInit() {
        this.sub = this.notificationsService.notifications
            .subscribe((n: Notification) => {
                if (this.findSimilar(n)) {
                    return;
                }

                this.render(n);
            });

        this.routerSub = this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((e) => {
                this.notifications = [];
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onDismissNotify(n: Notification) {
        return this.notifications.splice(
            this.notifications.indexOf(n),
            1
        );
    }
}
