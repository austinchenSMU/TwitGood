export class LoginDetails{
    email : string;
    password : string;
    confirm : string;
    create : boolean;

    constructor(create : boolean){
        this.create = create;
    }
}