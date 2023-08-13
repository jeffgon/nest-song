export class Song {
    private readonly id: number;
    private _artist: string;
    private _title: string;

    constructor(artist: string, title: string) {
        this._artist = artist;
        this._title = title;
        this.id = new Date().getTime();
    }

    set artist(artist: string) {
        this._artist;
    }

    get artist() {
        return this.artist;
    }    

    set title(title: string) {
        this._title;
    }

    get title(): string {
        return this._title;
    }   

    getInfo() {
        return `artist: ${this._artist}, title: ${this._title}`
    }

}