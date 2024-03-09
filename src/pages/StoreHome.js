import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus, faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

const StoreHome = () => (
    <>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <div class="container-fluid">

                    {/* Cabeçalho */}

                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h4 mb-0 text-gray-800">status: <span className='text-success'>aberto</span></h1>
                        <h2 class="h2 mb-0 text-gray-800"><img src='logo.png' alt='Logo' />
                            Sua Loja</h2>
                        <h2 class="h4 mb-0 text-gray-800">views: <span className=' text-primary'>1059</span></h2>
                    </div>
                    {/* Cabeçalho */}

                    {/* Gráfico */}
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-center">
                                    <h3 class="m-0 font-weight-bold text-primary">Gráfico</h3>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="myAreaChart">
                                            {/* Grafico aqui */}
                                        </canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gráfico */}

                    {/* Criar Produto */}
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-center">
                                    <h3 class="m-0 font-weight-bold text-primary">Criar Produto</h3>
                                </div>
                                <div className='container justify-content-center'>
                                    <div class="card-body">
                                        <form>
                                            {/* Foto nome e descrição */}
                                            <div class="row mb-3">
                                                <div class="col col-auto">
                                                    <label for="photo">
                                                        <div className='btn btn-outline-secondary p-4'>
                                                            <FontAwesomeIcon icon={faCamera} size="2xl" />
                                                        </div>
                                                    </label>
                                                    <input className="form-control" id='photo' type='file' hidden />
                                                </div>

                                                <div class="col">
                                                    <div class="row mb-3">
                                                        <div class="col">
                                                            <div class="row mb-3">
                                                                <div className="col col-2">
                                                                    <label className="form-label" for="name">Nome</label>
                                                                </div>
                                                                <div className="col">
                                                                    <input className="form-control" id="name" type='text' placeholder='Nome do Produto'/>
                                                                </div>
                                                            </div>

                                                            <div class="row mb-3">
                                                                <div className="col col-2">
                                                                    <label className="form-label" for="description">Descrição</label>
                                                                </div>
                                                                <div className="col">
                                                                    <input className="form-control" id="description" type='text'  placeholder='Descrição do Produto'/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* Foto nome e descrição */}

                                            {/* Categoria e preço */}
                                            <div class="row mb-3">
                                                <div className='col'>
                                                    <div className='row'>
                                                        <div className='col col-auto'>
                                                            <label for="price">Preço</label>
                                                        </div>
                                                        <div className='col col-5'>
                                                            <input className="form-control" type="text" id="price" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className='row'>
                                                        <div className='col col-auto btn-vertical'>
                                                            <label for="category">Categoria</label>
                                                        </div>
                                                        <div className='col'>
                                                            <select className='form-control' type="text" id="category">
                                                                <option>Selecione</option>
                                                                <option>criar nova categoria</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Categoria e preço */}

                                            
                                            {/* Criar categoria */}
                                            <div class="row mb-3">
                                                <div className="col"></div>
                                                <div className="col col-auto">
                                                    <label>Nome</label>
                                                </div>
                                                <div className="col col-4">
                                                    <input className='form-control pr-0' type='text' placeholder='Nome da Categoria'/>
                                                </div>
                                                <div className="col col-auto pl-0">
                                                    <button className='btn p-0'>
                                                        <FontAwesomeIcon icon={faPlus} size="xl"/>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Criar categoria */}

                                            {/* Complementos */}
                                            <div className='row form-group mb-2'>
                                                <div className='container justify-items-center'>
                                                    <table className='table table-light table-striped table-bordered'>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className='row'>
                                                                        <div className='col'>
                                                                            Nome do Complemento
                                                                        </div>
                                                                        <div className='col'>
                                                                            Quantidade
                                                                        </div>
                                                                        <div className='col'>
                                                                            Preço
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    <div className='row'>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder='Nome do ingrediente' value="Ingredient 1" />
                                                                        </div>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder='Quantidade' value="100g" />
                                                                        </div>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder='Preço' value="R$ 0,10" />
                                                                        </div>
                                                                        <div className='col col-auto'>
                                                                            <button className="btn">
                                                                                <FontAwesomeIcon icon={faPencil} size="lg" />
                                                                            </button>
                                                                            <button className="btn">
                                                                                <FontAwesomeIcon icon={faTrash} size="lg" />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    <div className='row'>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder="Clique para adicionar" />
                                                                        </div>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder="..." />
                                                                        </div>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder='Preço' value="..." />
                                                                        </div>
                                                                        <div className='col col-auto'>
                                                                            <div className='btn disable'>
                                                                                <FontAwesomeIcon icon={faPlus} size="lg" />
                                                                            </div>
                                                                            <div className='btn disable'>
                                                                                <FontAwesomeIcon icon={faTrash} size="lg" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* Complementos */}

                                            {/* Ingredientes */}
                                            <div className='row form-group mb-2'>
                                                <div className='container justify-items-center'>
                                                    <table className='table table-light table-striped table-bordered'>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className='row'>
                                                                        <div className='col col-5'>
                                                                            Nome do Ingrediente
                                                                        </div>
                                                                        <div className='col'>
                                                                            Quantidade
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    <div className='row'>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder='Nome do ingrediente' value="Ingredient 1" />
                                                                        </div>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder='Quantidade' value="100g" />
                                                                        </div>
                                                                        <div className='col col-auto'>
                                                                            <button className="btn">
                                                                                <FontAwesomeIcon icon={faPencil} size="lg" />
                                                                            </button>
                                                                            <button className="btn">
                                                                                <FontAwesomeIcon icon={faTrash} size="lg" />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    <div className='row'>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder="Clique para adicionar" />
                                                                        </div>
                                                                        <div className='col'>
                                                                            <input className="form-control text-center" type="text" placeholder="..." />
                                                                        </div>
                                                                        <div className='col col-auto'>
                                                                            <div className='btn disable'>
                                                                                <FontAwesomeIcon icon={faPlus} size="lg" />
                                                                            </div>
                                                                            <div className='btn disable'>
                                                                                <FontAwesomeIcon icon={faTrash} size="lg" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* Ingredientes */}

                                            {/* Butões */}
                                            <div className="row justify-items-center mb-3">
                                                <div className="col">
                                                </div>
                                                <div className="col-auto">
                                                    <input className='btn btn-primary' type="submit" value="Confirmar" />
                                                </div>
                                                <div className="col">
                                                    <input className='btn btn-secondary' type="reset" value="Cancelar" />
                                                </div>
                                                <div className="col">
                                                </div>
                                            </div>
                                            {/* Butões */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Criar Produto */}
                </div>
            </div>
        </div>
    </>
)

export default StoreHome;