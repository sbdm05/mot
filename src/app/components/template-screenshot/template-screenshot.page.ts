import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-template-screenshot',
  templateUrl: './template-screenshot.page.html',
  styleUrls: ['./template-screenshot.page.scss'],
})
export class TemplateScreenshotPage implements OnInit {
  @Input() imageDataUrl: any;

  @Input() base64: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private modalStateService: ModalStateService
  ) {}

  ngOnInit() {
    console.log('test', this.base64); // renvoie string
  }

  closeModal() {
    this.modalStateService.modalstate$.next('close');
    this.modalController.dismiss();
  }
}
