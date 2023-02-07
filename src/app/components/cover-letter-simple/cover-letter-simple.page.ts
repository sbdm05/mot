import { Component, Input, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-cover-letter-simple',
  templateUrl: './cover-letter-simple.page.html',
  styleUrls: ['./cover-letter-simple.page.scss'],
})
export class CoverLetterSimplePage  {
  @Input() user: User;
  content: string;
  today: number = Date.now();

  constructor(
    private modalController: ModalController,
    private pdfGenerator: PDFGenerator
  ) {}
  closeModal() {
    this.modalController.dismiss();
  }

  downloadLetter() {
    this.content = document.getElementById('main').innerHTML;
    const options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'cover-letter.pdf',
    };
    this.pdfGenerator
      .fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
}
