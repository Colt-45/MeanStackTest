import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    question:any

  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.getquestion(params["id"]);
        console.log(params["id"])
    });
      
  }

    getquestion(id){
        let observable = this._httpService.getQuestion(id);
        observable.subscribe(data => {
        this.question = data;
        });
    }
    addvote1(id){
        let observable = this._httpService.addvote1(id);
        observable.subscribe(data => {
        this.question = data;
        });
    }
    addvote2(id){
        let observable = this._httpService.addvote2(id);
        observable.subscribe(data => {
        this.question = data;
        });
    }
    addvote3(id){
        let observable = this._httpService.addvote3(id);
        observable.subscribe(data => {
        this.question = data;
        });
    }
    addvote4(id){
        let observable = this._httpService.addvote4(id);
        observable.subscribe(data => {
        this.question = data;
        });
    }

}
