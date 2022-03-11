import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NftServiceService {

  constructor(private http:HttpClient) { }
  
  // getNfts() {
  //   const httpHeaders = new HttpHeaders ({
  //     'content-type':'application/json',
  //     'X-API-Key': 'wlYcPoMIBSZZlRGRK9XIGPK3ubugpd4z40IZPpRkTtfMSeyEZUu9mysP8zU4Uc06'
  //   })
  //   let url = 'https://deep-index.moralis.io/api/v2/nft/search?chain=eth&format=decimal&q=ape&filter=name&limit=20';
  //   return this.http.get<any>(url, {headers: httpHeaders});

  //   // this.httpClient.get<any>('localhost:3000/nfts').subscribe(
  //   //   response => {
  //   //     console.log(response.nfts);
  //   //     this.nfts = response.nfts;
  //   //   }
  //   // );
  // }
}