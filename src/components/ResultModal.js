import React from "react";
import ReactTable from "react-table";
import axios from 'axios';
import ModalDialog from "../widgets/ModalDialog";
import 'react-table/react-table.css';
import config from '../config/config.json';
import urlHelper from '../helpers/urlFormat.helper';
import '../styles/components/HomePage.scss';

export default class ResultModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results:[],
            totalItems: 0,
            showModal: false
        }
    }

    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {

        const resultUrl = urlHelper.formatUrl(
            config.gradeService.baseUrl + config.gradeService.routes.getResults,
            {
                assignmentId: this.props.profile.id
            }
        );

        axios.get(resultUrl)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
        }

        buildItem = () => {
        const columns = [
            {
                Header: "Question",
                accessor: 'question',
                sortable: true
            },
            {
                Header: "Your Answer",
                accessor: 'result',
                sortable: true
            },
            {
                Header: "Attempts",
                accessor: 'attempts',
                sortable: true
            },
            {
                Header: "Time Spent",
                accessor: 'time_spent',
                sortable: true
            }

        ]
        return (
            <ReactTable className='model-table-cont'
                data={this.state.results}
                columns={columns}
                defaultPageSize={10}
                pageSizeOptions={[5, 8, 9]}
                minRows={5}
            />
        );
    };


    render() {
        return (
            <ModalDialog
                title={"--- Review Results ---"}
                showModal={this.props.showModal}
                showFooter={true}
                onCancel={this.props.hideModal}>
                {this.buildItem()}
            </ModalDialog>
        );
    }
}
