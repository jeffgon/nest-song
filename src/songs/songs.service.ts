import { Injectable } from '@nestjs/common';
import { Song } from './entity/Song';

@Injectable()
export class SongsService {
    private songs = [];

    getSongs(): Song[] {
        return this.songs;
    }

    insertSong(artist: string, title: string): string {
        const song = new Song(artist, title);
        this.songs.push(song);
        return song.getInfo();
    }
}

