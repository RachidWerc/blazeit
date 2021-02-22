import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevMOComponent } from './dev-mo/dev-mo.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {ProgressBarModule} from 'primeng/progressbar';
import {TreeModule} from 'primeng/tree';


@NgModule({
  declarations: [
    AppComponent,
    DevMOComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    DataViewModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    RatingModule,
    ProgressBarModule,
    TreeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
