import React from "react";
import ReactTable from "react-table";
import axios from 'axios';
import ModalDialog from "../widgets/ModalDialog";
import "react-table/react-table.css";

import 'react-table/react-table.css';

export default class ResultModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results:[],
            totalItems: 0,
            showModal: false,
            assignmentId: '1006'
        }
    }

    componentDidMount() {
        this.loadResults(this.state.assignmentId);
    }

    loadResults = (assignment) => {

        axios.get('localhost:8080/grading/results/1006' + assignment)
            .then(res => {
                const assignments = res.data;
                this.setState({assignments});
            })

    }

        buildItem = () => {
        const columns = [
            {
                Header: "Question",
                //accessor: 'id',
                sortable: true
            },
            {
                Header: "Result",
                //accessor: 'id',
                sortable: true
            },
            {
                Header: "Attempts",
                //accessor: 'id',
                sortable: true
            },
            {
                Header: "Time Spent",
                //accessor: 'id',
                sortable: true
            }

        ]
        return (
            <ReactTable
               // data={this.state.assignments}
                columns={columns}
                defaultPageSize={10}
                //defaultPageSize={this.state.totalItems}
                pageSizeOptions={[5, 8, 9]}
                minRows={5}

            />
        );
    };


    render() {

        return (
            <ModalDialog
                title={"---Review Results---"}
                showModal={this.props.showModal}
                onSuccess={this.onSuccess}
                showFooter={true}
                onCancel={this.props.hideModal}>
                {this.buildItem()}
            </ModalDialog>
        );

    }
}
