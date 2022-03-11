import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Metadata } from './metadata';

export  class Nft {
  constructor(
    public chain: string,
    public metadata: Metadata
  ){

  }
}

@Component({
  selector: 'app-list-nfts',
  templateUrl: './list-nfts.component.html',
  styleUrls: ['./list-nfts.component.css']
})
export class ListNftsComponent implements OnInit {

  nfts: Nft[];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getNfts();
  }


  getNfts(){

    const httpHeaders = new HttpHeaders ({
      'content-type':'application/json',
      'X-API-Key': 'wlYcPoMIBSZZlRGRK9XIGPK3ubugpd4z40IZPpRkTtfMSeyEZUu9mysP8zU4Uc06'
    })
    this.httpClient.get<any>('https://deep-index.moralis.io/api/v2/nft/search?chain=eth&format=decimal&q=ape&filter=name&limit=20', {headers: httpHeaders}).subscribe(
      response => {
        console.log(response.nfts);
        this.nfts = response.nfts;
      }
    );
  }

}



// @Component({
//   selector: 'app-list-nfts',
//   templateUrl: './list-nfts.component.html',
//   styleUrls: ['./list-nfts.component.css'],
// })
// export class ListNftsComponent {

//   public nfts:any = [];

//   constructor(private nftService: NftServiceService) {
//     this.nftService.getNfts<any>().subscribe(data=>{
//       this.nfts = data;
//       console.log(this.nfts);
//     })
//   }
// }