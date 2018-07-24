import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Market from './Market';
import Cart from './Cart';

class Body extends React.Component {
    componentDidMount() {
        this.props.fetchInitialData();
    }

    renderDropdown() {
        switch (this.props.onclick.clicked) {
            case true:
                return (
                    <div className="row dropdown-content responsive-main-paragraph pt-5 " id="dropdown-1">
                        <div className="col-2"/>

                        <div className="col-4 px-3">
                            <p className="h5 responsive-header-2">
                                КуМир (Комплект Учебных МИРов)
                            </p>

                            <p>
                                — система программирования, предназначенная для поддержки начальных
                                курсов информатики и программирования в средней и высшей школе.
                            </p>

                            <p className="h5 responsive-header-2">
                                Особенности системы КуМир
                            </p>

                            <p>
                                В системе КуМир используется школьный алгоритмический язык с русской лексикой и встроенными
                                исполнителями Робот и Чертёжник.
                                При вводе программы КуМир постоянно осуществляет полный контроль ее правильности, сообщая на
                                полях программы обо всех обнаруженных ошибках.
                                При выполнении программы в пошаговом режиме КуМир выводит на поля результаты операций
                                присваивания и значения логических выражений. Это позволяет ускорить процесс освоения азов
                                программирования.
                                Кумир работает в операционных системах Windows или Linux.
                                Система Кумир разработана в ФГУ ФНЦ НИИСИ РАН по заказу Российской Академии Наук и
                                распространяется свободно на условиях лицензии GNU 2.0*.
                                *Данная лицензия разрешает вам или вашей организации бессрочно использовать КуМир на любом
                                количестве компьютеров в любых целях без оформления каких-либо дополнительных документов.
                            </p>
                        </div>

                        <div className="col-4 px-3">
                            <p className="h5 responsive-header-2">
                                ПиктоМир
                            </p>

                            <p>
                                — младший брат КуМира, свободно распространяемая программная система для изучения азов
                                программирования дошкольниками и младшими школьниками.
                                ПиктоМир позволяет ребенку "собрать" из пиктограмм на экране компьютера несложную программу,
                                управляющую виртуальным исполнителем-роботом. ПиктоМир в первую очередь ориентирован на
                                дошкольников, еще не умеющих писать или на младшеклассников, не очень любящих писать. При
                                желании, ПиктоМир-программу можно сохранить в КуМире и продолжить работу над ней в КуМире.
                            </p>
                        </div>

                        <div className="col-2"/>
                    </div>
                );

            default:
                return;
        }
    }

    renderMarket(products) {
        switch (this.props.onclick.clickedStore) {
            case true:
                return (<Market products={products}/>);

            default:
                return;
        }
    }

    renderCart(cart) {
        switch (this.props.onclick.clickedStore) {
            case true:
                return (<Cart cart={cart}/>);

            default:
                return;
        }
    }

    render() {
        return (
            <div className="container-fluid position-relative mt-5 px-0">
                <div id="greyline"/>

                <div className="row pt-5">
                    <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                        <img className="horizontal-tags" src="images/1_1.png"/>

                        <div className="caption">
                            <p className="responsive-paragraph text-center">
                                Компания ИнфоМир занимается народным образованием в области Информатики и ИКТ
                            </p>
                        </div>
                    </div>

                    <div className="col-5">
                        <img className="responsive-image" src="images/1_2.png"/>
                    </div>
                </div>

                <hr/>

                <div className="row d-flex justify-content-center">
                    <img className="main-image-1" src="images/2_1.png"/>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-6 text-center">
                        <h1 className="responsive-header-1">
                            Наш опыт бесценен
                        </h1>

                        <h3 className="responsive-header-2">
                            Только в России (и СССР) было изданы десятки наших учебников, пособий и энциклопедий тиражом
                            более 10 млн. экземпляром
                        </h3>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <img className="main-image-2" src="images/2_2.png" alt=""/>
                </div>

                <hr/>

                <div className="row d-flex flex-row pb-5">
                    <div className="header-container-1">
                        <p className="responsive-header-main">
                            Мы
                        </p>
                    </div>

                    <div className="header-container-2">
                        <img className="responsive-image-main" src="images/3_1.png"/>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="images/3_2.svg" className="horizontal-tags"/>
                        <img src="images/image_8.png" className="responsive-circle-images"/>
                    </div>

                    <div className="col-3 d-flex flex-column justify-content-center pl-5">
                        <p className="h3 responsive-caption">
                            занимаемся обучением Программированию детей
                            и взрослых, проводим таргетированные
                            авторские курсы
                        </p>

                        <hr className="style3"/>
                    </div>

                    <div className="col-3"/>
                </div>

                <div className="row pb-5">
                    <div className="col-3"/>

                    <div className="col-3 d-flex flex-column justify-content-end pr-5">
                        <p className="h3 responsive-caption">
                            осуществляем поддержку и сопровождение СПО КуМир
                            и ПиктоМир, разрабатываем программное
                            обеспечение для обучения на базе КуМир и ПиктоМир
                        </p>

                        <hr className="style3"/>

                        <div className="row d-flex justify-content-center pt-3">
                            <button onClick={ () => {this.props.onclickAction(this.props.onclick.clicked)} } className="dropbtn"/>
                        </div>
                    </div>

                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="images/3_3.svg" className="horizontal-tags"/>
                        <img src="images/image_9.png" className="responsive-circle-images"/>
                    </div>
                </div>

                { this.renderDropdown() }

                <div className="row py-5">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="images/3_4.svg" className="horizontal-tags"/>
                        <img src="images/image_10.png" className="responsive-circle-images"/>
                    </div>

                    <div className="col-3 d-flex flex-column justify-content-center pl-5">
                        <p className="h3 responsive-caption">
                            разрабатываем и производим роботов для уроков Информатики
                        </p>

                        <hr className="style3"/>

                        <p className="responsive-main-paragraph">
                            на нашем сайте вы можете приобрести комплекты для обучения
                            основам алгоритмики в дошкольных учереждениях и дома, а так же
                            фирменные мягкие игрушки
                        </p>
                    </div>

                    <div className="col-3"/>
                </div>

                <div className="row justify-content-center">
                    <button onClick={ () => {this.props.onclickStoreAction(this.props.onclick.clickedStore)} } className="dropbtn-store"/>
                </div>

                <hr/>

                { this.renderMarket(this.props.store.products) }

                { this.renderCart(this.props.store.cart) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        onclick: state.onclick,
        store: state.store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onclickAction: (clicked) => {
            dispatch(actions.onclickAction(clicked));
        },

        onclickStoreAction: (clicked) => {
            dispatch(actions.onclickStoreAction(clicked));
        },

        fetchInitialData: () => {
            dispatch(actions.fetchInitialData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);