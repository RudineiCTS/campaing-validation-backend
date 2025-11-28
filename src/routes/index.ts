import { Router } from 'express';
import routesCampaign from './CampanhasValidation/routesCampaign';

const routes = Router();

// agrupando rotas da funcionalidade campanhas
routes.use('/api', routesCampaign);

export default routes;
