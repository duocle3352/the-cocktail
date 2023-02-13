import config from '~/config';
// layout
import { RightBarLayout } from '~/layouts';
// page
import { Home } from '~/pages/Home';
import { About } from '~/pages/About';
import { Shop } from '~/pages/Shop';
import { Contact } from '~/pages/Contact';
import { Search } from '~/pages/Search';
import { Detail } from '~/pages/Detail';
import { Cart } from '~/pages/Cart';
import { Category } from '~/pages/Category';
import { Collection } from '~/pages/Collection';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.category, component: Category, layout: RightBarLayout },
    { path: config.routes.collection, component: Collection, layout: RightBarLayout },
    { path: config.routes.search, component: Search, layout: RightBarLayout },
    { path: config.routes.detail, component: Detail, layout: RightBarLayout },
    { path: config.routes.cart, component: Cart, layout: RightBarLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
