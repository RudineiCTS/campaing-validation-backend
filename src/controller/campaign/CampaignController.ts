import { Request, Response } from 'express';
import {dtoParametersCampaign, IRepository} from '../../interface/repositoryInterface'

export class CampaignController{    
    constructor(private repository:IRepository){}

    listAll = async(req: Request, res:Response)=>{
        const {competencyDate,isToSearchCampaingToFeed,isToSearchCampaingToPharma,isToSearchToTelesales } = req.body;
        const dataToProcedure : dtoParametersCampaign = {
            competencyDate,
            isToSearchCampaingToFeed: isToSearchCampaingToFeed ?? 0,
            isToSearchCampaingToPharma,
            isToSearchToTelesales
        }
        const data = await this.repository.listAll(dataToProcedure);
        return res.json(data);
    }

    getUnique = async(req:Request, res:Response)=>{
        const {id} = req.body;

        const data = await this.repository.getUnique(id);
        return res.json(data);
    }

    listByCategory = async (req: Request, res: Response) => {
    const { category } = req.body;
    const data = await this.repository.listByCategory(category);
    return res.json(data);
    }


}