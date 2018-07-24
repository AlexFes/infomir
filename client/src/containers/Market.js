import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.input0 = React.createRef();
        this.input1 = React.createRef();
        this.input2 = React.createRef();
        this.input3 = React.createRef();
        this.input4 = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        switch(event.target.id) {
            case '0':
                this.props.addProduct(this.input0.current.id, this.input0.current.value);
                event.preventDefault();
                break;

            case '1':
                this.props.addProduct(this.input1.current.id, this.input1.current.value);
                event.preventDefault();
                break;

            case '4':
                this.props.addProduct(this.input4.current.id, this.input4.current.value);
                event.preventDefault();
                break;

            default:
        }
    }

    handleClick(event) {
        this.props.addProduct(this.input2.current.checked ? this.props.products[2]._id : this.props.products[3]._id, 1);

        event.preventDefault();
    }

    render() {
        return (
            <div id="dropdown-3" className="row dropdown-content-store">
                <div className="row responsive-main-paragraph pt-3">
                    <div className="col-2" />

                    <div className="col-8 px-5">
                        <p className="h3 cart-header pb-3">
                            Комплект для проведения занятий по "Алгоритмике"
                        </p>

                        <p>
                            Предназначен для организации образовательных и игровых занятий с дошкольниками, для
                            проведения бескомпьютерной части
                            занятий курса “Алгоритмики”. Позволяет сформировать представление о роботах,
                            исполнителях, способствует развитию мелкой и крупной моторики,
                            знакомит детей с основными командами Робота.
                            Данный комплект включает в себя мобильный робототехнический набор, состоящий из движимых
                            и неподвижных моделей, мягкие игрушки-роботы,
                            магниты с командами, коврики-пазлы, методические указания для преподавателя,
                            фартуки-картинки Роботы (для ролевых игр Робот-Командир).
                        </p>

                        <p>
                            <strong>Целевые образовательные области</strong>: познавательно-исследовательское
                            развитие, коммуникативное развитие, речевое развитие,
                            физическое развитие, интеллектуальное развитие, алгоритмическое мышление
                        </p>

                        <p>
                            <strong>Виды деятельности</strong>: игровая, познавательная, двигательная, трудовая,
                            коммуникативная, исследовательская, образовательная.
                        </p>

                        <p>
                            <strong>Мешок Пиктомир</strong> составляется из Робототехнического набора 1, 2 или 3 и
                            Образовательного набора.
                        </p>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div className="container">
                            <div className="dashed-border" />

                            <div className="row product-body">
                                <div className="col-7 d-flex flex-column">
                                    <p className="h4 product-title">
                                        { this.props.products[0].title }
                                    </p>

                                    <ol>
                                        <li>
                                            Радиоуправляемый робот "Ползун" в комплекте с зарядным устройством, двумя
                                            пультами для ручного
                                            управления, программным обеспечением для компьютерного управления. Гарантия
                                            1 год.
                                        </li>

                                        <li>
                                            Комплект сочленяемых ковриков (30х30 см) для сборки игровых полей для детей
                                            и роботов - 40 шт
                                        </li>

                                        <li>
                                            Комплект для 25 обучаемых:
                                            <ul>
                                                <li>памятка-магнит с командами - 27 шт.</li>
                                                <li>бланк диплома 1 ступени - 27 шт.</li>
                                                <li>бланк диплома 2 ступени - 27 шт.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>

                                <div className="col-5">
                                    <img className="img-fluid rounded" src="images/nabor_1600.png" alt="Образовательный набор" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div className="container">
                            <div className="row product-body">
                                <div className="col-5">
                                    <img className="img-fluid rounded" src="images/robot_1600.png" alt="Робототехнический набор №1" />
                                </div>

                                <div className="col-7 d-flex flex-column">
                                    <ol start="4">
                                        <li>Комплект пиктограмм для работы на магнитной доске с командами роботов и
                                            командами Пиктомира - 64 шт.
                                        </li>

                                        <li>Комплект мягких игрушек: <br/> Робот Вертун - 1шт. <br/> Робот Двигун -
                                            1шт. <br/> Робот Зажигун - 1шт.
                                        </li>

                                        <li>
                                            Программные и методические материалы для проведения годового цикла занятий
                                            "Алгоритмика для школьников" в
                                            подготовительной группе ДОУ с использованием системы Пиктомир, в том числе и
                                            для управления роботом "Ползун"
                                            на электронном носителе
                                        </li>

                                        <li>
                                            Лицензия на получение технической и методической поддержки - 1 год
                                        </li>
                                    </ol>

                                    <h4>
                                        Цена: {this.props.products[0].price} руб.
                                    </h4>

                                    <div className="row d-flex flex-row">
                                        <form onSubmit={this.handleSubmit} id='0' className='form-inline'>
                                            <div className="form-group">
                                                <input type="number" className="form-control no-spin checkbox-style" ref={this.input0} id={this.props.products[0]._id} defaultValue="1" min="1" max="10" name="productQty" />

                                                <label htmlFor={this.props.products[0]._id} className="col-form-label">шт.</label>
                                            </div>

                                            <button type="submit"
                                                    className="button-1 mr-1 merch-1" />

                                            <a href="#target" role="button" className="button-2 pt-2" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div className="container">
                            <div className="dashed-border" />

                            <div className="row product-body">
                                <div className="col-7 d-flex flex-column">
                                    <p className="h4 product-title">
                                        { this.props.products[1].title }
                                    </p>

                                    <ol>
                                        <li>Памятка-магнит с командами - 25 шт.</li>

                                        <li>Бланк диплома 1 ступени — 25 шт.</li>

                                        <li>Бланк диплома 2 ступени — 25 шт.</li>
                                    </ol>

                                    <h4>
                                        Цена: { this.props.products[1].price } руб.
                                    </h4>

                                    <div className="row d-flex flex-row">
                                        <form onSubmit={this.handleSubmit} id='1' className='form-inline'>
                                            <div className="form-inline">
                                                <input type="number" className="form-control no-spin checkbox-style" ref={this.input1} id={this.props.products[1]._id} defaultValue="1"
                                                       min="1" max="10" name="productQty" />

                                                <label htmlFor={this.props.products[1]._id} className="col-form-label">шт.</label>
                                            </div>

                                            <button type="submit"
                                                    className="button-1 mr-1 merch-2" />

                                            <a href="#target" role="button" className="button-2 pt-2" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div className="d-flex justify-content-center">
                            <div className="dashed-border-full" />
                        </div>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div className="container">
                            <div className="row d-flex flex-column align-items-center pb-3">
                                <p className="h3 piktomir-header-1">От авторов ПиктоМира</p>

                                <p className="h5 piktomir-header-2">
                                    поддержка, обновление и доступ к новым исполнителям
                                    в течении года
                                </p>
                            </div>

                            <div className="row cart-body">
                                <div className="col-10">
                                    <div className="container pt-2 px-0">
                                        <div className="form-check">
                                            <label className="form-check-label form-row">
                                                <div className="col-8">
                                                    <input type="radio" className="form-check-input add-support"
                                                           name="radio"
                                                           ref={ this.input2 } id={ this.props.products[2]._id } defaultChecked />

                                                    { this.props.products[2].title }
                                                </div>

                                                <div className="col-4">
                                                    { this.props.products[2].price }руб.
                                                </div>
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <label className="form-check-label form-row">
                                                <div className="col-8">
                                                    <input type="radio" className="form-check-input add-support"
                                                           name="radio"
                                                           ref={ this.input3 } id={ this.props.products[3]._id } />
                                                    { this.props.products[3].title }
                                                </div>

                                                <div className="col-4">
                                                    { this.props.products[3].price }руб.
                                                </div>
                                            </label>
                                        </div>

                                        <div className="row d-flex flex-row mt-4">
                                            <button type="button" onClick={ this.handleClick }
                                                    className="button-1 mr-1" />

                                            <a href="#target" role="button" className="button-2 pt-2" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-2">
                                    <img className="img-fluid rounded" src="images/piktomir.png" alt="Пиктомир" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="dashed-border-full" />
                        </div>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row pt-4">
                    <div className="col-2" />

                    <div className="col-4 d-flex justify-content-center align-items-center pr-5">
                        <img src="images/vertun_440.png" className="img-fluid rounded-circle vertun-style" />
                    </div>

                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="images/toys_arrow.svg" className="horizontal-tags" />

                        <div className="vertun-caption">
                            <p className="h4 vertun-header">Заведи домашнего робота!</p>

                            <p className="h4 vertun-header">
                                Подарите своему ребенку
                                мягкого друга Вертуна
                            </p>

                            <p>
                                Мягкая игрушка “Вертун” изготовлена в России
                                <img src="images/mark3.svg" alt="Вертун" className="img-fluid vertun-age" />
                                из экологически чистых материалов. <br />
                                Сертификаты прилагаются.
                            </p>

                            <p className="vertun-price-2 text-center"> { this.props.products[4].price } р</p>
                        </div>
                    </div>
                </div>

                <div className="row py-4">
                    <div className="col-5 ml-auto pr-4">
                        <div className="row d-flex flex-row">
                            <form onSubmit={this.handleSubmit} id='4' className='form-inline'>
                                <div className="form-group">
                                    <input type="number" className="form-control no-spin checkbox-style" ref={this.input4} id={this.props.products[4]._id} defaultValue="1" min="1"
                                           max="10" name="productQty" />

                                    <label htmlFor={this.props.products[4]._id} className="col-form-label">шт.</label>
                                </div>

                                <button type="submit" className="button-1 mr-1 merch-5" />

                                <a href="#target" role="button" className="button-2 pt-2" />
                            </form>
                        </div>
                    </div>

                    <div className="col-1" />
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div id="target" className="d-flex justify-content-center">
                            <div className="dashed-border-full" />
                        </div>
                    </div>

                    <div className="col-2" />
                </div>

                <div className="row">
                    <div className="col-8 ml-auto mr-auto px-5">
                        <h2>Скидка!</h2>

                        <p className="mb-0">
                            При заказе мягких игрушек вместе с <strong>Образовательным набором</strong> или при заказе
                            игрушек <strong>Вертун</strong>,
                            <strong>Двигун</strong> и <strong>Зажигун</strong> в суммарном количестве 9 или более штук
                            цена за одну игрушку становится
                        </p>

                        <div className="row">
                            <h1 className="offset-9">850 p</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2" />

                    <div className="col-8">
                        <div id="target" className="d-flex justify-content-center">
                            <div className="dashed-border-full" />
                        </div>
                    </div>

                    <div className="col-2" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        store: state.store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (productId, productValue) => {
            dispatch(actions.addProduct(productId, productValue));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);