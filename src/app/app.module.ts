import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AbscenceComponent } from './abscence/abscence.component';
import { SoldeabscenceComponent } from './soldeabscence/soldeabscence.component';
import { NouvelleabscenceComponent } from './nouvelleabscence/nouvelleabscence.component';
import { ListeabscenceComponent } from './listeabscence/listeabscence.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmployelistComponent } from './employelist/employelist.component';
import { EmployeaddComponent } from './employeadd/employeadd.component';
import { EmployeupdateComponent } from './employeupdate/employeupdate.component';
import { EmployedeleteComponent } from './employedelete/employedelete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthguardGuard } from './authguard.guard';
const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'abscences/:id', component: AbscenceComponent },
  { path: 'soldeabscences', component: SoldeabscenceComponent },
  { path: 'abscences/nouvelleabscence/:id', component: NouvelleabscenceComponent },
  { path: 'listeabscences', component: ListeabscenceComponent },
  { path: 'dashboard/:id', component: UserDashboardComponent,canActivate: [AuthguardGuard] }





];


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AbscenceComponent,
    SoldeabscenceComponent,
    NouvelleabscenceComponent,
    ListeabscenceComponent,
    UserDashboardComponent,
    EmployelistComponent,
    EmployeaddComponent,
    EmployeupdateComponent,
    EmployedeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
