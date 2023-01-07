import config from '~/config';
// layout
import { HeaderLayout } from '~/layouts';
// page
import { Home } from '~/pages/Home';
import { Search } from '~/pages/Search';
import { Detail } from '~/pages/Detail';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.detail, component: Detail, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
