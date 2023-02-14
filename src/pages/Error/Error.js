import images from '~/assets/images';
import { Button } from '~/components/Button';
import config from '~/config';

function Error() {
    return (
        <div className="flex flex-col items-center justify-center my-20">
            <img src={images.sad404} alt="error" />
            <h1 className="mt-[50px]">Oh no! Error 404</h1>
            <p className="inline-block text-2xl text-center mt-[24px] mb-[30px]">
                We can’t seem to find <br /> the page you are looking for
            </p>
            <Button to={config.routes.home} btnOutline>
                BACK TO MAIN PAGE
            </Button>
        </div>
    );
}

export default Error;
