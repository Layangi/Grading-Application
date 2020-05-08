import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import "./modal.scss";

Modal.setAppElement("#root");

export default class ModalDialog extends React.Component {
    static get propTypes() {
        return {
            title: PropTypes.string,
            children: PropTypes.node.isRequired,
            showModal: PropTypes.bool.isRequired,
            onCancel: PropTypes.func.isRequired,
            onSuccess: PropTypes.func.isRequired,
            showCloseControls: PropTypes.bool,
            successText: PropTypes.string,
            cancelText: PropTypes.string,
            showSuccess: PropTypes.bool,
            showCancel: PropTypes.bool,
            showFooter: PropTypes.bool
        };
    }

    static defaultProps = {
        showCloseControls: true,
        showSuccess: true,
        showCancel: true,
        showFooter: true,
        successText: "Save",
        cancelText: "Ok"
    };

    render() {
        return (
            <div className="modal-dialog-widget">
                <Modal
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    isOpen={this.props.showModal}
                    onRequestClose={this.props.onCancel}
                    contentLabel={this.props.title}
                    closeTimeoutMS={150}
                >
                    <div className="modal-header">
                        <h4>{this.props.title}</h4>
                        {this.props.showCloseControls && (
                            <div
                                className="modal-close-button"
                                onClick={this.props.onCancel}
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    className="pe-icon--remove-sm-24"
                                >
                                    <use xlinkHref="#remove-sm-24" />
                                </svg>
                            </div>
                        )}
                    </div>

                    <div className="modal-body">{this.props.children}</div>

                    {this.props.showFooter && (
                        <div className="modal-footer">
                            {this.props.showCancel && (
                                <button
                                    className="pe-btn--btn_large"
                                    onClick={this.props.onCancel}
                                >
                                    {this.props.cancelText}
                                </button>
                            )}
                            {/*{this.props.showSuccess && (*/}
                            {/*    <button*/}
                            {/*        className="pe-btn__primary--btn_large"*/}
                            {/*        onClick={this.props.onSuccess}*/}
                            {/*    >*/}
                            {/*        {this.props.successText}*/}
                            {/*    </button>*/}
                            {/*)}*/}
                        </div>
                    )}
                </Modal>
            </div>
        );
    }
}
