import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the EditItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html'
})
export class EditItemPage {
  editTitle;
  editDescription;
  constructor(public navCtrl: NavController ,public view : ViewController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   // console.log('Hello EditItemPage Page');
  //   let newEditItem = { 
  //       editTitle : this.editTitle,
  //       editDescription: this.editDescription
  //   };

  //     this.view.dismiss(newEditItem);
  // }

    ionViewDidLoad(){
        this.editTitle = this.navParams.get('item').title;
        this.editDescription = this.navParams.get('item').description;
        
    }

    editItem(){
      let newEditItem = {
      title: this.editTitle,
      description: this.editDescription

    };
      
      this.view.dismiss(newEditItem);
 }

 close(){
    this.view.dismiss();
  }

}
