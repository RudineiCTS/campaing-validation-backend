export interface IRepository{
    getUnique(id: number):Promise<any>,
    listAll(data?:dtoParametersCampaign):Promise<any>,
    listByCategory(category:string):Promise<any>
}

export interface dtoParametersCampaign {
  competencyDate:string| Date, 
  isToSearchCampaingToFeed:number,
  isToSearchCampaingToPharma: number,
  isToSearchToTelesales: number
}
