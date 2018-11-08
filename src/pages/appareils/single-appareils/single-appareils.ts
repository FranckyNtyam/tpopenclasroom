import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/Appareils';
import { AppareilsService } from '../../../service/appareil.service';



@Component({
  selector: 'page-single-appareils',
  templateUrl: 'single-appareils.html',
})
export class SingleAppareilsPage implements OnInit {
  index: number;
  appareil: Appareil;
  
  
  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController,
              public appareilsService: AppareilsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }
  
}
