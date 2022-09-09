import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { CustomError, InvalidEmail, UserNotFound } from "../error/BaseError";

const userDatabase = new UserDatabase();
export class UserBusiness {
  createUser = async (user: UserInputDTO) => {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(user.password);

    const newUser = new User(
      id,
      user.name,
      user.email,
      hashPassword,
      user.role
    );
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator();
    const accessToken = authenticator.generate({ id, role: user.role });

    return accessToken;
  };

  // loginUser = async (login: LoginInputDTO) => {
  //   const { email, password } = login;

  //   if (!email || !password) {
  //     throw new CustomError(400, 'Preencha os campos "email" e "password"');
  //   }

  //   if (!email.includes("@")) {
  //     throw new InvalidEmail();
  //   }
  //   const user = await this.getUserByEmail({ email, password });

  //   return user;
  // };

  async getUserByEmail(user: LoginInputDTO) {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generate({
      id: userFromDB.getId(),
      role: userFromDB.getRole(),
    });

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}
