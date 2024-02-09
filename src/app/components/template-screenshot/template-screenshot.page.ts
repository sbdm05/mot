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

  downloadLetterCanvas() {
    const img = new Image();

    img.onload = () => {
      const A4_WIDTH_MM = 210; // Largeur en millimètres
      const A4_HEIGHT_MM = 297; // Hauteur en millimètres
      const A4_WIDTH_PX = Math.floor(A4_WIDTH_MM * 2.83); // Convertir en pixels à 72 ppp
      const A4_HEIGHT_PX = Math.floor(A4_HEIGHT_MM * 2.83); // Convertir en pixels à 72 ppp

      const canvas = document.createElement('canvas');
      canvas.width = A4_WIDTH_PX;
      canvas.height = A4_HEIGHT_PX;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, A4_WIDTH_PX, A4_HEIGHT_PX); // Dessiner l'image sur le canvas avec les dimensions A4

      const imageData = canvas.toDataURL('image/jpeg');

      const options = {
        documentSize: 'A4',
        type: 'share',
        // landscape: 'portrait',
        fileName: 'motiv-pro.pdf',
      };
      this.pdfGenerator
        .fromData(imageData, options)
        .then((base64) => {
          console.log('PDF généré avec succès');
        })
        .catch((error) => {
          console.log('Erreur lors de la génération du PDF :', error);
        });
    };

    img.onerror = (error) => {
      console.error('Erreur lors du chargement de image', error);
    };

    img.src = `data:image/png;base64,${this.base64}`;
  }
}
