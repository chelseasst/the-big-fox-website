import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CoreModule } from '../core/core.module';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewsComponent } from './views/views.component';
import { IncomeComponent } from './income/income.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms';
import { UtilisModule } from '../utilis/utilis.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ViewsComponent,
    IncomeComponent,
    NewAdminComponent,
    DeleteAdminComponent,
    OrdersComponent,
    AddProductComponent,
    AddMenuItemComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    FormsModule,
    UtilisModule
  ],
  exports:[AdminComponent]
})
export class AdminModule { }
