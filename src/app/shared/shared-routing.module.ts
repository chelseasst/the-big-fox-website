import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from "./checkout/checkout.component";



const routes: Routes = [
    {
        path: '',
        component: CheckoutComponent, // Redirect root path to "store"
        pathMatch: 'full',
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SharedRoutingModule { }