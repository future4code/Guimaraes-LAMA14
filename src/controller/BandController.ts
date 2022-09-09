import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../model/Band";

const bandBusiness = new BandBusiness();
export class BandController {
  async bandRegistration(req: Request, res: Response) {
    try {
      const input: BandInputDTO = {
        name: req.body.name,
        music_genre: req.body.music_genre,
        responsible: req.body.responsible,
      };

      await bandBusiness.bandRegistration(input);
      res.status(200).send(" Banda registrada com sucesso");
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}