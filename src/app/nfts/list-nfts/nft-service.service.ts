import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NftServiceService {

  constructor(private http:HttpClient) { }
  
  getNfts() {
    let url = '../assets/Data/db.json';
    return this.http.get(url);

    // this.httpClient.get<any>('localhost:3000/nfts').subscribe(
    //   response => {
    //     console.log(response.nfts);
    //     this.nfts = response.nfts;
    //   }
    // );
  }
}