import sql from 'mssql';
import { dtoParametersCampaign, IRepository } from '../interface/repositoryInterface';
import { mapCampaign } from '../utils/convertedReturnData';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CampaignRepository implements IRepository {
    constructor(
        @inject("Database")
        private db: sql.ConnectionPool) {}

    async getUnique(id: number): Promise<any> {
        const result = await this.db
            .request()
            .input('Id', sql.Int, id)
            .execute('uspGetUniqueCampaign');

        return result.recordset[0];
    }

    async listAll(data:dtoParametersCampaign): Promise<any> {
        const result = await this.db
            .request()
            .input("INdatDataCompetencia", data.competencyDate)
            .input("INbitBuscaCampanhaAlimentar", data.isToSearchCampaingToFeed)
            .input("INbitBuscaCampanhaFarma", data.isToSearchCampaingToPharma)
            .input("INbitBuscaCampanhaTelevendas", data.isToSearchToTelesales)
            .execute('uspSysBuscaCampanhaPorCategoria');

            
        const rows = (result.recordsets as any).flat();
        return rows.map(mapCampaign)
    }

    async listByCategory(category: string): Promise<any[]> {
        const result = await this.db
            .request()
            .input('Category', sql.VarChar, category)
            .execute('uspListCampaignsByCategory');

        return result.recordset;
    }
}
