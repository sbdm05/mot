import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-cover-letter-premium1',
  templateUrl: './cover-letter-premium1.page.html',
  styleUrls: ['./cover-letter-premium1.page.scss'],
})
export class CoverLetterPremium1Page implements OnInit, OnChanges {
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
  ngOnInit() {
    console.log(this.user, 'Invoice Page ngOnInit');
  }
  ngOnChanges() {
    console.log(this.user, 'Invoice Pagechanges');
  }
}
