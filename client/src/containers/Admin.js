import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.title = React.createRef();
        this.text = React.createRef();
        this.file = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAuthData();
    }

    handleSubmit(event) {
        let formData = new FormData();

        formData.append('file', this.file.current.files[0]);
        formData.append('title', this.title.current.value);
        formData.append('text', this.text.current.value);

        this.props.addItem(formData);

        event.preventDefault();
    }

    render() {
        return(
            <div className='container-fluid px-0'>
                <div className="row mt-5">
                    <div className="col-6 offset-3">
                        <h3>Создать новость</h3>

                        <form onSubmit={ this.handleSubmit } className='mt-4'>
                            <div className="form-group">
                                <label htmlFor="titleInput">Заголовок</label>

                                <input ref={ this.title } type="text" className="form-control" id='titleInput' placeholder='Введите заголовок новости'/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="newsTextarea">Новость</label>

                                <textarea ref={ this.text } id="newsTextarea" cols="30" rows="10" className="form-control" placeholder='Введите текст новости'/>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id='fileAddon'>Изображение</span>
                                </div>

                                <div className="custom-file">
                                    <input ref={ this.file } type="file" className="custom-file-input" id="fileInput" aria-describedby='fileAddon' />

                                    <label htmlFor="fileInput" className="custom-file-label">Выберите файл</label>
                                </div>
                            </div>

                            <button className="btn btn-outline-primary" type='submit'>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newsfeed: state.newsfeed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (formData) => {
            dispatch(actions.addItem(formData));
        },

        fetchAuthData: () => {
            dispatch(actions.fetchAuthData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);