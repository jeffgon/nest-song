import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  getSongs() {
    return this.songsService.getSongs();
  }

  @Post()
  insertSong(@Body() body): string {
    const { artist, title } = body;

    return this.songsService.insertSong(artist, title);
  }
}
