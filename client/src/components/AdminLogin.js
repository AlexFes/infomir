import React from 'react';

const AdminLogin = () => {
    return(
        <div className='col-6 ml-auto mr-auto mt-5 d-flex justify-content-center'>
            <form action='/admin/loginPost' method='post'>
                <div className='form-group'>
                    <input type="text" placeholder='username' name='username' />
                </div>

                <div className='form-group'>
                    <input type="password" placeholder='password' name='password' />
                </div>

                <button type='submit' className='btn btn-outline-primary'>
                    Войти
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;