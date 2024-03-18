import { Component, OnInit } from '@angular/core';
import { GlassfySku } from 'capacitor-plugin-glassfy';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-add-sub-block',
  templateUrl: './add-sub-block.page.html',
  styleUrls: ['./add-sub-block.page.scss'],
})
export class AddSubBlockPage implements OnInit {
  public offerings = this.purchaseService.getOfferings();
  public purchaseState = this.purchaseService.purchaseState;

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit() {}

  async onPurchase(sku: GlassfySku) {
    console.log(sku);
    await this.purchaseService.purchase(sku);
  }

  async onRestore() {
    await this.purchaseService.restore();
  }
}

//test
