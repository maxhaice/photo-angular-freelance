import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {AdvicesComponent} from "../../components/advices/advices.component";
import {RoomComponent} from "../../routes/room/room.component";
import {RoomsComponent} from "../../routes/room-photos/room.component";
import {ProposalsComponent} from "../../routes/proposals/proposals.component";
import {FavoritesComponent} from "../../routes/favorites/favorites.component";
import {LandingComponent} from "../../routes/landing/landing.component";
import {RoutingModule} from "../routing/routing.module";
import {CommonModule} from "@angular/common";
import {FilterComponent} from "../../routes/filter/filter.component";


@NgModule({
  declarations: [
    NavigationComponent,
    AdvicesComponent,
    RoomComponent,
    RoomsComponent,
    ProposalsComponent,
    FavoritesComponent,
    LandingComponent,
    FilterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    LandingComponent,
    NavigationComponent,
    AdvicesComponent,
    RoomComponent,
    RoomsComponent,
    ProposalsComponent,
    FavoritesComponent,
    FilterComponent
  ]
})
export class SharingModule { }
