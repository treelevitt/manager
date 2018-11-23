import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    static navigationOptions = {
        title: 'Edit Employee'
        }

    state = { showModal: false }

    componentWillMount() {
        _.each(this.props.navigation.getParam('employee'), (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        const { uid } = this.props.navigation.getParam('employee');
        this.props.employeeSave({ name, phone, shift, uid });
        console.log(employeeSave);
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.navigation.getParam('employee');
        this.props.employeeDelete({ uid });
        console.log(this.props.employeeDelete); 
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {

        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <View style={styles.viewStyle}>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                    </View>                    
                </CardSection>
                <CardSection>
                    <View style={styles.viewStyle}>
                    <Button onPress={this.onTextPress.bind(this)}>
                    Text Schedule
                    </Button>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.viewStyle}>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                    Fire Employee 
                    </Button>
                    </View>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
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
    employeeSave, 
    employeeDelete 
})(EmployeeEdit);
