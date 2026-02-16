import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDashboardComponent } from "./shared/components/post-dashboard/post-dashboard.component";
import { PostFormComponent } from "./shared/components/post-form/post-form.component";
import { SinglePostComponent } from "./shared/components/single-post/single-post.component";


const appRoutes : Routes = [
    {
        path : 'posts',
        component : PostDashboardComponent
    },
    {
        path : '',
        redirectTo : 'posts',
        pathMatch : 'full'
    },
    {
        path : 'posts/addPost',
        component : PostFormComponent
    },
    {
        path : 'posts/:id',
        component : SinglePostComponent
    },
    {
        path : 'posts/:id/edit',
        component : PostFormComponent
    }
]




@NgModule({

    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]

})
export class AppRoutingModule{

}