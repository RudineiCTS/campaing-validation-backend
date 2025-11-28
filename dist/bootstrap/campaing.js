"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCampaignModule = void 0;
const database_1 = require("../config/database");
const campaignValidation_1 = require("../repository/campaignValidation");
const CampaignController_1 = require("../controller/campaign/CampaignController");
let campaignController = null;
const loadCampaignModule = async () => {
    if (!campaignController) {
        const db = await (0, database_1.getDbConnection)();
        const repo = new campaignValidation_1.CampaignRepository(db);
        campaignController = new CampaignController_1.CampaignController(repo);
    }
    return campaignController;
};
exports.loadCampaignModule = loadCampaignModule;
