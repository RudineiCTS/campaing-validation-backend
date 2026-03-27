import { Router } from 'express';
import { container } from 'tsyringe';
import { CampaignController } from '../../controller/campaign/CampaignController';

const routesCampaign = Router();

routesCampaign.post("/campanhas", async (req, res) => {
    const controller = container.resolve(CampaignController);
    return controller.listAll(req, res);
});

export default routesCampaign;
