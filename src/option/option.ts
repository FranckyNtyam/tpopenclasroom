import { Component} from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
    selector: 'page-option',
    template: 'option.html'
})
export class OptionPage {
    constructor(private menuCtrl: MenuController) {

    }
    onToggleMenu() {
        this.menuCtrl.open();
    }
}