import { Routes, ExtraOptions } from '@angular/router';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { WebDevelopmentComponent } from 'src/app/pages/web-development/web-development.component';
import { DigitalMarketingComponent } from 'src/app/pages/digital-marketing/digital-marketing.component';
import { CdaasComponent } from 'src/app/pages/cdaas/cdaas.component';
import { CsaasComponent } from 'src/app/pages/csaas/csaas.component';
import { SdoComponent } from 'src/app/pages/sdo/sdo.component';
import { OdooComponent } from 'src/app/pages/odoo/odoo.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { CareerComponent } from 'src/app/pages/career/career.component';
import { SoftwareDevelopmentComponent } from 'src/app/pages/software-development/software-development.component';
import { SoftwareTestingComponent } from 'src/app/pages/software-testing/software-testing.component';
import { StaffingConsultingComponent } from 'src/app/pages/staffing-consulting/staffing-consulting.component';
import { ItConsultingComponent } from 'src/app/pages/it-consulting/it-consulting.component';
import { SoftwareTrainingComponent } from 'src/app/pages/software-training/software-training.component';


export const WebsiteLayoutRoutes: Routes = [
  // tslint:disable-next-line: max-line-length
  {path: '', component: HomeComponent, data: {title: 'JKC Solutions - IT Consulting | Staffing Solutions | Software Development | Software Testing | Software Training'}},

  {path: 'home',  component: HomeComponent, data: {title: 'JKC Solutions - IT Consulting | Staffing Solutions | Software Development | Software Testing | Software Training'}},
  // tslint:disable-next-line: max-line-length
  {path: 'career', component: CareerComponent, data: {title: 'JKC Solutions - Career | Job Seeker | Job Opportunity'}},
  // tslint:disable-next-line: max-line-length
  {path: 'contact-us', component: ContactComponent, data: {title: 'JKC Solutions - Business Solutions | DevOps | Cloud Solutions | Web Hosting | Odoo ERP | CICD | AWS | Digital Marketing | Development', content: 'weboxapp, Weboxapps, DevOps, Continous Deployment, Cloud Solutions, Cloud Services, Cloud Support, Web Hosting, Digital Marketing, Outsourcing, Cloud Hosting, Web Development, Odoo Supports, Odoo Development, Odoo ERP, Odoo CRM, Odoo CMS, Email Marketing, Open Source'}},
  // tslint:disable-next-line: max-line-length
  {path: 'web-development', component: WebDevelopmentComponent, data: {title: 'JKC Solutions - Web Design | Web Development', content: 'weboxapp, Weboxapps, Web Design, Web Development, Go Live, Web Developer, Bootstrap, Material Design, Website, Domain, Web Hosting, Cloud Hosting, Responsive Web Design, Chat Bot'}},
  // tslint:disable-next-line: max-line-length
  {path: 'digital-marketing', component: DigitalMarketingComponent, data: {title: 'JKC Solutions - Digital Marketing | Lead Generation | SEO | Branding | Marketing', content: 'weboxapp, Weboxapps, Digital Marketing, Email Marketing, SEO, Marketing, Online Reputation Management, Branding, Content Marketing, SEM, SMO, Lead generation, Go Live, Go Digital, B2B Marketing, B2C Marketing'}},
  // tslint:disable-next-line: max-line-length
  {path: 'continous-delivery-as-a-services', component: CdaasComponent, data: {title: 'JKC Solutions - DevOps | CICD | Continous Devlivery | Continous Deployment | Automation Deployment | Ansible | Openshift | Configuration Management | Puppet', content: 'weboxapp, Weboxapps, DevOps, CICD, Continous Devlivery, Continous Deployment, Automation Deployment, Puppet, Ansible, Openshift'}},
  // tslint:disable-next-line: max-line-length
  {path: 'cloud-supports-as-a-services', component: CsaasComponent, data: {title: 'JKC Solutions - Cloud Supports | Cloud Hosting | AWS', content: 'weboxapp, Weboxapps, Cloud Supports, Cloud Services, AWS, GAE, Google Cloud, Firebase, Microsoft Azure, Linux, Machine Learning, DevOps'}},
  // tslint:disable-next-line: max-line-length
  {path: 'software-development', component: SoftwareDevelopmentComponent, data: {title: 'JKC Solutions - Cloud Supports | Cloud Hosting | AWS', content: 'weboxapp, Weboxapps, Cloud Supports, Cloud Services, AWS, GAE, Google Cloud, Firebase, Microsoft Azure, Linux, Machine Learning, DevOps'}},
  // tslint:disable-next-line: max-line-length
  {path: 'crm-erp', component: OdooComponent, data: {title: 'JKC Solutions | ERP | CRM | JKC Solutions', content: 'weboxapp, Weboxapps, Odoo, Odoo Sales, Odoo Purchase, Odoo Warehouse & Logistics, Odoo HR, Project Management, Odoo ERP, Odoo CMS, Odoo Marketing, CRM, ERP'}},
  // tslint:disable-next-line: max-line-length
  {path: 'about-us', component: AboutComponent, data: {title: 'JKC Solutions - Business Solutions | DevOps | Cloud Solutions | Web Hosting | Odoo ERP | CICD | AWS | Digital Marketing | Development | weboxapp', content: 'weboxapp, Weboxapps, DevOps, Continous Deployment, Cloud Solutions, Cloud Services, Cloud Support, Web Hosting, Digital Marketing, Outsourcing, Cloud Hosting, Web Development, Odoo Supports, Odoo Development, Odoo ERP, Odoo CRM, Odoo CMS, Email Marketing, Open Source'}},
  // tslint:disable-next-line: max-line-length
  {path: 'software-development-outsourcing', component: SdoComponent, data: {title: 'JKC Solutions - Software development Outsourcing | Staffing | weboxapp', content: 'weboxapp, Weboxapps, Software Development, Outsourcing, IT Staffing, Staffing'}},
  // tslint:disable-next-line: max-line-length
  {path: 'staffing-consulting', component: StaffingConsultingComponent, data: {title: 'JKC Solutions - Software development Outsourcing | Staffing | weboxapp', content: 'weboxapp, Weboxapps, Software Development, Outsourcing, IT Staffing, Staffing'}},
  // tslint:disable-next-line: max-line-length
  {path: 'it-consulting', component: ItConsultingComponent, data: {title: 'JKC Solutions - Software development Outsourcing | Staffing | weboxapp', content: 'weboxapp, Weboxapps, Software Development, Outsourcing, IT Staffing, Staffing'}},
  // tslint:disable-next-line: max-line-length
  {path: 'software-testing', component: SoftwareTestingComponent, data: {title: 'JKC Solutions - Software development Outsourcing | Staffing | weboxapp', content: 'weboxapp, Weboxapps, Software Development, Outsourcing, IT Staffing, Staffing'}},
    // tslint:disable-next-line: max-line-length
    {path: 'software-training', component: SoftwareTrainingComponent, data: {title: 'JKC Solutions - Software development Outsourcing | Staffing | weboxapp', content: 'weboxapp, Weboxapps, Software Development, Outsourcing, IT Staffing, Staffing'}},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'radio', component: RadioComponent},
];


const WebsiteRouterOptions: ExtraOptions = {
    useHash: true,
    enableTracing: true,
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
    // ...any other options you'd like to use
};
