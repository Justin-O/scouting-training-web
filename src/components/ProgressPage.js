import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/progresspage.css';
import '../assets/css/modulepage.css';
import '../assets/css/roadmap.css';
import Badge from '../assets/img/badge-progress.svg';
import BadgeGrey from '../assets/img/badge-progress-grey.svg';
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressPage() {

    let ProgressSum = 42;

    return (
        <div className='progresspage-container component-padding'>
            <div className='container'>
                <div className='row g-0'>
                    <div className='col text-center'>
                        <h2 className='modulepage-title'>Vooruitgang</h2>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col p-5 mb-3'>
                        <ProgressBar
                            className={"bar-container"}
                            baseBgColor={"#DBCCE5"}
                            bgColor={"#4A007F"}
                            completed={ProgressSum}
                        />
                    </div>
                </div>
            </div>
            <div className='container badges-title-container'>
                <div className='row g-0'>
                    <div className='col text-center'>
                        <h2 className='modulepage-title'>Badges</h2>
                    </div>
                </div>
            </div>
            <div className='container-fluid badge-row g-0'>
                <div className='container'>
                    <div className='row g-0'>
                        <div className='col-3'>
                            <img className='progress-badge' src={Badge} alt="" />
                            <h5 className='text-center'>Spelvisie & spelaanbod</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Scouting in de samenleving</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={Badge} alt="" />
                            <h5 className='text-center'>Scouting academy</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={Badge} alt="" />
                            <h5 className='text-center'>Leeftijdseigen kenmerken</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid badge-row g-0'>
                <div className='container'>
                    <div className='row g-0'>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Activiteitenwensen & spelideeën</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Programmeren</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Motivatietechnieken & groepsproces</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Veiligheid</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid badge-row g-0'>
                <div className='container'>
                    <div className='row g-0'>
                        <div className='col-3'>
                            <img className='progress-badge' src={Badge} alt="" />
                            <h5 className='text-center'>Presenteren & uitleggen van activiteiten</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Gewenst gedrag</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={BadgeGrey} alt="" />
                            <h5 className='text-center'>Evalueren van activiteiten</h5>
                        </div>
                        <div className='col-3'>
                            <img className='progress-badge' src={Badge} alt="" />
                            <h5 className='text-center'>Gespreks- & overlegvaardigheden</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressPage
