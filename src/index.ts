import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContainerComponent} from "./components/container/container.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {NotificationsService} from "./services/notifications.service";

export * from "./components/container/container.component";
export * from "./components/notification/notification.component";
export * from "./services/notifications.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContainerComponent,
        NotificationComponent
    ],
    exports: [
        ContainerComponent,
        NotificationComponent
    ]
})
export class NotificationsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [
                NotificationsService
            ]
        };
    }
}
