/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Exception } from '..';


export interface MessageBox {
  title: string;
  message: string;
  show: boolean;
  confirmWindow: boolean;
}

@Injectable()
export class MessageBoxService {

  private _messageBoxSubject = new Subject<MessageBox>();

  private _confirmresult = new Subject<boolean>();

  constructor() {
    // no-op
  }

  get messageBoxState(): Observable<MessageBox> {
    return this._messageBoxSubject.asObservable();
  }

  set confirmResult(result: boolean) {

    this._confirmresult.next(result);
    this._confirmresult.complete();

  }


  public show(message: string | Error | Exception,
              title?: string) {
    let displayMsg = '';
    let displayTitle = ''

    if (typeof message === 'string') {
      displayMsg = message;

      displayTitle = title || '';

    } else if (message instanceof Exception) {
      displayMsg = (message as Exception).message;
      displayMsg += "<br><br>";
      displayMsg += (message as Exception).innerError.message;

      displayTitle = title || 'Excepción';

    } else if (message instanceof Error) {
      displayMsg = (message as Error).message;

      displayTitle = title || 'Excepción';

    } else {
      displayMsg = message;

      displayTitle = title || '';
    }

    this._messageBoxSubject.next({ show: true, title: displayTitle, message: displayMsg, confirmWindow: false });

  }

  public confirm(message: string, title:string): Observable<boolean> {
    this._messageBoxSubject.next(<MessageBox> {show: true, title: title, message: message, confirmWindow: true });

    this._confirmresult = new Subject<boolean>();

    return this._confirmresult.asObservable();
  }


}
