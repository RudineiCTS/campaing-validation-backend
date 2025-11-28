import { getDbConnection } from "../config/database";
import { CampaignRepository } from "../repository/campaignValidation";
import { CampaignController } from "../controller/campaign/CampaignController";

let campaignController: CampaignController | null = null;

export const loadCampaignModule = async () => {
    if (!campaignController) {
        const db = await getDbConnection();
        const repo = new CampaignRepository(db);
        campaignController = new CampaignController(repo);
    }

    return campaignController;
};
