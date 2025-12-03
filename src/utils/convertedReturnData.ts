import { IPharmaCampaign, ITelesalesCampaign } from "../interface/campaignInterface";

export function mapCampaign(row: any): IPharmaCampaign | ITelesalesCampaign {
    const tipo = row["Tipo Campanha"];

    if (tipo === "Farma") {
        return {
            type: "Farma",
            idCampanha: row["IDCampanha"],
            campanha: row["Campanha"],
            competencia: row["Competência"],
            dataInicio: row["Data Incio"],
            dataFim: row["Data Fim"],
            calculo: row["Calculo"],
            apuracao: row["Apuração"],
            objetivo: row["Objetivo"],
            meta: row["Meta"],
            ranking: row["Ranking"],
            valor: row["Valor"],
            premiacaoTotal: row["Premiação Total"],
            recebimentoPremiacao: row["Recebimento de Premio"],
            situacao: row["Situação"]
        };
    }

    if (tipo === "Televendas") {
        return {
            type: "Televendas",
            idCampanha: row["IDCampanha"],
            campanha: row["Campanha"],
            competencia: row["Competencia"],
            dataInicio: row["Data Inicio"],
            dataFim: row["Data Fim"],
            tipoCampanha: row["Apuração"],  
            metaValor: row["Meta Valor"],
            regraValidacao: row["Regra Validação"],
            calculo: row["Calculo"],
            consideraExclusiva: row["Considera Exclusiva"]
        };
    }

    throw new Error(`Tipo de campanha desconhecido: ${tipo}`);
}

