import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../core/core.module';
import { RoomComponent } from './room.component';
import { RoomFormComponent } from './room-form/room-form.component';

import { RouterModule } from '@angular/router';
import { ROOM_ROUTES } from './room.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(ROOM_ROUTES)
  ],
  declarations: [
    RoomComponent,
    RoomFormComponent
  ]
})
export class RoomModule { }
