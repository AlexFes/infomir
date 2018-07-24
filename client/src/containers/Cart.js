import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';

import * as actions from '../actions/actions';
import CheckoutModal from './CheckoutModal';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.toggleCheckout = this.toggleCheckout.bind(this);
    }

    handleChange() {}

    totalPrice(cart) {
        let tmp = 0;

        for (let product of cart) {
            tmp += product.price;
        }

        return tmp;
    }

    toggleCheckout() {
        this.props.toggleCheckout(this.props.checkoutModal);
    }

    renderCart() {
        if (this.props.cart.length > 0) {
            const cartItems = this.props.cart.map((product) =>
                <li className="list-group-item d-flex flex-row" key={ product.item._id }>
                    <div className="col-6 d-flex align-items-center cart-item-title">
                        <p className="mb-0 pl-5">
                            { product.item.title }
                        </p>
                    </div>

                    <div className="col-3">
                        <form>
                            <div className="row">
                                <div className="col-5">
                                    <input type="number"
                                           className="form-control checkbox-style no-spin cart-item-qty"
                                           value={ product.qty } onChange={this.handleChange} min="1" max="10" />
                                </div>

                                <div className="col-7">
                                    <label className="col-form-label">
                                        шт.
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-3 d-flex justify-content-end align-items-center cart-item-price">
                        <p className="mb-0 pr-5">
                            { product.price }p
                        </p>

                        <span onClick={() => this.props.removeProduct(product.item._id)} className="cart-item-remove">
                            <img className="responsive-icons" src="images/delete.svg" alt="Удалить товар." />
                        </span>
                    </div>
                </li>
            );

            return(
                <div className="col-8 cart-body">
                    <h2 className="cart-header pl-5">
                        <i className="material-icons">shopping_cart</i>
                        В корзине
                    </h2>

                    <ol className="list-group pt-3" id="shopping-cart">
                        { cartItems }
                    </ol>

                    <div className="d-flex justify-content-between mb-5" id="cart-total-price">
                        <p className="h3 cart-header pt-3 pl-5 cart-total-price-inner">
                            Итого: { this.totalPrice(this.props.cart) }p
                        </p>

                        <button onClick={ this.toggleCheckout } className="modalBtn">
                            к оформлению
                        </button>

                        <CheckoutModal />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-8 cart-body">
                    <h2 className="cart-header pl-5">
                        <i className="material-icons">shopping_cart</i>
                        В корзине
                    </h2>

                    <p className="cart-header cart-header-temporary mb-5">
                        На данный момент у Вас нет покупок.
                    </p>

                    <Modal isOpen={ this.props.submitModal } toggle={ this.props.toggleSubmit }>
                        <ModalBody>
                            <p className="h3 text-center">Ваш заказ принят!</p>

                            <p className="text-center">В течение одного рабочего дня наш сотрудник свяжется с Вами.</p>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-2" />

                { this.renderCart() }

                <div className="col-2" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        checkoutModal: state.onclick.checkoutModal,
        submitModal: state.onclick.submitModal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (productId) => {
            dispatch(actions.removeProduct(productId));
        },

        toggleCheckout: (clicked) => {
            dispatch(actions.onclickModalCheckout(clicked));
        },

        toggleSubmit: (clicked) => {
            dispatch(actions.onclickModalSubmit(clicked));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);