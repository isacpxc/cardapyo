import { React,useState, useEffect } from "react";
import { cpfMask, cnpjMask, telMask, celMask, timeMask, reaisMask } from "../masks";

const Cadastrar = () => {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const [tel, setTel] = useState('');
    const [cnpj, setCnpj] = useState(false);
    const [cnpjInput, setCnpjInput] = useState('');
    const [bHour, setBHour] = useState('');
    const [eHour, setEHour] = useState('');
    const [timeCheck, setTimeCheck] = useState(false);
    const [reais, setReais] = useState('');



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

    useEffect(() => {
        var holdPw = document.getElementById('holdPw');
        var inputPw = document.getElementById('inputPw');
        if (inputPw.value !== ''){
            if (String(inputPw.value).length < 8) {
                inputPw.style.borderColor = 'red';
                holdPw.classList.remove('after-green');
                holdPw.classList.add('after-red');
                holdPw.style.setProperty('--content', "'Senha Muito Curta'");
            } 
            else {
                inputPw.style.borderColor = 'green';inputPw.style.borderWidth = '2px';
                holdPw.classList.remove('after-red');
                holdPw.classList.remove('after-green');

            }
        } 
        else {
            inputPw.style.borderColor = '#d1d3e2';
            holdPw.classList.remove('after-green');
            holdPw.classList.remove('after-red');
        }
    }, [pw])

    useEffect(()=>{
        var holdPwConfirm = document.getElementById('holdPwConfirm');
        var inputPwConfirm = document.getElementById('inputPwConfirm');

        if (inputPwConfirm.value !== ''){
            if (String(inputPwConfirm.value).length < 8) {
                inputPwConfirm.style.borderColor = 'red';
                holdPwConfirm.classList.remove('after-green');
                holdPwConfirm.classList.add('after-red');
                holdPwConfirm.style.setProperty('--content', "'Senha Muito Curta'");
            }
            else {
                if (pw !== pwConfirm){
                    inputPwConfirm.style.borderColor = 'red';
                    holdPwConfirm.classList.remove('after-green');
                    holdPwConfirm.classList.add('after-red');
                    holdPwConfirm.style.setProperty('--content', "'Senhas Não Batem'");
                }
                else {
                    inputPwConfirm.style.borderColor = 'green';
                    inputPwConfirm.style.borderWidth = '2px';
                    holdPwConfirm.classList.remove('after-red');
                    holdPwConfirm.classList.remove('after-green');
                }
            }
        } 
        else {
            inputPwConfirm.style.borderColor = '#d1d3e2';
            holdPwConfirm.classList.remove('after-green');
            holdPwConfirm.classList.remove('after-red');
        }
    },[pwConfirm])

    useEffect(()=>{
       

        if (String(tel.replace(/\D/g, '')).length <= 10) setTel(telMask(tel));
        else setTel(celMask(tel))
    },[tel]);

    useEffect(() => {
        // console.log(document.getElementById('cnpjInput'));
        if (cnpj){
            setCnpjInput(cnpjMask(cnpjInput));
            document.getElementById('cnpjInput').placeholder = 'CNPJ';
        } 
        else {
            setCnpjInput(cpfMask(cnpjInput))
            document.getElementById('cnpjInput').placeholder = 'CPF';
        }
    }, [cnpj,cnpjInput])

    useEffect(() => {
        setBHour(timeMask(bHour))
    }, [bHour])

    useEffect(() => {
        setEHour(timeMask(eHour))
    }, [eHour])

    useEffect(() => {
        if (timeCheck) {
            setBHour('0000');
            setEHour('2300');
        }
    }, [timeCheck])

    useEffect(() => {
        
        setReais(reaisMask(reais));
        
    }, [reais])

  return (
    <div className="bg-gradient-dark max btn-group-vertical" >
      <div className="container " >

        <div className="card o-hidden border-0 shadow-lg ">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-7" style={{flex: '100%',maxWidth: '100%'}}>
                        <div className="p-5">
                            <form className="user">
                                <div className="form-group text-center">
                                    <h4>Dados</h4>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="StoreName"
                                            placeholder="Nome da Loja"/>
                                    </div>
                                    <div className="col-sm-6" id="holdTel">
                                        <input type="text" className="form-control form-control-user" id="inputTel"
                                            placeholder="Celular: (88)xxxxx-xxxx" value={tel} onChange={e=>{
                                                // console.log(e);
                                                setTel(e.target.value)
                                            }}/>
                                    </div>
                                </div>
                                <div className="form-group" id="holdEmail">
                                    <input type="email" className="form-control form-control-user" id="emailLogin"
                                        placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group row" id="holdPw">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="inputPw" placeholder="Senha" value={pw} onChange={e=>setPw(e.target.value)}/>
                                    </div>
                                    <div className="col-sm-6" id="holdPwConfirm">
                                        <input type="password" className="form-control form-control-user"
                                            id="inputPwConfirm" placeholder="Confirmar Senha" value={pwConfirm} onChange={e=>setPwConfirm(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                      <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="cnpjCheck" checked={cnpj} onChange={(e) => {
                                                        // e.preventDefault();
                                                        setCnpj(e.target.checked)
                                                        }}/>
                                                    <label className="custom-control-label" htmlFor="cnpjCheck">CNPJ</label>
                                        </div>
                                      </div>
                                    <div className="col-sm-11">
                                        <input type="text" className="form-control form-control-user" id="cnpjInput"
                                            placeholder="CPF" value={cnpjInput} onChange={e => setCnpjInput(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="form-group text-center">
                                    <h4>Loja</h4>
                                </div>
                                {/* HORARIO */}
                                <div className="form-group row mt-4">
                                    <div className="col-sm-4 mb-3 mb-sm-0 btn-group-vertical">
                                        <h5>Horário de funcionamento: </h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control form-control-user text-center" id="bHour"
                                            placeholder="Início 00:00" value={bHour} onChange={e => setBHour(e.target.value)}/>
                                    </div>
                                    <div className="btn-group-vertical">
                                        <h5>-</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control form-control-user text-center" id="eHour"
                                            placeholder="Fim 00:00" value={eHour} onChange={e => setEHour(e.target.value)}/>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                      <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck-exp" checked={timeCheck} onChange={e => setTimeCheck(e.target.checked)}/>
                                                    <label className="custom-control-label" htmlFor="customCheck-exp">24h</label>
                                        </div>
                                      </div>
                                </div>
                                {/* HORARIO */}

                    {/* DIAS DE FUNCIONAMENTO */}
                    <div className="form-group row">
                                    <div className="col-sm-2 mb-3 mb-sm-0 btn-group-vertical"></div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="domingoCheck" value={'domingo'}/>
                                                    <label className="custom-control-label" htmlFor="domingoCheck">Domingo</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="segundaCheck" value={'segunda'}/>
                                                    <label className="custom-control-label" htmlFor="segundaCheck">Segunda</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="terçaCheck" value={'terça'} />
                                                    <label className="custom-control-label" htmlFor="terçaCheck">Terça</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="quartaCheck" value={'quarta'} />
                                                    <label className="custom-control-label" htmlFor="quartaCheck">Quarta</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="quintaCheck" value={'quinta'}/>
                                                    <label className="custom-control-label" htmlFor="quintaCheck">Quinta</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="sextaCheck" value={'sexta'}/>
                                                    <label className="custom-control-label" htmlFor="sextaCheck">Sexta</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 mb-3 mb-sm-0 btn-group-vertical">
                                        <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="sabadoCheck" value={'sábado'}/>
                                                    <label className="custom-control-label" htmlFor="sabadoCheck">Sábado</label>
                                        </div>
                                    </div>
                                </div>

                                {/* DIAS DE FUNCIONAMENTO */}

                                {/* DELIVERY */}
                                <div className="form-group row mt-4">
                                    <div className="col-sm-2 mb-3 mb-sm-0 btn-group-vertical">
                                        <h5>Delivery: </h5>
                                    </div>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control form-control-user text-center" id="reaisDelivery"
                                            placeholder="R$ 00,00" value={reais} onChange={e => setReais(e.target.value)}/>
                                    </div>
                                    {/* <div className="col-sm-2 btn-group-vertical" hidden>
                                      <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="deinDelivery" />
                                                    <label className="custom-control-label" htmlFor="deinDelivery-del">Delivery Dinâmico</label>
                                        </div>
                                      </div> */}
                                </div>
                                {/* DELIVERY */}
                                
                                {/* FOTO */}
                                <div className="form-group row mt-4">
                                    <div className="col-sm-3 mb-3 mb-sm-0 btn-group-vertical">
                                            <h5>Upload Imagem: </h5>
                                    </div>
                                    <div className="col-sm-2">
                                        
                                            <label className="btn btn-secondary btn-icon-split" htmlFor="upload">
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-arrow-up"></i>
                                                </span>
                                                <span className="text">Upload</span>
                                            </label>
                                        
                                        <input type="file" name="upload" id="upload"  hidden/>
                                    </div>
                                </div>

                                {/* FOTO */}

                                <a href="login.html" className="btn btn-dark btn-user btn-block">
                                    Cadastrar
                                </a>

                            </form>
                            {/* <hr> */}
                            <div className="text-center">
                                <a className="small" href="/ForgotPassword">Esqueci Minha Senha!</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="/StoreHome">Ja Possuo Cadastro!</a>
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
}

export default Cadastrar;