import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// tslint:disable-next-line:import-spacing
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule
    ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
