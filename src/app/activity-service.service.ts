import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {

 
  constructor(private _httpClient: HttpClient) { }

 

  // getActivity(activityID: string): Observable<Activity>{
  //   return this._httpClient.get<Activity>(API + "/id/" + activityID);
  // }

  // getAllActivites(): Observable<Activity[]>{
  //   return this._httpClient.get<Activity[]>(API);
  // }
}
const url="https://api.giphy.com/v1/gifs/trending?api_key=UtVVuo2aboXyU1f7FOHKBoytbWVZKYfs&limit=10&rating=g"
const API = "https://orangevalleycaa.org/api/videos";

