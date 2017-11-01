import { Routes } from '@angular/router';
import { EventComponent } from './event.component';

export const EVENT_ROUTES: Routes = [
  {
    // child route of existing 'event/:id' route, hence the empty path
    path: '',
    component: EventComponent
  }
];
