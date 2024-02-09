import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  Sanitizer,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { User } from 'src/app/user/user';
import { TemplateScreenshotPage } from '../template-screenshot/template-screenshot.page';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss'],
})
export class CoverLetterComponent implements OnInit, AfterViewInit {
  @Input() user: User;
  content: string;
  today: number = Date.now();
  //private modalState$!: Observable<any>;

  // on vérifie !

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
    console.log('depuis closemodal');

    this.modalController.dismiss();
  }

  ngOnInit() {
    //console.log(this.user, 'Invoice Page ngOnInit');
  }
}
