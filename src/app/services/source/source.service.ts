import { inject, Injectable } from '@angular/core';
import { Source } from '../../models/source.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// export class SourceService {

//     sources: Source[] = [
//     ]

//     constructor() {

//       const source1 = new Source()
//       source1.id = 1
//       source1.name = "DailyGame"
//       source1.image = "/img/image.png"
//       source1.category = "Video Game"
//       this.sources.push(source1)

//       const source2 = new Source()
//       source2.id = 2
//       source2.name = "Le Monde"
//       source2.image = "/img/image2.png"
//       source2.category = "News"
//       this.sources.push(source2)

//     }

//     getAll(){
//       return this.sources
//     }
// }

export class SourceService {

  private BASE_URL = 'http://localhost:3000/buletin/sources/';
  private http = inject(HttpClient);
  
  sources: Source[] = [];

  getAll(): Observable<Source[]> {
    return this.http.get<Source[]>(this.BASE_URL);
  }

  get(id: number): Observable<Source> {
    return this.http.get<Source>(this.BASE_URL + id);
  }
}
