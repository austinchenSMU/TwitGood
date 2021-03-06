"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
let UserRepository = class UserRepository {
    constructor(http1, http2) {
        this.http1 = http1;
        this.http2 = http2;
        this._apiUrl = 'https://private-09ea1-twitgood.apiary-mock.com/user/';
        this.loggedIn = false;
    }
    getUserData(handle) {
        let apiUrl = 'https://private-09ea1-twitgood.apiary-mock.com/user/' + handle;
        return this.http1.get(apiUrl).map((res) => res.json());
    }
    getTweet(tweetLink) {
        let tweetUrl = 'https://publish.twitter.com/oembed?url=' + tweetLink;
        return this.http2.get(tweetUrl).map((res) => res.json());
    }
    setUser(user, created) {
        this.user = user;
        this.loggedIn = true;
        this.created = created;
    }
    logout() {
        this.user = null;
        this.loggedIn = false;
    }
    getLoginStatus() {
        return this.loggedIn;
    }
    getUser() {
        return this.user;
    }
    getCreated() {
        return this.created;
    }
};
UserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Http])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map