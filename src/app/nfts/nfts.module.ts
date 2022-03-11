import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListNftsComponent } from './list-nfts/list-nfts.component';
import { ViewNftsByKeywordComponent } from './view-nfts-by-keyword/view-nfts-by-keyword.component';




@NgModule({
  declarations: [
    ViewNftsByKeywordComponent,
  ],
  imports: [
    HttpClient,
    HttpClientModule,
    CommonModule
  ]
})
export class NftsModule { }
