import RestoCatalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestoCatalogue,
  '/detail/:id': Detail,
};

export default routes;
