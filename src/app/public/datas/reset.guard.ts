import { Injectable } from '@angular/core';
import { Router,ActivatedRoute,CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { port,name,sessionKey } from './portName';
import { NzMessageService,NzModalService} from 'ng-zorro-antd';

@Injectable()
export class ResetGuard implements CanActivate {
  constructor(
    private router:Router
  ) {

  }
  canActivate() {
    if (localStorage.getItem(sessionKey.USERID)) {
      localStorage.setItem(sessionKey.NOW,'0');
      return true;
    } else {
      this.router.navigate(['/public']);
      return false;
    }
  }
}



