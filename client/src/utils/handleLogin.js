import { loginUser } from '../services/authService';
import { showSuccess, showError } from './toast';
import { setCredentials } from '../features/auth/authSlice';

/**
 * Handles user login submission
 * @param {Object} values - Form values
 * @param {Function} setSubmitting - Formik setter
 * @param {Function} navigate - useNavigate hook
 * @param {Function} dispatch - Redux dispatch
 */
export const handleLogin = async (values, setSubmitting, navigate, dispatch) => {
    try {
        const data = await loginUser(values);
        showSuccess(`Welcome, ${data?.data.user?.fullName || 'User'}!`);
        dispatch(setCredentials({ user: data.data.user, token: data.data.token }));
        navigate('/');
    } catch (error) {
        showError(error?.response?.data?.message || 'Login failed');
    } finally {
        setSubmitting(false);
    }
};
