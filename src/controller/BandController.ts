import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO, BandNameInput } from "../model/Band";

const bandBusiness = new BandBusiness();

export class BandController {
  async bandRegistration(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const input: BandInputDTO = {
        name: req.body.name,
        music_genre: req.body.music_genre,
        responsible: req.body.responsible,
      };

      await bandBusiness.bandRegistration(input, token);
      res.status(201).send(" Banda registrada com sucesso");
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async getBand(req: Request, res: Response) {
    try {
      const input: BandNameInput = {
        name: req.body.name,
      };
      const result = await bandBusiness.getBand(input);
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
