import PropTypes from 'prop-types';

function FormTitle({ title }) {
    return <h3 className="font-bold text-center">{title}</h3>;
}

FormTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default FormTitle;
