import { UserData } from './../api/user-data';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../api/user';
import { UserRepository } from './../api/user-repository';

@Component({
    moduleId: module.id,
    selector: 'account-detail',
    templateUrl: 'account-detail.component.html',
    styleUrls: [ 'account-detail.component.css' ]
})

export class AccountDetailComponent{
    user: User;// = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");
    // accountAge: string;
    // topHashTags: string[];
    // topWords: string[];
    userData: any;
    constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserRepository){}

    ngOnInit(){
      this.user = new User('twitgood');
      
      this.userService.getUserData(this.user.twitterHandle).subscribe(
        (data) => {this.userData = data,
            this.user.accountage = this.userData.hourlyactivity,
            this.user.tophashtags = this.userData.tophashtags,
            this.user.topwords = this.userData.topwords
        }
      );            
    }
}