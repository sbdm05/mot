import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../services/purchase/purchase.service';

@Component({
  selector: 'app-vue-settings',
  templateUrl: './vue-settings.page.html',
  styleUrls: ['./vue-settings.page.scss'],
})
export class VueSettingsPage implements OnInit {
  public purchaseState = this.purchaseService.purchaseState;
  constructor(private purchaseService: PurchaseService) {}

  ngOnInit() {}
}
