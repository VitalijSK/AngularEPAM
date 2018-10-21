import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormAddComponent } from './form-add/form-add.component';

import { KeysPipe } from './pipes/getKeysObj.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: 'singup', component: FormAddComponent },
    { path: 'notfound',  component: NotFoundComponent },
    {   path: '',
        redirectTo: '/notfound',
        pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    FormAddComponent,
    KeysPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
