import { invalidTime } from "../error/BaseError";
import { ShowInputDTO } from "../model/Show";

export class ShowBusiness {
  postShow = async (input: ShowInputDTO) => {
    const { week_day, start_time, end_time, band_id } = input;
    if (start_time < "08h" && start_time > "23h") {
      throw new invalidTime();
    }
    // criar validação de horas inteiras
    if (end_time.includes(":00") && start_time.includes(":00")) {
      end_time.replace(":00", "");
      start_time.replace(":00", "");
    } else {
      throw new Error(
        "Os shows só podem ser marcados em horários redondos, ou seja, 08:00 - 09:00 ou 11:00 - 14:00"
      );
    }
  };
}
