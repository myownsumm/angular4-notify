# angular4-notify

## Installation

To install this library, run:

```bash
$ npm install angular4-notify --save
```

## How to use

Import notifications module and service:

```typescript
import {NotificationsModule, NotificationsService} from 'angular4-notify';

@NgModule({
  declarations: [
    YouComponent
  ],
  imports: [
    SomeModule,

    //add to imports
    NotificationsModule
  ],
  providers: [
      //add to providers
      NotificationsService
  ],
  bootstrap: [YouComponent]
})
export class YourModule {}
```

Once library is imported, you can use its service in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->

<header></header>

<angular4-notify-notifications-container></angular4-notify-notifications-container>

<router-outlet></router-outlet>
```

## Adding notifications

To add notifications to be rendered firstly inject NotificationsService into your component:

```typescript
import {NotificationsService} from 'angular4-notify';

constructor(protected notificationsService: NotificationsService) {}
````
and then use following methods:

```typescript
this.notificationsService.addError('Error message here');
this.notificationsService.addWarning('Some warning message');
this.notificationsService.addInfo('Information message');
````

## Changelist

**1.2.0** Clear notifications after navigation start.

**1.1.0** Prevent from similar messages doubling.

**1.0.1** First stable version

## License

MIT © [alexander.poltoratskiy](mailto:myownsumm@gmail.com)
