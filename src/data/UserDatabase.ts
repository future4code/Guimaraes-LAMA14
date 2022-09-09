import { BaseDatabase } from "./BaseDatabase";
import { LoginInputDTO, User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_lama";

  public createUser = async (user: User): Promise<void> => {
    try {
      await UserDatabase.connection(UserDatabase.TABLE_NAME).insert(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  // public loginUser = async (login: LoginInputDTO): Promise<void> => {
  //   try {
  //     const user = await this.getUserByEmail(login.email);

  //   } catch (error: any) {
  //     throw new Error(error.sqlMessage || error.message);
  //   }
  // };

  public async getUserByEmail(email: string): Promise<User> {
    const result = await UserDatabase.connection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }
}
