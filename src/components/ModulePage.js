import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/modulepage.css';
import '../assets/css/roadmap.css';
import FeedbackIcon from '../assets/img/feedback-icon.svg';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

function ModulePage() {

    const moduleProgress = 60;
    const moduleInfo = "In deze module vind je voor de vier onderdelen van deelkwalificatie 1: Spelvisie en spelaanbod achtergrondinformatie en werkvormen. Deze vier onderdelen van deelkwalificatie 1: Spelvisie en spelaanbod zijn: Spelvisie SCOUTS en de activiteitengebieden. Wet & belofte, ceremoniën. Scoutingvisie op (doorlopende) ontwikkeling. Het progressiesysteem per leeftijdsgroep.";

    return (
        <div className='modulepage-container component-padding'>
            <div className='container'>
                <div className='row bottom-spacer-3 g-0'>
                    <div className='col-10 pe-5'>
                        <h2 className='modulepage-title'>Spelvisie & spelaanbod</h2>
                        <p className='modulepage-info'>{moduleInfo}</p>
                    </div>
                    <div className='col-2 progress-container font-bold'>
                        <CircularProgressbar
                            value={moduleProgress}
                            text={`${moduleProgress}%`}
                            background={true}
                            strokeWidth={12}
                            styles={buildStyles({
                                pathColor: '#4A007F',
                                trailColor: '#DBCCE5',
                                backgroundColor: '#F3F0E9',
                                textColor: '#000',
                            })}
                        />
                    </div>
                </div>
                <div className='row bottom-spacer-6 g-0'>
                    <div className='col-6 d-flex justify-content-center'>
                        <Link to="/modulesection" className='link-d'>
                            <div className='module-button green d-flex justify-content-start'>
                                <div className='progress-container d-flex justify-content-center align-items-center align-self-center font-bold'>
                                    <CircularProgressbar
                                        value={80}
                                        text={'A'}
                                        background={true}
                                        strokeWidth={10}
                                        styles={buildStyles({
                                            pathColor: '#4A007F',
                                            trailColor: '#DBCCE5',
                                            backgroundColor: '#F3F0E9',
                                            textSize: '3rem',
                                            textColor: '#4A007F',
                                        })}
                                    />
                                </div>
                                <div className='module-info d-flex justify-content-center align-items-center'>
                                    <h2 className='title'>Onderdeel A</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col-6 d-flex justify-content-center'>
                        <Link to="/modulesection" className='link-d'>
                            <div className='module-button yellow d-flex justify-content-start'>
                                <div className='progress-container d-flex justify-content-center align-items-center align-self-center font-bold'>
                                    <CircularProgressbar
                                        value={20}
                                        text={'B'}
                                        background={true}
                                        strokeWidth={10}
                                        styles={buildStyles({
                                            pathColor: '#4A007F',
                                            trailColor: '#DBCCE5',
                                            backgroundColor: '#F3F0E9',
                                            textSize: '3rem',
                                            textColor: '#4A007F',
                                        })}
                                    />
                                </div>
                                <div className='module-info d-flex justify-content-center align-items-center'>
                                    <h2 className='title'>Onderdeel B</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row bottom-spacer-6 g-0'>
                    <div className='col-12 d-flex justify-content-center '>
                        <Link to="/wip" className='link-d'>
                            <div className='module-button purple d-flex justify-content-start'>
                                <div className='progress-container d-flex justify-content-center align-items-center align-self-center'>
                                    <CircularProgressbarWithChildren
                                        value={100}
                                        background={true}
                                        strokeWidth={10}
                                        styles={buildStyles({
                                            pathColor: '#4A007F',
                                            trailColor: '#DBCCE5',
                                            backgroundColor: '#F3F0E9',
                                            textSize: '3rem',
                                            textColor: '#4A007F',
                                        })}
                                    >
                                        <img className='progress-icon section' src={FeedbackIcon} alt="" />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='module-info d-flex justify-content-center align-items-center'>
                                    <h2 className='title white'>Feedback</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModulePage
