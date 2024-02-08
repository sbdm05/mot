import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalStateService {
  public modalstate$: Subject<any> = new Subject();

  constructor() {}
}
