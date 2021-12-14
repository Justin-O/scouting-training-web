import React from 'react';
import '../assets/css/modules.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Modules() {
    return (
        <>
            <div className='row mt-5'>
                <div className='col border g-0'>
                    <div className='d-flex justify-content-end'>
                        <Link to="/badges" className='link-d'>
                            <div className='module-button d-flex justify-content-between'>
                                <div className='module-badge d-flex justify-content-center align-items-center align-self-center ms-4'>Badge</div>
                                <div className='module-info'>
                                    <h4 className='title'>Spelvisie & spelaanbod</h4>
                                    <p className='info'>Hier komt de omschrijving ervan dsdkfjhs kjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhss kjfhsef kjhseef kjhsef kjhsseffikihjawdoijna doijs foiajwd ijs.</p>
                                </div>
                                <div className='module-number-outer d-flex justify-content-center align-items-center align-self-center'>
                                    <div className='module-number-inner d-flex justify-content-center align-items-center'>1</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col border g-0'></div>
            </div>

            <div className='row'>
                <div className='col border g-0'></div>
                <div className='col border g-0'>
                    <div className='d-flex justify-content-start'>
                        <Link to="/badges" className='link-d'>
                            <div className='module-button d-flex justify-content-between'>
                                <div className='module-number-outer d-flex justify-content-center align-items-center align-self-center'>
                                    <div className='module-number-inner d-flex justify-content-center align-items-center'>2</div>
                                </div>
                                <div className='module-info'>
                                    <h4 className='title'>Scouting in de samenleving</h4>
                                    <p className='info'>Hier komt de omschrijving ervan dsdkfjhs kjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhsskjfhsef kjhseef kjhsef kjhss kjfhsef kjhseef kjhsef kjhsseffikihjawdoijna doijs foiajwd ijs.</p>
                                </div>
                                <div className='module-badge d-flex justify-content-center align-items-center align-self-center me-4'>Badge</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modules;
