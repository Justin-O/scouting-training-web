import React from 'react';
import modulesPlaceholder from '../assets/img/homepage-roadmap.png'
import '../assets/css/modules-old.css'
import ModuleBadges from './ModuleBadges';

function ModulesOld() {
    return (
        <>
            <ModuleBadges />
            <div className='row row-padding'>
                {/* <h1>Modules</h1> */}
                {/* <img src={modulesPlaceholder} alt="Modules placeholder" width="80%"></img> */}
                {/* <div className='col'> */}
                <div className='module-placeholder'></div>
                {/* </div> */}

            </div>
        </>
    );
};

export default ModulesOld;
