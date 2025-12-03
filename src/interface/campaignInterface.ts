export interface IPharmaCampaign {
  type:string,
  idCampanha: number;
  campanha: string;
  competencia: string;
  dataInicio: Date;
  dataFim: Date;
  calculo: string;
  apuracao: string;
  objetivo: number;
  meta: string;
  ranking: string;
  valor: string;
  premiacaoTotal: number;
  recebimentoPremiacao: string;
  situacao: string;
}

export interface ITelesalesCampaign {
  type:string,
  idCampanha: number;
  campanha: string;
  dataInicio: Date;
  dataFim: Date;
  competencia: Date;
  tipoCampanha: string;
  metaValor: number;
  regraValidacao: string;
  calculo: string;
  consideraExclusiva: string; // SIM / NÃO
}


export interface ReturnCampaign {
  campaigns: CampaignRow[];
}

export type CampaignRow =
  | IPharmaCampaign
  | ITelesalesCampaign