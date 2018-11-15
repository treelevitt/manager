import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = createStackNavigator({
    LoginScreen: LoginForm,
    EmployeeScreen: EmployeeList,
    CreateScene: EmployeeCreate,
    EditScene: EmployeeEdit
    },

    {
        initialRouteName: 'LoginScreen'
    }
);


export default RouterComponent;
