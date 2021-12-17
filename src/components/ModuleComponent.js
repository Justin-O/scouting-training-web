import React from 'react';
import '../assets/css/modules.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import ProgressBarLeft from '../assets/img/progressbar-left.svg';
import Cheat from '../assets/img/cheat.png';

function ModuleComponent(props) {
    return (
        <>
            <div className='row'>
                <div className='col border g-0'>
                    <div className='d-flex justify-content-end'>
                        <Link to="/badges" className='link-d'>
                            <div className='module-button d-flex justify-content-between'>
                                <div className='module-badge d-flex justify-content-center align-items-center align-self-center ms-4'>Badge</div>
                                <div className='module-info'>
                                    <h4 className='title'>{props.title}</h4>
                                    <p className='info'>Meer informatie</p>
                                </div>
                                <div className='module-number-outer d-flex justify-content-center align-items-center align-self-center'>
                                    <div className='module-number-inner d-flex justify-content-center align-items-center'>{props.number}</div>
                                </div>
                            </div>
                        </Link>
                        <img src={ProgressBarLeft} alt="bar" />
                    </div>
                </div>
                {/* <div className='col border g-0'>
                    <img src={ProgressBarLeft} alt="bar" />
                </div> */}
                <div className='col border g-0'></div>
            </div>
        </>
    )
}

export default ModuleComponent
