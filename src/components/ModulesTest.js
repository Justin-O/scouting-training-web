import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/modules.css';
import ProgressBarLeft from '../assets/img/progressbar-left.svg';
import ProgressBarRight from '../assets/img/progressbar-right.svg';

function ModulesTest() {
    return (
        <div>
            <div className='row'>
                {/* <div className='col border g-0'> */}
                    <div className='d-flex justify-content-center'>
                        <Link to="/badges" className='link-d ontop'>
                            <div className='module-button d-flex justify-content-between'>
                                <div className='module-badge d-flex justify-content-center align-items-center align-self-center ms-4'>Badge</div>
                                <div className='module-info'>
                                    <h4 className='title'>Titel</h4>
                                    <p className='info'>Meer informatie</p>
                                </div>
                                <div className='module-number-outer d-flex justify-content-center align-items-center align-self-center'>
                                    <div className='module-number-inner d-flex justify-content-center align-items-center'>1</div>
                                </div>
                            </div>
                        </Link>
                        <img className='bar-l' src={ProgressBarLeft} alt="bar" />

                        <img className='bar-r' src={ProgressBarRight} alt="bar" />
                        <Link to="/badges" className='link-d ontop'>
                            <div className='module-button d-flex justify-content-between'>
                                <div className='module-number-outer d-flex justify-content-center align-items-center align-self-center'>
                                    <div className='module-number-inner d-flex justify-content-center align-items-center'>2</div>
                                </div>
                                <div className='module-info'>
                                    <h4 className='title'>title alt</h4>
                                    <p className='info'>Meer informatie</p>
                                </div>
                                <div className='module-badge d-flex justify-content-center align-items-center align-self-center me-4'>Badge</div>
                            </div>
                        </Link>
                    </div>
                {/* </div> */}
                {/* <div className='col border g-0'>
                    <img src={ProgressBarLeft} alt="bar" />
                </div> */}
                {/* <div className='col border g-0'></div> */}
            </div>
        </div>
    )
}

export default ModulesTest
