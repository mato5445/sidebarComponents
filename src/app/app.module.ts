import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './side/sidebar/sidebar.component';
import { PortraitComponent } from './side/sideComponents/portrait/portrait.component';
import { IconsComponent } from './side/sideComponents/icons/icons.component';
import { NavigationComponent } from './side/sideComponents/navigation/navigation.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { AboutComponent } from './sections/about/about.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ContactComponent } from './sections/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PortraitComponent,
    IconsComponent,
    NavigationComponent,
    MainContentComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
