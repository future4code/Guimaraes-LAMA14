import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDayInput, ShowInputDTO } from "../model/Show";

const showBusiness = new ShowBusiness()

export class ShowController {
    async postShow(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string

            const { week_day, start_time, end_time, band_id } = req.body

            const input: ShowInputDTO = {
                week_day: week_day,
                start_time: start_time,
                end_time: end_time,
                band_id: band_id
            }
            await showBusiness.postShow(input, token)
            res.status(201).send({ message: 'Show registrado com sucesso!' })
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    async getShow(req: Request, res: Response) {
        try {
            const input: ShowDayInput = {
                week_day: req.body.week_day
            }

            const result = await showBusiness.getShow(input)
            console.log(result)
            res.status(200).send({ result })

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}