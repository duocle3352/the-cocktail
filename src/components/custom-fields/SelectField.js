import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectField({
    field,
    form,
    label = '',
    placeholder = '',
    disabled = false,
    options = [],
}) {
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const selectedOption = options.find((option) => option.value === value);
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };

    return (
        <div>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                //
                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
                //
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: showError ? 'red' : 'grey',
                        height: '44px',
                    }),
                }}
            />

            {showError && <p className="from-error">{errors[name]}</p>}
        </div>
    );
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
    option: PropTypes.array,
};

export default SelectField;
