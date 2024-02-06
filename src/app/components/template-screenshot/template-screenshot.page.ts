import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-screenshot',
  templateUrl: './template-screenshot.page.html',
  styleUrls: ['./template-screenshot.page.scss'],
})
export class TemplateScreenshotPage implements OnInit {
  @Input() imageDataUrl: any;

  constructor() {}

  ngOnInit() {}
}
