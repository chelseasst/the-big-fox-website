import { NgModule } from "@angular/core";
import { OurStoryComponent } from "./our-story/our-story.component";
import { OurStoryRoutingModule } from "./our-story-routing.module";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [OurStoryComponent],
    imports:[OurStoryRoutingModule, CoreModule],
    exports:[OurStoryComponent]
})
export class OurStoryModule{

}