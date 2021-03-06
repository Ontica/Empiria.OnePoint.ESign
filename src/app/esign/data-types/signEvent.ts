/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { SignRequest } from './signRequest';

export interface SignEvent {
  uid: string;
  eventType: string;
  timeStamp: Date;
  signRequest: SignRequest;
}
