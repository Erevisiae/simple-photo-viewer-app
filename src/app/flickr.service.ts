import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

@Injectable({
  providedIn: "root"
})
export class FlickrService {
  prevKeyword: string;
  currPage = 1;
  currentImage : FlickrPhoto;
  
  private image_per_page = 100;
  private imageDetailsArray = [];

  constructor(private http: HttpClient) {
  }

  search_keyword(keyword: string = "office") {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.imageDetailsArray = [];
    const api_key = "7c46d25e470b30b38c48a04ef4ec68a2";
    this.prevKeyword = keyword;
    const url =
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&";
    const params = `api_key=${api_key}&text=${keyword}&format=json&nojsoncallback=1&per_page=${
      this.image_per_page
    }&page=${this.currPage}`;

    return this.http.get(url + params).pipe(
      map((result: FlickrOutput) => {
        result.photos.photo.forEach((photo: FlickrPhoto) => {
          this.imageDetailsArray.push(photo);
        });
        return this.imageDetailsArray;
      })
    );
  }

  getImageDetailsById(id: string): FlickrPhoto {
    console.log(this.imageDetailsArray.find(x => x.id == id));
    return this.imageDetailsArray.find(x => x.id == id);
  }
}
