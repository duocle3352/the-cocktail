import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import './ShopService.css';

function ShopService({ videoSource, imageSource, title, topDescription, bottomDescription }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`group/draw shop-service-wrapper shop-service-transition
                        ${inView ? 'drop-up' : 'drop-down'}`}
        >
            <img
                className={`shop-service-draw z-[1] group-hover/draw:z-0`}
                src={imageSource}
                alt="draw"
            />

            <video
                className="shop-service-draw"
                width="130"
                preload="true"
                no-controls="true"
                autoPlay
                loop
                playsInline
                muted
            >
                <source src={videoSource} type="video/mp4"></source>
            </video>

            <p className="shop-service-title shop-service-transition text-underline">{title}</p>
            <p className="shop-service-description  shop-service-transition">
                {topDescription}
                <br />
                {bottomDescription}
            </p>
        </div>
    );
}

ShopService.propTypes = {
    videoSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    topDescription: PropTypes.string.isRequired,
    bottomDescription: PropTypes.string.isRequired,
};

export default ShopService;
