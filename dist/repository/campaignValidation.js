"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignRepository = void 0;
const mssql_1 = __importDefault(require("mssql"));
class CampaignRepository {
    constructor(db) {
        this.db = db;
    }
    async getUnique(id) {
        const result = await this.db
            .request()
            .input('Id', mssql_1.default.Int, id)
            .execute('uspGetUniqueCampaign');
        return result.recordset[0];
    }
    async listAll(data) {
        const result = await this.db
            .request()
            .input("INdatDataCompetencia", data.competencyDate)
            .input("INbitBuscaCampanhaAlimentar", data.isToSearchCampaingToFeed)
            .input("INbitBuscaCampanhaFarma", data.isToSearchCampaingToPharma)
            .input("INbitBuscaCampanhaTelevendas", data.isToSearchToTelesales)
            .execute('uspListAllCampaigns');
        return {
            Campaigns: result.recordset
        };
    }
    async listByCategory(category) {
        const result = await this.db
            .request()
            .input('Category', mssql_1.default.VarChar, category)
            .execute('uspListCampaignsByCategory');
        return result.recordset;
    }
}
exports.CampaignRepository = CampaignRepository;
