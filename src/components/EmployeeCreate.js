import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeUpdate, employeeCreate, employeeReset } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    static navigationOptions = {
        title: 'Create Employee'
        }
    
    componentDidMount = () => {
        this.props.employeeReset();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <View style={styles.viewStyle}>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                    </View>                    
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center'
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, 
    employeeCreate, 
    employeeReset 
})(EmployeeCreate);
