/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { Component } from '@angular/core';

import { SessionService } from '../../core';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public userName = 'UserName || et al';
  public title = 'Firma electrónica';
  public breadcrumb = '';

  public constructor(private session: SessionService) {
    const principal = session.getPrincipal();

//    this.userName = principal.identity.fullname;
  }
   
}
