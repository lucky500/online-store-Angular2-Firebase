import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
// export class AlbumService {
//   albums: FirebaseListObservable<any[]>;

//   constructor(private database: AngularFireDatabase) {
//     // this.albums = database.list('albums');
//   }

//   getAlbums(){
//     this.albums = this.database.list('/albums') as FirebaseListObservable<any[]>;
//     return this.albums;
//   }

// }
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums(){
    return this.albums;
  }
}