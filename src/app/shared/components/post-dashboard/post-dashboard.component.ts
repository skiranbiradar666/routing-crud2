import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../model/posts';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  constructor(private _postService : PostService) { }

  postArr : Array<Ipost> = []

  isLoading = true;
  

  ngOnInit(): void {
    this.getPost()
  }

  trackByPostId(index: number, post: Ipost): string {
  return post.id;
}

  getPost(){
    this._postService.fetchPosts()
        .subscribe({
          next : data =>{
            console.log(data)
            this.postArr = data
            this.isLoading = false;
          },
          error : err =>{
            console.log(err)
          }
        })
  }

}
