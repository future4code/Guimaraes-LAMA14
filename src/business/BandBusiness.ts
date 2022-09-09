import { string } from "yargs";
import { BandDatabase } from "../data/BandDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { InvalidName, Unauthorized } from "../error/BaseError";
import { Band, BandInputDTO } from "../model/Band";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const bandDatabase = new BandDatabase();
const authenticator = new Authenticator();
export class BandBusiness {
  bandRegistration = async (input: BandInputDTO, token: string) => {
    const user = authenticator.getData(token);
    if (user.role !== UserRole.ADMIN) {
      throw new Unauthorized();
    }
    const { name, music_genre, responsible } = input;
    const bandName = await bandDatabase.getBandaByName(name);

    if (bandName.getName()) {
      throw new InvalidName();
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    const newBand = new Band(id, name, music_genre, responsible);
    await bandDatabase.bandRegistration(newBand);
    const accessToken = authenticator.generate({ id });
    return accessToken;

    // FAZER AS VERIFICAÇÕES PARA QUE NÃO TENHA NOME DE BANDA REPEDIDA
  };
}
