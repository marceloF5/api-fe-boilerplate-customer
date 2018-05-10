import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { Route } from "@angular/router";

import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService) {

    }
    
    canLoad(route: Route): boolean {    
        if(!this.loginService.isLoggedIn()) {                
            this.loginService.navigateTo(`/${route.path}`);
        }        
        return this.loginService.isLoggedIn();
    }
}