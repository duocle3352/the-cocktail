import PropTypes from 'prop-types';

const drawState = 'absolute top-1/2 right-10 translate-y-[-50%] w-[130px]';
const transitionState = 'transition-all ease-linear duration-300';

function ShopService({ videoSource, imageSource, title, topDescription, bottomDescription }) {
    return (
        <div
            className={`group relative flex justify-center flex-col
                        h-[160px] px-12 bg-primary-bg rounded-xl mx-5
                        group-hover/services:h-[180px] ${transitionState}`}
        >
            <img className={`${drawState} z-[1] group-hover:z-0`} src={imageSource} alt="draw" />

            <video
                className={drawState}
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

            <h3
                className={`relative font-semibold max-w-max mb-2 bg-transparent z-10
                            before:absolute before:-bottom-1 before:left-0 before:z-[-1]
                            before:w-full before:h-5 before:bg-[#fadac5]
                            group-hover:translate-x-5 ${transitionState} `}
            >
                {title}
            </h3>
            <p
                className={`font-zilla-slab text-xl leading-6 max-w-max
                            group-hover:translate-x-5 ${transitionState} `}
            >
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
