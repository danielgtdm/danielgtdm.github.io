import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { ContentComponent } from '../shared/content/content.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { LayoutRoutingModule } from './layout.routing';

@NgModule({
  declarations: [
    LayoutComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
