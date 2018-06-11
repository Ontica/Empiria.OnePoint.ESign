/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Assertion } from '../general/assertion';
import { KeyValue } from '../data-types';


@Injectable()
export class ApplicationSettingsService {

  private readonly configurationFileName = './assets/empiria.config.json';

  private settings: KeyValue[];

  constructor(private http: HttpClient) { }

  public getSettingsArray(): Promise<KeyValue[]> {
    return this.http.get<KeyValue[]>(this.configurationFileName, { observe: 'response' })
                    .toPromise()
                    .then((response) => response.body['settings'])
                    .catch((e) => this.handleLoadSettingsFromFileError(e));
  }

  private handleLoadSettingsFromFileError(error): Promise<never> {
    return Promise.reject(new Error(`Critical error: Can't read ${this.configurationFileName} ` +
                                    `application settings file. ${error.status} ${error.statusText}`));
  }

}
