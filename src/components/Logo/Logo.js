import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';

function Logo() {
    return (
        <Link to={config.routes.home} className="no-underline inline-block">
            <img src={images.logo} alt="The Cocktail Logo" />
        </Link>
    );
}

export default Logo;
