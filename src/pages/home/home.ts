import { Component } from '@angular/core';
import { ModalController,NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
      this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = JSON.parse(todos); 
      }
 
    });
  }

  ionViewDidLoad(){
 
  }
 
  addItem(){
    console.log('add');
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }

  editItem(item){
    console.log('edit1');
    let addModal = this.modalCtrl.create(EditItemPage,{item});
    let index = this.items.indexOf(item);
    addModal.onDidDismiss((item) => {
      
      if(item){
        if(index > -1){
          this.items[index] = item;
        }
        this.dataService.save(this.items);
      }
    });
 
    addModal.present();

    // this.navCtrl.push(EditItemPage,(item)=>{
      
    //   let index = this.items.indexOf(item);
    //   if(item){
    //     if(index > -1){
    //       this.items[index] = item;
    //     }
    //     this.dataService.save(this.items);
    //   }
    // });
    // this.navCtrl.push(EditItemPage,{item});
    


    //   let index = this.items.indexOf(item);
    //   if(item){
    //     if(index > -1){
    //       this.items[index] = item ;
    //     }
    //     this.dataService.save(this.items)
    //   }

  }

  removeItem(item){
    let index = this.items.indexOf(item);
    if(index > -1){
      this.items.splice(index, 1);
    }

    this.dataService.save(this.items);
 
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);

  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
