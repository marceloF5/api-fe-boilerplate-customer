import { Injectable } from "@angular/core";
import { Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) { }

    checkAuthetication(path: string): boolean {
        if(!this.loginService.isLoggedIn()) {            
            this.loginService.redirectToLogin(`/${path}`);
        }
        return this.loginService.isLoggedIn();
    }
    
    canLoad(route: Route): boolean {  
        return this.checkAuthetication(route.path)
    } 
    
    canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkAuthetication(activatedRoute.routeConfig.path)
    }
}