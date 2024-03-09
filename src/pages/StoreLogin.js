import React, { useEffect, useState } from "react";
import '../styles/Reset.css'
import '../styles/StoreLogin.css'

const StoreLogin = () => {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');



    useEffect(() => {
        const regexEmail = new RegExp('([A-Za-z0-9.]{6,30})@hotmail.com|gmail.com|bol.com.br|outlook.com|outlook.com|yahoo.com|myyahoo.com');

        var holdEmail = document.getElementById('holdEmail');
        var inputEmail = document.getElementById('emailLogin');
        if (!regexEmail.test(email)){
            
            if (email !== '')    {
                inputEmail.style.borderColor = 'red';
                // holdEmail.classList.remove('after-green');
                // holdEmail.classList.add('after-red');
                // holdEmail.style.setProperty('--content', "'Email Inválido'");
                // console.log(window.getComputedStyle(holdEmail, "::after"))
                // var after = holdEmail.querySelector('::after');
                
            }
            else {
                inputEmail.style.borderColor = '#d1d3e2';
                // holdEmail.classList.remove('after-green');
                // holdEmail.classList.remove('after-red');
            }
        } else {
            inputEmail.style.borderColor = 'green';inputEmail.style.borderWidth = '2px';
            // holdEmail.classList.remove('after-red');
            // holdEmail.classList.add('after-green');
            // holdEmail.style.setProperty('--content', "'Email Válido'");
        }
    }, [email])

    // useEffect(() => {
    //     var holdPw = document.getElementById('holdPw');
    //     var inputPw = document.getElementById('inputPw');
    //     if (inputPw.value !== ''){
    //         if (String(inputPw.value).length < 8) {
    //             inputPw.style.borderColor = 'red';
    //             holdPw.classList.remove('after-green');
    //             holdPw.classList.add('after-red');
    //             holdPw.style.setProperty('--content', "'Senha Muito Curta'");
    //         } 
    //         else {
    //             inputPw.style.borderColor = 'green';inputPw.style.borderWidth = '2px';
    //             holdPw.classList.remove('after-red');
    //             holdPw.classList.remove('after-green');

    //         }
    //     } 
    //     else {
    //         inputPw.style.borderColor = '#d1d3e2';
    //         holdPw.classList.remove('after-green');
    //         holdPw.classList.remove('after-red');
    //     }
    // }, [pw])

    return (
        <div className="bg-gradient-dark max">
            <div class="container">

                {/* <!-- Outer Row --> */}
                <div class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9" style={{ flex: '100%', maxWidth: '80%' }}>

                        <div class="card o-hidden border-0 shadow-lg my-5" >
                            <div class="card-body p-0" >
                                {/* <!-- Nested Row within Card Body --> */}
                                <div class="row">

                                    <div class="col-lg-6" style={{ flex: '100%', maxWidth: '100%' }}>
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Bem Vindo a Cardapyio!</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group after-red" id="holdEmail">
                                                    <input type="email" class="form-control form-control-user"
                                                        id="emailLogin" aria-describedby="emailHelp"
                                                        placeholder="Email" value={email} onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }}/>
                                                </div>
                                                <div class="form-group" id="holdPw">
                                                    <input type="password" class="form-control form-control-user"
                                                        id="inputPw" placeholder="Senha" value={pw} onChange={(e) => {
                                                            setPw(e.target.value);
                                                        }}/>
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label" for="customCheck">Lembar</label>
                                                    </div>
                                                </div>
                                                <a href="/StoreHome" class="btn btn-dark btn-user btn-block">
                                                    Entrar
                                                </a>
                                                {/* <hr> */}
                                                {/*                                           <a href="index.html" class="btn btn-google btn-user btn-block">
                                              <i class="fab fa-google fa-fw"></i> Login with Google
                                          </a>
                                          <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                              <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                          </a> */}
                                            </form>
                                            {/* <hr> */}
                                            <div class="text-center">
                                                <a class="small" href="/ForgotPassword">Esqueci Minha Senha!</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="/Cadastrar">Criar Conta!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* <!-- Bootstrap core JavaScript--> */}
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            {/* <!-- Core plugin JavaScript--> */}
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            {/* <!-- Custom scripts for all pages--> */}
            <script src="js/sb-admin-2.min.js"></script>
        </div>
    );
};

export default StoreLogin;
