import { WebsiteLayoutRoutes } from './website-layout.routing';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WebsiteLayoutComponent } from './website-layout.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DigitalMarketingComponent } from 'src/app/pages/digital-marketing/digital-marketing.component';
import { CdaasComponent } from 'src/app/pages/cdaas/cdaas.component';
import { CsaasComponent } from 'src/app/pages/csaas/csaas.component';
import { SdoComponent } from 'src/app/pages/sdo/sdo.component';
import { OdooComponent } from 'src/app/pages/odoo/odoo.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { StaffingConsultingComponent } from 'src/app/pages/staffing-consulting/staffing-consulting.component';
import { CareerComponent } from 'src/app/pages/career/career.component';


@NgModule({
 imports: [
     CommonModule,
     FormsModule,
     RouterModule.forChild(WebsiteLayoutRoutes),
 ],
 declarations: [
     WebsiteLayoutComponent,
     CardComponent,
     NavbarComponent,
     FooterComponent,
     ContactComponent,
     ServicesComponent,
     LandingComponent,
     HomeComponent,
     DigitalMarketingComponent,
     CdaasComponent,
     CsaasComponent,
     SdoComponent,
     OdooComponent,
     AboutComponent,
     CheckboxComponent,
     RadioComponent,
     StaffingConsultingComponent,
     CareerComponent
 ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
 exports: [WebsiteLayoutComponent]
})

export class WebsiteLayoutModule {}
