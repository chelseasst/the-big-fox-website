import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item-drinks/menu-item.component';
import { MenuRoutingModule } from './menu-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuBakeryComponent } from './menu-bakery/menu-bakery.component';
import { MenuItemBakeryComponent } from './menu-item-bakery/menu-item-bakery.component';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent, MenuDrinksComponent, MenuBakeryComponent, MenuItemBakeryComponent],
  imports: [CommonModule, MenuRoutingModule, CoreModule, SharedModule],
  exports:[MenuComponent]
})
export class MenuModule {}
