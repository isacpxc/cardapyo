import React from "react";
import Header from "../partials/Header";
import "../styles/form.css"
import { Formik, Field, Form } from 'formik';
import InputMask from 'react-input-mask';

function onCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
        setFieldValue('street', data.logradouro);
        setFieldValue('dist', data.bairro);
        setFieldValue('city', data.localidade);
        });
}



class Nform extends React.Component{
    render(){
    return (
        <div className="App">
            <Header/>
        <Formik
            validateOnMount
            initialValues={{ 
            cep: '',
            street: '',
            dist: '',
            city: ''
            }}
            render={({setFieldValue }) => (
            <Form className="form-all" method="post">
                <div className="centered-div">
                <fieldset className="input-field">

                <div className="input-holder-one">
                    <div className="margin-top"></div>
                    <label className="label-input" htmlFor="name">Nome</label>
                    <input type="text" name="name" className="input-txt-style"/>
                </div>

                <div className="input-holder-both">
                    <div className="margin-top"></div>
                    <div className="hold-both">
                    <div className="hold-cep">
                        <label htmlFor="cep" className="label-input">CEP</label>
                        <InputMask mask="99999-999" name="cep" type="text"  onBlur={(ev) => onCep(ev, setFieldValue)}  className="input-txt-style"/> 
                    </div>
                    <div className="hold-city">
                        <label htmlFor="city" className="label-input">Cidade</label>
                        <Field name="city" type="text" className="input-txt-style"/>
                    </div>
                    </div>
                </div>

                <div className="input-holder-both">
                    <div className="margin-top"></div>
                    <div className="hold-both">
                        <div className="hold-dist">
                        <label htmlFor="dist" className="label-input">Bairro</label>
                        <Field name="dist" type="text" className="input-txt-style"/>
                        </div>
                        <div className="hold-street">
                        <label htmlFor="street" className="label-input">Rua</label>
                        <Field name="street" type="text" className="input-txt-style"/>
                        </div>
                    </div>
                </div>

                <div className="input-holder-both">
                    <div className="margin-top"></div>
                    <div className="hold-both">
                        <div className="hold-number">
                        <label htmlFor="dist" className="label-input">Número</label>
                        <input type="text" name="dist" id="" className="input-txt-style"/>
                        </div>
                        <div className="hold-apt">
                        <label htmlFor="apt" className="label-input">Apt. nº</label>
                        <input type="text" name="apt" id="" className="input-txt-style"/>
                        </div>
                        <div className="hold-ref">
                        <label htmlFor="street" className="label-input">P. Referência</label>
                        <input type="text" name="street" id="" className="input-txt-style"/>
                        </div>
                    </div>
                </div>


                <div className="input-holder-margin"></div>
                <div className="input-holder-radio-holder">
                    <div className="title-hold"><span>Tipo de Pagamento</span></div>
                    <div className="radios-holder">
                    <label className="cash-radio-holder" htmlFor="cash">
                        <div></div>
                        <span>Dinheiro</span>
                        <input type="radio" name="payment" id="cash"/>
                    </label>
                    <label className="pix-radio-holder radio-marked" htmlFor="pix">
                        <div></div>
                        <span>Pix</span>
                        <input type="radio" name="payment" id="pix" />
                    </label>
                    <label className="card-radio-holder" htmlFor="card">
                        <div></div>
                        <span>Cartão</span>
                        <input type="radio" name="payment" id="card"/>
                    </label>
                    </div>
                </div>
                </fieldset>

            </div> {/* end of centered div */}
            
            <div className="hold-all-log-btns">
                <div className="margin-log"></div>

                <div className="hold-log">
                <div className="log">
                    <span className="span-log-l">SUBTOTAL:</span>
                    <span className="span-log-r">R$ 135,00</span>
                </div>
                <div className="log">
                    <span className="span-log-l">FRETE:</span>
                    <span className="span-log-r">R$ 8,00</span>
                </div>
                <div className="log">
                    <span className="span-log-l">TOTAL:</span>
                    <span className="span-log-r">R$ 143,00</span>
                </div>
                </div>

                <div className="margin-log"></div>

                <div className="hold-btns">
                <button className="back-btn" onClick={(e)=>{
                    e.preventDefault();
                }}><span>Voltar</span> <img src="/assets/img/icons/left50.png" alt="" /></button>
                <button type="submit" className="buy-btn" onClick={(e=>{
                    e.preventDefault();
                })}><span>Enviar</span> <img src="/assets/img/icons/right50.png" alt=""  /></button>
                </div>
            </div>
            </Form>
            )}
        />
        </div>
    );
  }
}

export default Nform;