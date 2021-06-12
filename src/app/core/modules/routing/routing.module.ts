import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {LandingComponent} from "../../routes/landing/landing.component";
import {RoomComponent} from "../../routes/room/room.component";
import {RoomsComponent} from "../../routes/room-photos/room.component";
import {FilterComponent} from "../../routes/filter/filter.component";
import {ProposalsComponent} from "../../routes/proposals/proposals.component";
import {FavoritesComponent} from "../../routes/favorites/favorites.component";


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'room', component: RoomComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'proposals', component: ProposalsComponent },
      { path: 'favorites', component: FavoritesComponent },
    ])
  ],
  exports: [

    RouterModule
  ]
})
export class RoutingModule { }
