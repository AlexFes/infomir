import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class CheckoutModal extends React.Component {
    constructor(props) {
        super(props);

        this.name = React.createRef();
        this.phoneNumber = React.createRef();
        this.address = React.createRef();
        this.emailAddress = React.createRef();
        this.comment = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.handleCheckout({
            name: this.name.current.value,
            phoneNumber: this.phoneNumber.current.value,
            address: this.address.current.value,
            emailAddress: this.emailAddress.current.value,
            comment: this.comment.current.value
        });

        this.props.toggleSubmit(this.props.submitModal);
        this.props.toggleCheckout(this.props.checkoutModal);
        event.preventDefault();
    }

    render() {
        return(
            <Modal isOpen={ this.props.checkoutModal } toggle={ this.props.toggleCheckout }>
                <ModalBody>
                    <form id="checkout-form" onSubmit={ this.handleSubmit }>
                        <div className="form-group row">
                            <label htmlFor="inputName" className="col-3 col-form-label">Имя</label>

                            <div className="col-9">
                                <input type="text" className="form-control" id="inputName"
                                       placeholder="как к Вам обращаться" name="name" ref={ this.name } />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPhoneNumber" className="col-3 col-form-label">Телефон</label>

                            <div className="col-9">
                                <input type="tel" className="form-control" id="inputPhoneNumber"
                                       placeholder="для подтверждения заказа" name="phoneNumber" ref={ this.phoneNumber } />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputAddress" className="col-3 col-form-label">Адрес
                                доставки</label>

                            <div className="col-9">
                                <input type="text" className="form-control" id="inputAddress"
                                       placeholder="для уточнения способа доставки" name="address" ref={ this.address }/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputEmail" className="col-3 col-form-label">E-mail</label>

                            <div className="col-9">
                                <input type="email" className="form-control" id="inputEmail"
                                       name="emailAddress" ref={ this.emailAddress }/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputComments" className="col-3 col-form-label">Комментарий</label>

                            <div className="col-9">
                                <input type="text" className="form-control" id="inputComments" name="comment" ref={ this.comment }/>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type='submit' className="modalBtn">
                                отправить
                            </button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        checkoutModal: state.onclick.checkoutModal,
        submitModal: state.onclick.submitModal,
        store: state.store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckout: (formData) => {
            dispatch(actions.handleCheckout(formData));
        },

        toggleCheckout: (clicked) => {
            dispatch(actions.onclickModalCheckout(clicked));
        },

        toggleSubmit: (clicked) => {
            dispatch(actions.onclickModalSubmit(clicked));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);