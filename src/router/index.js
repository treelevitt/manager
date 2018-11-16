import { createStackNavigator } from 'react-navigation';
import EmployeeStack from './EmployeeStack';
import LoginStack from './LoginStack';

const RootStack = createStackNavigator({
    Login: LoginStack,
    Employees: EmployeeStack
    },

    {
        initialRouteName: 'Login',
        navigationOptions: {
            header: null
        }
    }
);

export default RootStack;
