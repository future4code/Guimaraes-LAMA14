import { v4 } from "uuid";

export class IdGenerator{
    static generateId() {
      throw new Error("Method not implemented.");
    }

    public generateId = () => {
        return v4()
    }
   
}