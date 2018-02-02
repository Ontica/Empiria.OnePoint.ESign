/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { SessionService } from '../general/session.service';

@Injectable()
export class SecurityGuardService implements CanActivate {

  constructor(private router: Router, private session: SessionService) { }

  public canActivate() {
    const principal = this.session.getPrincipal();

    if (!principal.isAuthenticated) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
