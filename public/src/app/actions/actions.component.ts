import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

    user:any
    questions:any
    searched:any
    searchres:null
    

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
  private _router: Router
  ) { }

  ngOnInit() {
    this.getquestions();
    this.getuser();
    this.searched=""
  }

  logout(){
        this._httpService.logout();
        this._router.navigate(['/home'])
  }
  getquestions(){
    let observable = this._httpService.getQuestions();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.questions = data;
    });
    }

    search(){
        this.searchres=[]
        console.log("searched", this.searched)
        for(let x in this.questions){
            if(this.questions[x].name == this.searched){
                this.searchres.push(this.questions[x])
                continue
            }
            else if(this.questions[x].question == this.searched){
                this.searchres.push(this.questions[x])
                continue
            }
        }
        console.log("finished", this.searchres)

    }

    deleteQuestion(id){
      console.log("Delete", id)
    let Observable = this._httpService.deletequestion(id);
    Observable.subscribe(data => {
        console.log("Deleted Task",data)
      });
      this.getquestions()
  }
  getuser(){
    let observable = this._httpService.nowuser();
    this.user = observable
    console.log(this.user)
    }
}
