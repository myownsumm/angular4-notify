import {Component, Input} from '@angular/core';
import {Notify} from '../../models';

@Component({
    selector: 'angular4-notify-notification',
    templateUrl: './notification.component.html',
    styleUrls: [
        './../../notifications.styles.css'
    ]
})
export class NotificationComponent {
    @Input() notification: Notify;
}
