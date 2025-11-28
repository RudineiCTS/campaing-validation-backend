"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignController = void 0;
class CampaignController {
    constructor(repository) {
        this.repository = repository;
        this.listAll = async (req, res) => {
            const { competencyDate, isToSearchCampaingToFeed, isToSearchCampaingToPharma, isToSearchToTelesales } = req.body;
            const dataToProcedure = {
                competencyDate,
                isToSearchCampaingToFeed: isToSearchCampaingToFeed ?? 0,
                isToSearchCampaingToPharma,
                isToSearchToTelesales
            };
            const data = await this.repository.listAll(dataToProcedure);
            return res.json(data);
        };
        this.getUnique = async (req, res) => {
            const { id } = req.body;
            const data = await this.repository.getUnique(id);
            return res.json(data);
        };
        this.listByCategory = async (req, res) => {
            const { category } = req.body;
            const data = await this.repository.listByCategory(category);
            return res.json(data);
        };
    }
}
exports.CampaignController = CampaignController;
