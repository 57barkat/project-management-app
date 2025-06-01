import { registerUser } from '../services/authService';
import { showSuccess, showError } from './toast';

/**
 * Handles user registration submission
 * @param {Object} values - Form values
 * @param {Function} setSubmitting - Formik setter
 * @param {Function} navigate - useNavigate hook
 * @param {Function} dispatch - Redux dispatch
 */
export const handleRegister = async (values, setSubmitting, navigate, dispatch) => {
    try {
        const data = await registerUser(values);
        showSuccess(`${data?.data.user?.fullName || 'User'} account created successfully!`);
        navigate('/login');
    } catch (error) {
        showError(error?.response?.data?.message || 'Sign up failed');
    } finally {
        setSubmitting(false);
    }
};
