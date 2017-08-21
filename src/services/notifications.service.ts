import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Notify} from '../models';

const TYPE_INFO = 'info';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';

@Injectable()
export class NotificationsService {
    constructor() {
        this.notifications = new Subject();
    }

    public notifications: Subject<Notify>;

    private pushNotification(notification) {
        this.notifications.next(notification);
    }

    public addInfo(text: string) {
        let notification = new Notify();

        notification.message = text;
        notification.type = TYPE_INFO;

        this.pushNotification(notification);
    }

    public addError(text: string) {
        let notification = new Notify();

        notification.message = text;
        notification.type = TYPE_ERROR;

        this.pushNotification(notification);
    }

    public addWarning(text: string) {
        let notification = new Notify();

        notification.message = text;
        notification.type = TYPE_WARNING;

        this.pushNotification(notification);
    }
}