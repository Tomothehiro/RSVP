import { Routes } from '@angular/router';
import { RoomComponent } from './room.component';
import { RoomFormComponent } from './room-form/room-form.component';

export const ROOM_ROUTES: Routes = [
  {
    path: '',
    component: RoomComponent,
  },
  {
    path: 'new',
    component: RoomFormComponent
  },
  {
    path: 'update/:id',
    component: RoomFormComponent
  }
];
