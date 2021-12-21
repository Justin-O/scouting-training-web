import React from 'react';
import '../assets/css/modules.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { CircularProgressbarWithChildren, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Badge from '../assets/img/badge.svg';
import BadgeGrey from '../assets/img/badge-grey.svg';

function ModuleComponent(props) {
    
    const progress = props.progress;
    let badgeLoader;
    let backgroundLoader;

    if (progress === 100) {
        badgeLoader = Badge
        backgroundLoader = '#4A007F'
    } else {
        badgeLoader = BadgeGrey
        backgroundLoader = '#EFE9DA'
    }

    
    const  moduleColor = props.color;
    let moduleButtonStyle;

    if (moduleColor === "green") {
        moduleButtonStyle = 'module-button green d-flex justify-content-end'
    } else {
        moduleButtonStyle = 'module-button yellow d-flex justify-content-end'
    }

    return (
        <>
            <div className='row g-0'>
                <div className='col g-0'>
                    <div className='d-flex justify-content-end'>
                        <Link to="/voortgang" className='link-d'>
                            <div className={moduleButtonStyle}>
                                <div className='module-info d-flex justify-content-center align-items-center'>
                                    <h4 className='title'>{props.title}</h4>
                                </div>
                                <div className='progress-container d-flex justify-content-center align-items-center align-self-center'>
                                    <CircularProgressbarWithChildren
                                        value={progress}
                                        background={true}
                                        strokeWidth={12}
                                        styles={buildStyles({
                                            pathColor: '#4A007F',
                                            trailColor: '#DBCCE5',
                                            backgroundColor: backgroundLoader,
                                        })}
                                    >
                                        <img style={{ width: 100 }} src={badgeLoader} alt="badge" />
                                    </CircularProgressbarWithChildren>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col g-0'></div>
            </div>
        </>
    )
}

export default ModuleComponent
