import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/aboutPages/aboutPages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';



@NgModule({
  declarations: [
   HomePageComponent,
   AboutPageComponent,
   SidebarComponent,
   ContactPageComponent,
   SearchBoxComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    
  ]
})
export class SharedModule { }
