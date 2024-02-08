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
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { ModalController } from '@ionic/angular';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-template-screenshot',
  templateUrl: './template-screenshot.page.html',
  styleUrls: ['./template-screenshot.page.scss'],
})
export class TemplateScreenshotPage implements OnInit {
  @Input() base64: string;
  @Input() htmlBase!: any;
  public content!: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private modalStateService: ModalStateService,
    private pdfGenerator: PDFGenerator
  ) {}

  ngOnInit() {
    console.log('test', this.base64); // renvoie string
  }

  closeModal() {
    this.modalStateService.modalstate$.next('close');
    this.modalController.dismiss();
  }

  downloadLetter() {
    // this.content = document.getElementById('content').innerHTML;
    const options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'motiv-pro.pdf',
    };
    this.pdfGenerator
      .fromData(this.htmlBase, options)
      .then((base64) => {
        console.log('OK', this.base64);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
}
