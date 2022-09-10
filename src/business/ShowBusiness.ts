import { ShowDatabase } from "../data/ShowDatabase";
import { InvalidFields, invalidTime, InvalidWeekday, MissingToken } from "../error/CustomError";
import { Show, ShowInputDTO, SHOW_DAY } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const showDataBase = new ShowDatabase()
const authenticator = new Authenticator()

export class ShowBusiness {
  postShow = async (input: ShowInputDTO, token: string) => {

    const { week_day, start_time, end_time, band_id } = input

    if (!token) {
      throw new MissingToken();
    }

    if (!week_day || !start_time || !end_time || !band_id) {
      throw new InvalidFields();

    }
    if (start_time < "08:00" && start_time > "23:00") {
      throw new invalidTime();
    }

    if (start_time.includes(":00") && end_time.includes(":00")) {
      start_time.replace(":00", "")
      end_time.replace(":00", "")
    } else {
      throw new Error("Show can only be booked at full times i.e. 14:00 - 15:00 ou 19:00 - 20:00");
    }

    if (
      week_day !== SHOW_DAY.FRIDAY && week_day !== SHOW_DAY.SATURDAY && week_day !== SHOW_DAY.SUNDAY) {
      throw new InvalidWeekday();

    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generateId()
    const newShow = new Show(id, week_day, start_time, end_time, band_id)
    await showDataBase.postShow(newShow)
    const accessToken = authenticator.generate({ id })
    return accessToken
  }
}

