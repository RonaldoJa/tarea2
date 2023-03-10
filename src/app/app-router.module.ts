import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarClienteComponent } from "./agregar-cliente/agregar-cliente.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { EditarClienteComponent } from "./editar-cliente/editar-cliente.component";
import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";

//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'sesion', component:LoginComponent},
    {path:'editar', component:EditarClienteComponent},
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}