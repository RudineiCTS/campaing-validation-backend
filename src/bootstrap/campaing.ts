import { container } from "tsyringe";
import sql from "mssql";
import { getDbConnection } from "../config/database";
import { CampaignRepository } from "../repository/campaignValidation";
import { CampaignController } from "../controller/campaign/CampaignController";

export async function initContainer() {
    const db: sql.ConnectionPool = await getDbConnection();

    // registra o banco
    container.registerInstance<sql.ConnectionPool>("Database", db);

    container.registerInstance("Database", db);
    container.registerSingleton(CampaignRepository);
    container.registerSingleton(CampaignController);
    // registra o repository usando o tipo correto
    container.register<CampaignRepository>("CampaignRepository", {
        useFactory: (c) => {
            const db = c.resolve<sql.ConnectionPool>("Database");
            return new CampaignRepository(db);
        }
    });
}