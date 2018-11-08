import { Component } from '@angular/core';

import { AlertController, MenuController } from 'ionic-angular';

@Component ({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
constructor( private alertCtrl: AlertController,
    private menuCtrl: MenuController) {

}
onToggleLights() {
    let alert = this.alertCtrl.create({
        title: 'Êtes-vous certain(e) de vouloir continuer ?',
        subTitle: 'cette action allumera ou éteindra toutes les lumière de la maison!',
        buttons: [
            {
                text: 'Annuler',
                role: 'cancel'
            },
            {
                text: 'Confirmer',
                handler: () => console.log('confirmé !')
            }
        ]
    });
    alert.present();
}
onToggleMenu() {
    this.menuCtrl.open();
}
}