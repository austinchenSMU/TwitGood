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
const forms_1 = require("@angular/forms");
const login_details_1 = require("../api/login-details");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const user_repository_1 = require("../api/user-repository");
require("rxjs/add/operator/toPromise");
const ng2_loading_animate_1 = require("ng2-loading-animate");
let FrontpageComponent = class FrontpageComponent {
    constructor(http, router, userService, _loadingSvc) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this._loadingSvc = _loadingSvc;
        this.loginFail = false;
        this.handleNotExists = false;
        this.loginUrl = 'https://private-17592-twitgood.apiary-mock.com/users/auth/';
        this.createUrl = 'https://private-17592-twitgood.apiary-mock.com/user/';
        this.create = false;
        this.details = new login_details_1.LoginDetails(false);
    }
    ;
    ngOnInit() {
        this.stop();
        if (this.userService.getLoginStatus()) {
            this.router.navigate(["home"]);
        }
    }
    createFlip() {
        this.create = !this.create;
        this.details = new login_details_1.LoginDetails(this.create);
        this.loginFail = false;
        this.myForm.reset();
    }
    accountInteraction() {
        if (this.create) {
            this.start();
            this.http
                .post(this.createUrl, this.details)
                .toPromise()
                .then(x => this.validateResult(x.json()))
                .catch(x => x.message);
        }
        else {
            this.http
                .post(this.loginUrl, this.details)
                .toPromise()
                .then(x => this.validateResult(x.json()))
                .catch(x => x.message);
        }
    }
    validateResult(result) {
        console.log(result);
        this.stop();
        if (result.success) {
            if (this.create) {
                this.goToAccount(this.details.twitter_handle);
            }
            else {
                this.goToAccount(result.handle);
            }
        }
        else {
            this.loginFail = true;
            if (result.location = "twitter_handle") {
                this.handleNotExists = true;
            }
        }
    }
    goToAccount(handle) {
        console.log(handle);
        this.userService.setUser(handle, this.create);
        this.router.navigate(['home']);
    }
    start() {
        this._loadingSvc.setValue(true);
    }
    stop() {
        this._loadingSvc.setValue(false);
    }
};
__decorate([
    core_1.ViewChild("loginForm"),
    __metadata("design:type", forms_1.NgForm)
], FrontpageComponent.prototype, "myForm", void 0);
FrontpageComponent = __decorate([
    core_1.Component({
        selector: 'frontpage',
        templateUrl: './app/frontpage/frontpage.component.html',
        styleUrls: ['./app/frontpage/frontpage.component.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        user_repository_1.UserRepository,
        ng2_loading_animate_1.LoadingAnimateService])
], FrontpageComponent);
exports.FrontpageComponent = FrontpageComponent;
//# sourceMappingURL=frontpage.component.js.map