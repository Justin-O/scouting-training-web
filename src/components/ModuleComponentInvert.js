import React from 'react';
import '../assets/css/modules.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import ProgressBarRight from '../assets/img/progressbar-right.svg';

function ModuleComponentInvert(props) {
    return (
        <>
            <div className='row'>
                <div className='col border g-0'></div>
                {/* <div className='col-2 border g-0'></div> */}
                <div className='col border g-0'>
                    <div className='d-flex justify-content-start'>
                        <img src={ProgressBarRight} alt="bar" />
                        <Link to="/badges" className='link-d'>
                            <div className='module-button d-flex justify-content-between'>
                                <div className='module-number-outer d-flex justify-content-center align-items-center align-self-center'>
                                    <div className='module-number-inner d-flex justify-content-center align-items-center'>{props.number}</div>
                                </div>
                                <div className='module-info'>
                                    <h4 className='title'>{props.title}</h4>
                                    <p className='info'>Meer informatie</p>
                                </div>
                                <div className='module-badge d-flex justify-content-center align-items-center align-self-center me-4'>Badge</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModuleComponentInvert
