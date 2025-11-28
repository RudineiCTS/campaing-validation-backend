"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campaing_1 = require("../../bootstrap/campaing");
const routesCampaign = (0, express_1.Router)();
routesCampaign.get("/campanhas", async (req, res) => {
    const controller = await (0, campaing_1.loadCampaignModule)();
    return controller.listAll(req, res);
});
exports.default = routesCampaign;
