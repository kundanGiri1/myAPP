import { Component } from '@angular/core';
import { Activity } from '../types';
import { ActivityServiceService } from '../activity-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: any
  dataitem:any
//  activityList: Observable<Activity[]>;

  constructor(private _httpClient: HttpClient,
     private loadingController: LoadingController,
    
    // private activityService: ActivityServiceService
  ) {
    
    // this.activityList = activityService.getAllActivites();
  }
  
  ionViewWillEnter() {
  
    this.getGif("gg").subscribe((res) =>
    {
      this.dataitem = res;
      // console.log(this.dataitem)
      this.data = Object.values(this.dataitem.data);
      console.log(this.data)
    }
    );

  }
   async presentLoading(loading) {
    return await loading.present();
  }

  cardDetail(itm) {
    console.log(itm.images.original.url)
  }
   
  getGif(url) {
    //   const loading = await this.loadingController.create({
    //   message: 'Please wait...',
    // });
    // this.presentLoading(loading);
   return  this._httpClient.get("https://api.giphy.com/v1/gifs/trending?api_key=UtVVuo2aboXyU1f7FOHKBoytbWVZKYfs&limit=6&rating=g")
  }

}
const url="https://api.giphy.com/v1/gifs/trending?api_key=UtVVuo2aboXyU1f7FOHKBoytbWVZKYfs&limit=10&rating=g"
