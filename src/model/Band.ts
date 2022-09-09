export class Band {
  constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsible: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.music_genre;
  }

  getresponsible() {
    return this.responsible;
  }
  static toBandModel(band: any): Band {
    return new Band(band?.id, band?.name, band?.music_genre, band?.responsible);
  }
}

export interface BandInputDTO {
  name: string;
  music_genre: string;
  responsible: string;
}

export interface BandNameInput {
  name: string;
}
