import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' ;
//import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ { path: 'register', component: RegisterComponent }];
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    RegisterComponent,
    //FileSelectDirective,
    //LoginComponent
  ],
  imports: [FileUploadModule,
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
