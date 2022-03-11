import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  loadPosts() {
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: '70840d43-e1d1-4bc7-9ba0-9abf62ac0667',
    });

    return this.http.get('https://api.nftport.xyz/v0/nfts', {
      headers: {
        'Authorization': '70840d43-e1d1-4bc7-9ba0-9abf62ac0667'
      },
    });
  }
}
