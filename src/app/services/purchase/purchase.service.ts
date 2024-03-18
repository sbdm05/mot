import { Injectable } from '@angular/core';
import {
  Glassfy,
  GlassfyOffering,
  GlassfyOfferings,
  GlassfyPermission,
  GlassfySku,
  GlassfyTransaction,
} from 'capacitor-plugin-glassfy';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

// Définir une interface pour l'état d'achat
interface PurchaseState {
  pro?: boolean;
  expirationDate?: string; // expirationDate est optionnel avec le ?
  subscriberId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  purchaseState = new BehaviorSubject<PurchaseState>({ pro: false });
  subscriberId!: string;
  private offerings: BehaviorSubject<GlassfyOffering[]> = new BehaviorSubject(
    []
  );

  constructor() {
    this.initGlassfy();
  }

  async initGlassfy() {
    try {
      await Glassfy.initialize({
        apiKey: environment.glassfyKey,
        watcherMode: false,
      });

      const offerings = await Glassfy.offerings();
      console.log(offerings, 'offerings');

      this.offerings.next(offerings.all);

      const permissions = await Glassfy.permissions();
      console.log(permissions, 'permissions');
      this.handleSubscriberId(permissions.subscriberId);
      this.handleExistingPermissions(permissions.all);
    } catch (error) {
      console.log(error);
    }
  }

  handleSubscriberId(subscriberId) {
    this.subscriberId = subscriberId;
  }

  handleExistingPermissions(permissions: GlassfyPermission[]) {
    for (const perm of permissions) {
      const expirationDate = this.convertExpirationDate(perm.expireDate);
      if (perm.isValid) {
        if (perm.permissionId === 'premium_access') {
          this.purchaseState.next({
            pro: true,
            expirationDate,
            subscriberId: this.subscriberId,
          });
        }
      } else {
        this.purchaseState.next({
          pro: false,
          expirationDate,
          subscriberId: this.subscriberId,
        });
      }
    }
  }

  convertExpirationDate(expirationDate) {
    // Créer une nouvelle instance de Date en utilisant le timestamp
    const date = new Date(expirationDate * 1000);

    // Formater la date
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const formattedDate = date.toLocaleString('fr-FR', options);

    console.log('Date convertie :', formattedDate);
    return formattedDate;
  }

  getOfferings() {
    return this.offerings.asObservable();
  }

  async purchase(sku: GlassfySku) {
    try {
      const transaction = await Glassfy.purchaseSku({ sku });
      console.log(transaction);

      // handle transation
      // modfy status
      if (transaction.receiptValidated) {
        this.handleSuccessfulTransactionResult(transaction, sku);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async handleSuccessfulTransactionResult(
    transaction: GlassfyTransaction,
    sku: GlassfySku
  ) {
    this.purchaseState.next({ pro: true });
  }

  async restore() {
    const permissions = await Glassfy.restorePurchases();
    console.log(permissions);
  }
}
//test
