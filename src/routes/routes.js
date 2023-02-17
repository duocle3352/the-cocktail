import config from '~/config';
// layout
import { RightBarLayout, HeaderLayout } from '~/layouts';

// page
import { Home } from '~/pages/Home';
import { Detail } from '~/pages/Detail';
import { Cart } from '~/pages/Cart';
import { Category } from '~/pages/Category';
import { NonAlcoholic } from '~/pages/NonAlcoholic';
import { Error } from '~/pages/Error';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.category, component: Category, layout: RightBarLayout },
    { path: config.routes.nonAlcoholic, component: NonAlcoholic, layout: HeaderLayout },
    { path: config.routes.detail, component: Detail, layout: HeaderLayout },
    { path: config.routes.about, component: Error, layout: HeaderLayout },
    { path: config.routes.shop, component: Error, layout: HeaderLayout },
    { path: config.routes.contact, component: Error, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
