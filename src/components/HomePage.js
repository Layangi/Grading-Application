import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import "react-table/react-table.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import config from '../config/config.json';
import axios from 'axios';
import moment from "moment";
import ResultModal from './ResultModal';
import urlHelper from '../helpers/urlFormat.helper';
import '../styles/components/HomePage.scss';

export default class HomePage extends React.Component {

    // static get propTypes() {
    //     return {
    //         //username: PropTypes.object.isRequired,
    //         newStatus: PropTypes.object.isRequired
    //     };
    // } constructor(props){
    //     super(props);
    //   }
    //

    constructor(props) {
        super(props);

        this.state = {
            assignments: [],
            student: [],
            totalItems: 0,
            showModal: false,
            studentId: '10002',
            selectedRow: {}
        }
    }

    componentDidMount() {
        this.loadAssignments();
        this.loadStudentDetails();
    }

    loadAssignments = () => {

        const searchUrl = urlHelper.formatUrl(
            config.gradeService.baseUrl + config.gradeService.routes.getAssignments,
            {
                studentId: this.state.studentId
            }
        );

        console.log("url = ", searchUrl)

        axios.get(searchUrl)
            .then(res => {
                const assignments = res.data;
                this.setState({assignments});
            })
    }

    loadStudentDetails = () => {

        const studentUrl = urlHelper.formatUrl(
            config.gradeService.baseUrl + config.gradeService.routes.getStudent,
            {
                studentId: this.state.studentId
            }
        );

        axios.get(studentUrl)
            .then(res => {
                const student = res.data;
                this.setState({student});
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
        console.log("assignment: " + this.state.assignments)
        console.log( " Page 2 : " , this.props.profile)
        console.log( "selectedRow: " , this.state.selectedRow)
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
                <div className="home-content-wrapper">
                    <div className="home-content">
                        <MuiThemeProvider>
                            <div>
                                <AppBar
                                    title="Assignment Details"
                                />

                                {/*<div>*/}
                                {/*    <label>Student Name:</label>{this.state.student.name}*/}
                                {/*</div>*/}

                                <div className="lable-div-wrapper">
                                    <div className="student-detail">
                                        <label>Student Name : </label>
                                        <label>{this.state.student.name}</label>
                                    </div>
                                    <div className="student-detail">
                                        <label>Student Id : </label>
                                        <label>{this.state.student.id}</label>
                                    </div>
                                    <div className="student-detail">
                                        <label>Class : </label>
                                        <label>{this.state.student.grade}</label>
                                    </div>
                                </div>

                                <div className="table-content">
                                    <ReactTable
                                        className="student-table"
                                        data={this.state.assignments}
                                        columns={columns}
                                        defaultPageSize={10}
                                        noDataText="There's no data to display"
                                        pageSizeOptions={[2, 4, 5]}
                                        minRows={0}
                                        getTdProps={(state, rowInfo) => {
                                            return {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: () => {
                                                    this.setState({
                                                        showModal: true,
                                                        selectedRow: rowInfo.original,
                                                    });
                                                }
                                            };
                                        }}
                                    />
                                </div>
                            </div>

                        </MuiThemeProvider>
                    </div>
                </div>

                {this.state.showModal ? (
                    <ResultModal
                        showSecondModal={this.showSecondModal}
                        showModal={this.state.showModal}
                        hideModal={this.hideModal}
                        profile={this.state.selectedRow}
                        successText={"Ok"}
                        showCancel={false}
                        //onSuccess={this.hideSecondModal}
                    />
                ) : (" ")}

            </div>
        )
    }

}


// import React from 'react';
// import { UserConsumer } from '../user-context';
//
// export default function Homepage() {
//     //console.log("name: " + {username})
//     return (
//         <UserConsumer>
//             {({ username }) => <h1>Welcome : {username}!</h1>}
//
//         </UserConsumer>
//     );
// }
