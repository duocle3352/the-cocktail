import { useDispatch } from 'react-redux';
import { toggleSign } from '~/state/features/signInSlice';

function SignBtn() {
    const dispatch = useDispatch();

    const toggleSignModal = () => {
        dispatch(toggleSign());
    };

    return (
        <button
            className="hidden lg:block xl:block text-base font-semibold dark:text-white"
            onClick={toggleSignModal}
        >
            Sign in
        </button>
    );
}

export default SignBtn;
