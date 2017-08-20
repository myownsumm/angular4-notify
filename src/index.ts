import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';
import {SamplePipe} from './sample.pipe';
import {SampleService} from './sample.service';


import {ContainerComponent} from "./components/container/container.component";

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SampleComponent,
        SampleDirective,
        SamplePipe,

        ContainerComponent
    ],
    exports: [
        SampleComponent,
        SampleDirective,
        SamplePipe,

        ContainerComponent
    ]
})
export class NotificationsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [SampleService]
        };
    }
}
