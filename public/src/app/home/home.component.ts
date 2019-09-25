import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user:any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
        this.user=""
    }
    login(){
        if(this.user.length > 2){
            this._httpService.login(this.user);
            this._router.navigate(['/actions'])
        }
    }
}
