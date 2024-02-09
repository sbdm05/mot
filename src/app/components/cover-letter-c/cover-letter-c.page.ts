import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/user/user';
import { TemplateScreenshotPage } from '../template-screenshot/template-screenshot.page';

@Component({
  selector: 'app-cover-letter-c',
  templateUrl: './cover-letter-c.page.html',
  styleUrls: ['./cover-letter-c.page.scss'],
})
export class CoverLetterCPage implements AfterViewInit {
  @Input() user: User;
  content: string;
  today: number = Date.now();

  constructor(
    private modalController: ModalController,
    private pdfGenerator: PDFGenerator
  ) {}

  ngAfterViewInit() {
    this.onGeneratePreview();
  }

  onGeneratePreview() {
    // 1 - on créé un PDF
    this.content = document.getElementById('main').innerHTML;
    console.log(this.content); // ok j'ai le contenu html

    // ici on vérifie encore le base64

    if (this.content && this.user) {
      const options = {
        documentSize: 'A4',
        type: 'base64',
        // landscape: 'portrait',
        // fileName: 'cover-letter.pdf',
      };

      this.pdfGenerator
        .fromData(this.content, options)
        .then((base64) => {
          console.log('base64 present ou pas', base64); // ici renvoie une chaine de caractères
          //console.log(this.content); // ici content visible

          this.openPdfPreview(base64);
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  }

  async openPdfPreview(base64: string) {
    console.log(base64, 'depuis openPdfPreview'); // string

    // documentation
    // ici on passe à la modal le document au format base64 et le contenu HTML
    // pour générer le pdf
    const coverLetter = await this.createModal(TemplateScreenshotPage, {
      base64,
      htmlBase: this.content,
    });
    await coverLetter.present();
  }

  async createModal(
    component,
    componentProps?,
    cssClass?
  ): Promise<HTMLIonModalElement> {
    const modal = await this.modalController.create({
      component: TemplateScreenshotPage,
      cssClass,
      componentProps,
      backdropDismiss: true,
    });
    return modal;
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
