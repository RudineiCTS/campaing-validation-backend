export interface IPharmaCampaign {
  type:string,
  IDCampanha: number;
  Campanha: string;
  Competencia: string;
  DataInicio: Date;
  DataFim: Date;
  Calculo: string;
  Apuracao: string;
  Objetivo: number;
  Meta: string;
  Ranking: string;
  Valor: string;
  PremiacaoTotal: number;
  RecebimentoPremiacao: string;
  Situacao: string;
}

export interface ITelesalesCampaign {
  type:string,
  IDCampanha: number;
  Campanha: string;
  DataInicio: Date;
  DataFim: Date;
  Competencia: Date;
  TipoCampanha: string;
  MetaValor: number;
  RegraValidacao: string;
  Calculo: string;
  ConsideraExclusiva: string; // SIM / NÃO
}


export interface ReturnCampaign {
  Campaigns: CampaignRow[];
}

export type CampaignRow =
  | IPharmaCampaign
  | ITelesalesCampaign