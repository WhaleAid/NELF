import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Metadata } from './metadata';

export class Nft {
  constructor(public token_id: number, public metadata: Metadata) {}
}

@Component({
  selector: 'app-list-nfts',
  templateUrl: './list-nfts.component.html',
  styleUrls: ['./list-nfts.component.css'],
})
export class ListNftsComponent implements OnInit {
  nfts: Nft[];
  showowner: boolean;
  constructor(private httpClient: HttpClient) {
    this.showowner = false;
  }

  ngOnInit(): void {
    this.getNfts();
  }

  getNfts() {
    this.httpClient.get<any>('../assets/Data/db.json').subscribe((response) => {
      console.log(response.nfts);
      this.nfts = response.nfts;
    });
  }

  searchNfts(){
    //recherche des nfts
  }
}
