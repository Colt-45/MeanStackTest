import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';
import { getDefaultService } from 'selenium-webdriver/opera';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    user:any
    newquestion:any
    errors:null
    constructor(
        private _httpService: HttpService,
    private _route: ActivatedRoute,
  private _router: Router
    ) { }

    ngOnInit() {
        this.newquestion={name:"", question:"", option1:"", option2:"", option3:"", option4:"",};
        this.getuser()
    }

    addQuestion(){
        console.log("new", this.user)
        console.log("question",this.newquestion)
        this.newquestion.name= this.user
        let observable = this._httpService.createQuestion(this.newquestion);
        observable.subscribe(data => {
          console.log("Created A task!", data)
          if(data.errors){
              this.errors= data.errors
              console.log("returned",this.errors)
          }
          else{
              this.errors=null
          }
        });
        this.newquestion = {name: this.user, question:"", option1:"", option2:"", option3:"", option4:"",};
        this._router.navigate(['/actions'])
    }
    getuser(){
        let observable = this._httpService.nowuser();
            this.user = observable
            console.log(this.user)
    }
}
