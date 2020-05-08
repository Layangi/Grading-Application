import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import "react-table/react-table.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import config from '../config/config.json';
import axios from 'axios';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "../routes";
import moment from "moment";
import ResultModal from './ResultModal';

export default class HomePage extends React.Component {

    // static get propTypes() {
    //     return {
    //         //username: PropTypes.object.isRequired,
    //         newStatus: PropTypes.object.isRequired
    //     };
    // }

    constructor(props) {
        super(props);

        this.state = {
            assignments: [],
            student:[],
            totalItems: 0,
            showModal: false,
            studentId: '10002'
       }
    }

    componentDidMount() {
        this.loadAssignments(this.state.studentId);
        this.loadStudentDetails();
    }

  //  const fetchData = (date) => axios.get(`/fetch/${date}`);

    loadAssignments = (studentId) => {

        axios.get('http://localhost:8080/grading/list/'+ studentId)
            .then(res => {
                const assignments = res.data;
                this.setState({ assignments });
            })


      //  let searchRoute = config.gradeService.baseUrl + config.gradeService.routes.getAssignments;

        //const url = urlHelper.formatUrl(
        //     config.contentService.baseUrl,
        //     config.contentService.routes.pushLive,
        //     {
        //         status: checked === "0"
        //     }
        // );
        // return AxiosClient.patch(url, selectedResources).then(response => {
        //     setModalState(response.data, true);
        // });

    }

    loadStudentDetails = () => {
        axios.get(`localhost:8080/grading/student/10001`)
            .then(res => {
                const student = res.data;
                this.setState({ student });
            })
    }


    generateLastModifiedDate = lastModified => {
        return moment(lastModified)
            .local()
            .format("YYYY-MM-DD");
    };

    hideModal = () => {
        this.setState({
            showModal: false,
            selectedRow: {}
        });
    };

   render() {
        const columns = [
            {
                Header: "Assignment ID",
                accessor: 'id',
                sortable: true
            },
            {
                Header: "Assignment Name",
                accessor: "name",
                sortable: true
            },
            {
                Header: "Assignment Category",
                accessor: "category",
                sortable: true
            },
            {
                Header: "Assignment Status",
                accessor: "status",
                sortable: true
            },
            {
                Header: "Submitted Date",
                accessor: "submitted_date",
                sortable: true,
                Cell: data => {
                    return this.generateLastModifiedDate(
                        data.submitted_date
                    );
                }
            },
            {
                Header: "Due Date",
                accessor: "due_data",
                sortable: true,
                Cell: data => {
                    return this.generateLastModifiedDate(
                        data.due_date
                    );
                }
            },
            {
                Header: "Total Grade",
                accessor: "grade",
                sortable: true
            },
        ]
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Assignment Details"
                        />

                        <div>
                            <label>Student Name:</label>{this.state.student.map(person=>person.name)}
                        </div>

                <ReactTable
                    data={this.state.assignments}
                    columns={columns}
                    defaultPageSize={10}
                    //defaultPageSize={this.state.totalItems}
                    pageSizeOptions={[2, 4, 5]}
                    minRows={0}
                    getTdProps={(state, rowInfo) => {
                        return {
                            style: {
                                cursor: "pointer"
                            }
                            ,
                            onClick: () => {
                                this.setState({
                                    showModal: true,
                                    //selectedRow: rowInfo.original,
                                });
                            }
                        };
                    }}
                />
                    </div>
                </MuiThemeProvider>

                {this.state.showModal ? (
                    <ResultModal
                        showSecondModal={this.showSecondModal}
                        showModal={this.state.showModal}
                        hideModal={this.hideModal}
                       // profile={this.state.selectedRow}
                    />
                ) : (" ")}

            </div>
        )
    }

}
