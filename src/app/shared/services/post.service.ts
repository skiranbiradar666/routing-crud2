import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 Base_Url : string = environment.Base_Url

  Post_Url : string = `${this.Base_Url}/posts.json`

  constructor(private _http : HttpClient,
    private _snackbar : MatSnackBar
  ) { }

  fetchPosts() : Observable<any>{

    return this._http.get<any>(this.Post_Url)
            .pipe(
              map(obj =>{
                let postArr : Array<Ipost> = []
                for(const key in obj){
                  postArr.push({...obj[key], id : key})
                }
                return postArr
              })
              
            )

  }

  addPost(post : Ipost) : Observable<{name : string}>{

    this._snackbar.open('The new Post is Added Successfully !!!', 'close', {
      horizontalPosition : 'center',
      verticalPosition : 'top',
      duration : 3000
    })

    return this._http.post<any>(this.Post_Url, post)
  }

  fetchPostById(id : string) : Observable<Ipost>{
      let Post_Url = `${this.Base_Url}/posts/${id}.json`

     return this._http.get<Ipost>(Post_Url)
  }

  removePost(id : string) : Observable<string>{
    let Remove_Url = `${this.Base_Url}/posts/${id}.json`

    this._snackbar.open('The Post is Removed Successfully !!!', 'close', {
      horizontalPosition : 'center',
      verticalPosition : 'top',
      duration : 3000
    })
    return this._http.delete<string>(Remove_Url)
  }

  updatePost(post : Ipost){
    let Update_Url = `${this.Base_Url}/posts/${post.id}.json`

     this._snackbar.open('The Post is Updated Successfully !!!', 'close', {
      horizontalPosition : 'center',
      verticalPosition : 'top',
      duration : 3000
    })
    return this._http.put(Update_Url, post)


  }

  handleError(){
    
  }
}
