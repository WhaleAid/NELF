import { HttpClient } from '@angular/common/http';
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
    this.http.get('https://api.nftport.xyz/v0/nfts').subscribe((response) => {
      alert(JSON.stringify(response));
    });
  }
}
