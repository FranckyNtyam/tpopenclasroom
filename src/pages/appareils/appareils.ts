import { Component } from '@angular/core';
import { SingleAppareilsPage } from './single-appareils/single-appareils';
import { ModalController, MenuController } from 'ionic-angular';
import { Appareil } from '../../models/Appareils';
import { AppareilsService } from '../../service/appareil.service';


@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})
export class AppareilsPage{
    appareilsList: Appareil[];
    constructor(private modalCtrl: ModalController, 
        private appareilsService: AppareilsService,
        private menuCtrl: MenuController) {
    }
    ionViewWillEnter(){
        this.appareilsList = this.appareilsService.appareilsList.slice();
    }
    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(SingleAppareilsPage, {index: index });
        modal.present();
    }
    onToggleMenu() {
        this.menuCtrl.open();
    }
}