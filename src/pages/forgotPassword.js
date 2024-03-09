import {React, useState, useEffect} from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');



    useEffect(() => {
        const regexEmail = new RegExp('([A-Za-z0-9.]{6,30})@hotmail.com|gmail.com|bol.com.br|outlook.com|outlook.com|yahoo.com|myyahoo.com');

        var holdEmail = document.getElementById('holdEmail');
        var inputEmail = document.getElementById('emailLogin');
        if (!regexEmail.test(email)){
            
            if (email !== '')    {
                inputEmail.style.borderColor = 'red';
                holdEmail.classList.remove('after-green');
                holdEmail.classList.add('after-red');
                holdEmail.style.setProperty('--content', "'Email Inválido'");
                // console.log(window.getComputedStyle(holdEmail, "::after"))
                // var after = holdEmail.querySelector('::after');
                
            }
            else {
                inputEmail.style.borderColor = '#d1d3e2';
                holdEmail.classList.remove('after-green');
                holdEmail.classList.remove('after-red');
            }
        } else {
            inputEmail.style.borderColor = 'green';inputEmail.style.borderWidth = '2px';
            holdEmail.classList.remove('after-red');
            holdEmail.classList.add('after-green');
            holdEmail.style.setProperty('--content', "'Email Válido'");
        }
    }, [email])

  return (
    <div className="bg-gradient-dark max">
      <div class="container">

        {/* <!-- Outer Row --> */}
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9" style={{flex: '100%',maxWidth: '80%'}}>

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div class="row">
                            
                            <div class="col-lg-6" style={{flex: '100%',maxWidth: '100%'}}>
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-2">Esqueceu a senha?</h1>
                                        <p class="mb-4">Digite o seu email ultilizado no cadastro da loja, e enviaremos um um link para recuperar sua senha!</p>
                                    </div>
                                    <form class="user">
                                        <div class="form-group" id="holdEmail">
                                            <input type="email" class="form-control form-control-user "
                                                id="emailLogin" aria-describedby="emailHelp"
                                                placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                        </div>
                                        <a href="/StoreLogin" class="btn btn-dark btn-user btn-block">
                                            Enviar
                                        </a>
                                    </form>
                                    {/* <hr> */}
                                    <div class="text-center">
                                        <a class="small" href="/Cadastrar">Criar Conta!</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="/StoreLogin">Ja Possuo Cadastro!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

          </div>

        </div>
        {/* first div */}
        {/* <!-- Bootstrap core JavaScript--> */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Core plugin JavaScript--> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* <!-- Custom scripts for all pages--> */}
        <script src="js/sb-admin-2.min.js"></script>
    </div> 

    
  );

  
}

export default ForgotPassword;