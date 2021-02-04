import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { defaultDataServiceConfig, entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig,
    },
  ],
})
export class CommentsModule {}
