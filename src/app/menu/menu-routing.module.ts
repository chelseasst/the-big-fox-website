import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuBakeryComponent } from './menu-bakery/menu-bakery.component';

const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'menu-drinks' },
      { path: 'menu-drinks', component: MenuDrinksComponent },
      { path: 'menu-bakery', component: MenuBakeryComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
