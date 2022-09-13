import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  private static TABLE_SHOW = "Shows_lama";

  public postShow = async (show: Show): Promise<void> => {
    try {
      await ShowDatabase.connection(ShowDatabase.TABLE_SHOW).insert(show);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public async getShow(week_day: string, start_time: string): Promise<Show> {
    const result = await ShowDatabase.connection()
      .select("*")
      .from(ShowDatabase.TABLE_SHOW)
      .where({ week_day, start_time });
    return Show.toShowModel(result[0]);
  }

  public async getShowData(week_day: string): Promise<any> {
    const result = await ShowDatabase.connection()
      .select(["Bandas_lama.name", "Bandas_lama.music_genre"])
      .from("Shows_lama")
      .innerJoin("Bandas_lama", "Bandas_lama.id", "Shows_lama.band_id")
      .where("Shows_lama.week_day", week_day)
      .orderBy("Shows_lama.start_time", "asc");
    return result;
  }
}
