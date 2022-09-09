import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  private static TABLE_SHOW = "Shows_lama";

  public postShow = async (show: Show): Promise<void> => {
    try {
      await ShowDatabase.connection(ShowDatabase.TABLE_SHOW).insert(Show);
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
}
