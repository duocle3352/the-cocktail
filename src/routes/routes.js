import config from '~/config';
// layout
import { HeaderLayout } from '~/layouts';
// page
import { Home } from '~/pages/Home';
import { About } from '~/pages/About';
import { Shop } from '~/pages/Shop';
import { Contact } from '~/pages/Contact';
import { Search } from '~/pages/Search';
import { Detail } from '~/pages/Detail';
import { Cart } from '~/pages/Cart';
import { Category } from '~/pages/Category';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.category, component: Category },
    { path: config.routes.search, component: Search, layout: HeaderLayout },
    { path: config.routes.detail, component: Detail, layout: HeaderLayout },
    { path: config.routes.cart, component: Cart, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
