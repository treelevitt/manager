import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import NavigationService from '../NavigationService';
import ListItem from './ListItem';

class EmployeeList extends Component {

    static navigationOptions = {
        title: 'Employee List',
        headerRight: (
            <Text
            onPress={() => NavigationService.navigate('CreateScreen')}
            title='Add'
            style={{ 
                color: '#007aff',
                fontSize: 20,
                paddingRight: 10
             }}
            >Add</Text>
        )
      }

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
