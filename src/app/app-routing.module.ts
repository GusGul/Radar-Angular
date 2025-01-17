import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroClientesComponent } from './views/cadastro-cliente/cadastro-clientes.component';
import { CadastroLojasComponent } from './views/cadastro-loja/cadastro-lojas.component';
import { CadastroPedidosClientesComponent } from './views/cadastro-pedido-cliente/cadastro-pedidos-clientes.component';
import { CadastroProdutosComponent } from './views/cadastro-produto/cadastro-produtos.component';
import { HomeComponent } from './views/home/home.component';
import { ListaClientesComponent } from './views/lista-clientes/lista-clientes.component';
import { ListaLojasComponent } from './views/lista-lojas/lista-lojas.component';
import { ListaPedidosComponent } from './views/lista-pedidos/lista-pedidos.component';
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { LoginComponent } from './views/login/login.component';
import { GoogleMapsDemoComponent } from './views/google-maps-demo/google-maps-demo.component';
import { AutenticadoGuard } from './services/guard/autenticado.guard';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
 {path: '',redirectTo: 'home', pathMatch:'full'},
 {path: 'login', component:LoginComponent},
 {path: 'home', canActivate: [AutenticadoGuard], component:HomeComponent},
 {path: 'dashboard', canActivate: [AutenticadoGuard], component:DashboardComponent },
 {path: 'cadastro-cliente', canActivate: [AutenticadoGuard], component:CadastroClientesComponent},
 {path: 'lista-clientes', canActivate: [AutenticadoGuard], component:ListaClientesComponent},
 {path: 'cadastro-cliente/:id', canActivate: [AutenticadoGuard], component:CadastroClientesComponent},
 {path: 'cadastro-produto', canActivate: [AutenticadoGuard], component:CadastroProdutosComponent},
 {path: 'lista-produtos', canActivate: [AutenticadoGuard], component:ListaProdutosComponent},
 {path: 'cadastro-produto/:id', canActivate: [AutenticadoGuard], component:CadastroProdutosComponent},
 {path: 'cadastro-pedido', canActivate: [AutenticadoGuard], component:CadastroPedidosClientesComponent},
 {path: 'cadastro-pedido/:id', canActivate: [AutenticadoGuard], component:CadastroPedidosClientesComponent},
 {path: 'lista-pedidos', canActivate: [AutenticadoGuard], component: ListaPedidosComponent},
 {path: 'lista-lojas', canActivate: [AutenticadoGuard], component:  ListaLojasComponent},
 {path: 'cadastro-loja', canActivate: [AutenticadoGuard], component:CadastroLojasComponent},
 {path: 'cadastro-loja/:id', canActivate: [AutenticadoGuard], component:CadastroLojasComponent},
 {path: 'lojas-maps/:id', canActivate: [AutenticadoGuard], component: GoogleMapsDemoComponent},
 {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
