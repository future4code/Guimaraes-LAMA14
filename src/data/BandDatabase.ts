import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
  private static TABLE_BAND = "Bandas_lama";

  public bandRegistration = async (band: Band): Promise<void> => {
    try {
      await BandDatabase.connection(BandDatabase.TABLE_BAND).insert(band);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  public async getBandaByName(name: string): Promise<Band> {
    const result = await BandDatabase.connection()
      .select("*")
      .from(BandDatabase.TABLE_BAND)
      .where({ name });
    return Band.toBandModel(result[0]);
  }
}
