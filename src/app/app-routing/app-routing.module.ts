import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'index', component: HomeComponent},
  {path: 'index/Ar', component: HomeComponent,},
  {path: 'index/ar', component: HomeComponent},
  {path: 'index/En', component: HomeComponent},
  {path: 'index/en', component: HomeComponent},
  {path: '**', redirectTo: 'index'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }),
    CommonModule
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
