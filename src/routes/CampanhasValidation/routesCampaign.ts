import { Router } from 'express';
import { CampaignController } from '../../controller/campaign/CampaignController';
import { loadCampaignModule } from '../../bootstrap/campaing';

const routesCampaign = Router();

routesCampaign.get("/campanhas", async (req, res) => {
    const controller = await loadCampaignModule();
    return controller.listAll(req, res);
});

export default routesCampaign;
