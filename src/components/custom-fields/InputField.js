import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

function InputField({ field, form, type = 'text', label = '', placeholder = '', disable = false }) {
    const [inputType, setInputType] = useState(type);

    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const toggleShowPassword = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    return (
        <div className="flex flex-col relative mt-1">
            {label && (
                <label className="form-label text-white" htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                className={`text-base px-2 py-2 dark:text-white dark:bg-dark-bg border-2
                        border-borderColor border-solid rounded-xl ${
                            showError ? 'border-red-400' : ''
                        }`}
                // id={name}
                {...field}
                type={inputType}
                placeholder={placeholder}
                disabled={disable}
            />
            {type === 'password' && (
                <button
                    className="absolute top-[4px] right-[2px] flex items-center 
                                text-sm text-white underline hover:text-primary-orange"
                    type="button"
                    onClick={toggleShowPassword}
                >
                    {inputType === 'password' ? (
                        <>
                            <BiShow /> Show
                        </>
                    ) : (
                        <>
                            <BiHide /> Hide
                        </>
                    )}
                </button>
            )}

            {showError && <p className="from-error">{errors[name]}</p>}
        </div>
    );
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
};

export default InputField;
