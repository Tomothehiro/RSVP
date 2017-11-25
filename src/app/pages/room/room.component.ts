import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomModel } from '../../core/models/room.model';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { FilterSortService } from '../../core/filter-sort.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  pageTitle = 'Roomss';
  roomListSub: Subscription;
  roomList: RoomModel[];
  filteredRooms: RoomModel[];
  loading: boolean;
  error: boolean;
  query: '';

  constructor(
    private title: Title,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getRoomList();
  }

  private _getRoomList() {
    this.loading = true;
    // Get future, public events
    this.roomListSub = this.api
      .getRooms$()
      .subscribe(
        res => {
          this.roomList = res;
          this.filteredRooms = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnDestroy() {
    this.roomListSub.unsubscribe();
  }

}
