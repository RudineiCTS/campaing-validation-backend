import { IPharmaCampaign, ITelesalesCampaign } from "../interface/campaignInterface";

export function mapCampaign(row: any): IPharmaCampaign | ITelesalesCampaign {
    const tipo = row["Tipo Campanha"];

    if (tipo === "Farma") {
        return {
            type: "Farma",
            IDCampanha: row["IDCampanha"],
            Campanha: row["Campanha"],
            Competencia: row["Competência"],
            DataInicio: row["Data Incio"],
            DataFim: row["Data Fim"],
            Calculo: row["Calculo"],
            Apuracao: row["Apuração"],
            Objetivo: row["Objetivo"],
            Meta: row["Meta"],
            Ranking: row["Ranking"],
            Valor: row["Valor"],
            PremiacaoTotal: row["Premiação Total"],
            RecebimentoPremiacao: row["Recebimento de Premio"],
            Situacao: row["Situação"]
        };
    }

    if (tipo === "Televendas") {
        return {
            type: "Televendas",
            IDCampanha: row["IDCampanha"],
            Campanha: row["Campanha"],
            Competencia: row["Competencia"],
            DataInicio: row["Data Inicio"],
            DataFim: row["Data Fim"],
            TipoCampanha: row["Apuração"],  
            MetaValor: row["Meta Valor"],
            RegraValidacao: row["Regra Validação"],
            Calculo: row["Calculo"],
            ConsideraExclusiva: row["Considera Exclusiva"]
        };
    }

    throw new Error(`Tipo de campanha desconhecido: ${tipo}`);
}

