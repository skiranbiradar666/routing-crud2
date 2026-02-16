import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from '../../model/posts';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

 constructor(private _activeRoute : ActivatedRoute,
    private _postService : PostService,
    private _matDialog : MatDialog,
    private _router : Router
  ) { }

  postId !: string
  postobj !: Ipost

  ngOnInit(): void {
    console.log(this._activeRoute.snapshot.params['id'])
    this.getSinglePost()
  }

  getSinglePost(){
    console.log(this._activeRoute.snapshot.params['id'])
    this.postId = this._activeRoute.snapshot.params['id']
    if(this.postId){
        this._postService.fetchPostById(this.postId)
            .subscribe({
              next : data =>{
                console.log(data)
                this.postobj = {...data, id : this.postId}
              },
              error : err =>{
                console.log(err)
              }
            })
    }
  }

  onRemove(){
    let matConfig = new MatDialogConfig()
    matConfig.data = 'Are you sure want to Remove it?'
    matConfig.width = '400px'

    let matRef = this._matDialog.open(GetConfirmComponent, matConfig)

    matRef.afterClosed()
        .subscribe(flag =>{
          if(flag && this.postobj?.id){
            this._postService.removePost(this.postobj.id)
                .subscribe({
                  next : () =>{
                    console.log('post deleted !!')
                    this._router.navigate(['/posts'])
                  },
                  error : err =>{
                    console.log(err)
                  }
                })
          
            // make API call  for Remove
          }
        })
  }


}
