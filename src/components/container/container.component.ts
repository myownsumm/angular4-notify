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

    protected findSimilar(notification: Notify) {
        return this.notifications.find(existingNotification => {
            return existingNotification.message == notification.message
                && existingNotification.type == notification.type
        });
    }

    constructor(protected notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.sub = this.notificationsService.notifications
            .subscribe((n: Notify) => {
                if (this.findSimilar(n)) {
                    return;
                }

                this.render(n);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onDismissNotify(n: Notify) {
        return this.notifications.splice(
            this.notifications.indexOf(n),
            1
        );
    }
}
