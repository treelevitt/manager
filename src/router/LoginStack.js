import { createStackNavigator } from 'react-navigation';
import LoginForm from '../components/LoginForm';

const LoginStack = createStackNavigator({
    LoginScreen: LoginForm
    },

    {
        initialRouteName: 'LoginScreen'
    }
);


export default LoginStack;
