import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Notification} from '../../models';

@Component({
    selector: 'angular4-notify-notification',
    templateUrl: './notification.component.html',
    styleUrls: [
        './../../notifications.styles.css'
    ]
})
export class NotificationComponent {
    @Input() notification: Notification;
    @Output() dismissNotify = new EventEmitter();

    dismiss() {
        return this.dismissNotify.emit(this.notification);
    }
}
