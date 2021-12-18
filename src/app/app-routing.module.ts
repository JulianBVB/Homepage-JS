import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'thank-you', component: ThankYouComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
