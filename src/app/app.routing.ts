import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

const appRoute : Routes = [
]

export const appRoutingProviders : any[] = [
  {path: '', component: UsuariosComponent},
];
export const routing : ModuleWithProviders<any> =  RouterModule.forRoot(appRoute);
