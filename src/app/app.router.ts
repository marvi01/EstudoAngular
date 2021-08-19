import { Routes, RouterModule } from '@angular/router'
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
const routes: Routes = [
    //home
    {
        path: '',
        component: ListaLembreteComponent
    },
    //Products
    {
        path: 'Criar',
        component: CriarLembreteComponent
    },
    {
        path: 'Editar/:id',
        component: EditarLembreteComponent
    },
    {
        path:'**',
        redirectTo: ''
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);