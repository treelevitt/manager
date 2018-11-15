import { createStackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

const EmployeeStack = createStackNavigator({
    EmployeeScreen: EmployeeList,
    CreateScreen: EmployeeCreate,
    EditScreen: EmployeeEdit
    },

    {
        initialRouteName: 'EmployeeScreen'
    }
);


export default EmployeeStack;
