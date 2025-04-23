import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';

export const routes: Routes = [
    {path: "registro", component: RegistroComponent},
    {path: "login", component: LoginComponent},
    {path: "", redirectTo: "/registro", pathMatch: "full"}
];
