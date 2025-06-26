import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';
import { UsersComponent } from './users/users.component';
import { IncomeComponent } from './income/income.component';
import { ViewsComponent } from './views/views.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { OrdersComponent } from './orders/orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'views',
        component: ViewsComponent
    },
    {
        path: 'income',
        component: IncomeComponent
    },
    {
        path: 'new-admin',
        component: NewAdminComponent
    },
    {
        path: 'delete-admin',
        component: DeleteAdminComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'add-product',
        component: AddProductComponent
    },
    {
        path: 'add-event',
        component: AddEventComponent
    },
    {
        path:'add-menu-item',
        component:AddMenuItemComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
