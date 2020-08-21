import React, { Component } from 'react';
import Navbar from '../../../components/navbar';
import Sidebar from '../../../components/sidebar';
import { Styles, Table } from '../../../components/table';

import Faker from 'faker';


const columns = [
    {
        Header: 'First Name',
        accessor: 'firstName'
    },
    {
        Header: 'Middle Name',
        accessor: 'middleName'
    },
    {
        Header: 'Last Name',
        accessor: 'lastName'
    },
]

const data = [
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },
    {
        firstName: Faker.name.firstName(),
        middleName: Faker.name.lastName(),
        lastName: Faker.name.lastName(),
    },

]


class Landing extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="d-flex" id="wrapper">
                <Sidebar></Sidebar>
                <div id="page-content-wrapper">
                    <Navbar></Navbar>
                    <div className="m-3">
                    <Styles>
                        <Table columns={columns} data={data} />
                    </Styles>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default Landing;