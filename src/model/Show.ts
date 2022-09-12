export class Show {
  constructor(
    private id: string,
    private week_day: string,
    private start_time: number,
    private end_time: number,
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
  week_day: SHOW_DAY;
  start_time: number;
  end_time: number;
  band_id: string;
}

export enum SHOW_DAY {
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export interface ShowDayInput {
  week_day: string;
}

export interface Shows_week {
  name: string;
  music_genre: string;
}
