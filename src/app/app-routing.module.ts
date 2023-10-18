import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  //Lazyload (agilizar o carregamento da página)
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  //Quando carregar a página raiz, já direcionar para a página produtos
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  //LAzyLoad (agilizar o carregamento da página)
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  //Rota para a página não encontrada
  { path: "**", component: NaoEncontradoComponent },
]  

@NgModule({
  declarations: [],
  //Importando 
  imports: [
    RouterModule.forRoot(routes)
  ],
  //Exportando rotas
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }