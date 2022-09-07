import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string) {
    await this.toastController
      .create({
        message: message,
        duration: 2000,
        cssClass: 'custom-toast',
      })
      .then((_toast) => _toast.present());
  }

  dismiss() {
    this.toastController.dismiss();
  }
}
