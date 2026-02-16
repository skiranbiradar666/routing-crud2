import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

 constructor(private _postService : PostService,
    private _router : Router,
    private _activeRoute : ActivatedRoute
  ) { }

  isInEditMode : boolean = false
  postId !: string

  postForm !: FormGroup
  ngOnInit(): void {
    this.createPostForm()
    this.postId = this._activeRoute.snapshot.params['id']

    if(this.postId){
      this.isInEditMode = true
      this.editPost()
    }
    
  }

  createPostForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      content : new FormControl(null, [Validators.required]),
      userId : new FormControl(null, [Validators.required])
    })
  }

  editPost(){
    this._postService.fetchPostById(this.postId)
        .subscribe({
          next : data =>{
            this.postForm.patchValue(data)
          },
          error : err =>{
            console.log(err)
          }
        })
  }

  onPostUpdate(){
    if(this.postForm.valid){
      let updateObj = {...this.postForm.value, id : this.postId}
      this._postService.updatePost(updateObj)
            .subscribe({
              next : data =>{
                console.log(data)
                // this._router.navigate(['/posts', this.postId])
                 this._router.navigate(['/posts'])
              }
            })
    }
  }

  onPostAdd(){
       console.log(this.postForm.controls)
    if(this.postForm.valid){
     
      let postObj = this.postForm.value
      this._postService.addPost(postObj)
          .subscribe({
            next : data =>{
              console.log(data)
              this.postForm.reset()
              this._router.navigate(['posts'])
            },
            error : err =>{
              console.log(err)
            }
          })
      console.log(postObj)
    }

  }

}
