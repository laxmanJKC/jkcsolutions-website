import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { WebsiteLayoutComponent } from './layouts/website/website-layout.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {path: '', component: WebsiteLayoutComponent, children: [
    {path: '', loadChildren: () => import('./layouts/website/website-layout.module').then(mod => mod.WebsiteLayoutModule)}
  ]}
];

const routerOptions: ExtraOptions = {
  useHash: true,
  enableTracing: true,
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
  // ...any other options you'd like to use
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
