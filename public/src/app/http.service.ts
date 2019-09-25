import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    user:any

    constructor(private _http: HttpClient) {
    }

    getQuestions(){
        return this._http.get('/questions');
    }
    getQuestion(id){
        return this._http.get(`/questions/${id}`);
    }
    createQuestion(newquestion){
        return this._http.post('/question', newquestion);
    }
    login(newuser){
        this.user= newuser
        console.log("newuser", newuser)
    }
    nowuser(){
        return this.user 
    }
    logout(){
        this.user= ""
    }
    deletequestion(id){
        return this._http.delete(`/question/${id}`);
    }
    editquestion(id, edited){
        return this._http.put(`/question/${id}`, edited);
    }
    getsearch(val){
        return this._http.get('/search', val);
    }
    addvote1(id){
        return this._http.get(`/vote1/${id}`);
    }
    addvote2(id){
        return this._http.get(`/vote2/${id}`);
    }
    addvote3(id){
        return this._http.get(`/vote3/${id}`);
    }
    addvote4(id){
        return this._http.get(`/vote4/${id}`);
    }
    
}