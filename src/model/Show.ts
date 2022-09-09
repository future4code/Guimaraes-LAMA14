export class Show {
  constructor(
    private id: string,
    private week_day: string,
    private start_time: string,
    private end_time: string,
    private band_id: string
  ) {}

  getId() {
    return this.id;
  }

  getWeek_day() {
    return this.week_day;
  }
  getStart_time() {
    return this.start_time;
  }
  getEnd_time() {
    return this.end_time;
  }
  getBand_id() {
    return this.band_id;
  }

  static toShowModel(show: any): Show {
    return new Show(
      show?.id,
      show?.week_day,
      show?.start_time,
      show?.end_time,
      show?.band_id
    );
  }
}

export interface ShowInputDTO {
  week_day: string;
  start_time: string;
  end_time: string;
  band_id: string;
}
