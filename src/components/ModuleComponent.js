import React from 'react';
import '../assets/css/roadmap.css';
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

    if (progress >= 100) {
        badgeLoader = Badge
        backgroundLoader = '#4A007F'
    } else {
        badgeLoader = BadgeGrey
        backgroundLoader = '#EFE9DA'
    }

    
    const moduleColor = props.color;
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
                        <Link to="module" className='link-d module-margin'>
                            <div className={moduleButtonStyle}>
                                <div className='module-info d-flex justify-content-center align-items-center'>
                                    <h2 className='title'>{props.title}</h2>
                                </div>
                                <div className='progress-container d-flex justify-content-center align-items-center align-self-center'>
                                    <CircularProgressbarWithChildren
                                        value={progress}
                                        background={true}
                                        strokeWidth={10}
                                        styles={buildStyles({
                                            pathColor: '#4A007F',
                                            trailColor: '#DBCCE5',
                                            backgroundColor: backgroundLoader,
                                        })}
                                    >
                                        <img className='progress-icon module' src={badgeLoader} alt="badge" />
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
