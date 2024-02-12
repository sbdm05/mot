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
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-template-screenshot',
  templateUrl: './template-screenshot.page.html',
  styleUrls: ['./template-screenshot.page.scss'],
})
export class TemplateScreenshotPage implements OnInit {
  @Input() base64: string;
  @Input() htmlBase!: any;
  public content!: any;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private modalStateService: ModalStateService,
    private pdfGenerator: PDFGenerator
  ) {}

  ngOnInit() {
    console.log(this.htmlBase, 'htmlBase'); // renvoie string
  }

  closeModal() {
    this.modalStateService.modalstate$.next('close');
    this.modalController.dismiss();
  }

  downloadLetter() {
    const content = document.getElementById('content').innerHTML;

    // Extract the base64-encoded string from the src attribute
    //const base64String = imgElement.src.split(',')[1];

    //console.log(base64String);

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

  downloadLetterJs() {
    console.log('cliqué');

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();
    // Add HTML content to the PDF
    // Add a circle to the PDF
    doc.circle(100, 100, 50, 'S');
    doc.save('example.pdf');
    const blobPDF = doc.output('bloburl');
  }
}
