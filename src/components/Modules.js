import React from 'react';
import '../assets/css/modules.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ModuleComponent from './ModuleComponent';
import ModuleComponentInvert from './ModuleComponentInvert';

function Modules() {
    return (
        <div className='my-5'>
            <ModuleComponent
                title={"Spelvisie & spelaanbod"}
                progress={100}
            />

            <ModuleComponentInvert
                title={"Scouting in de samenleving"}
                progress={90}
            />

            <ModuleComponent
                title={"Scouting academy"}
                progress={100}
            />

            <ModuleComponentInvert
                title={"Leeftijdseigen kenmerken"}
                progress={100}
            />

            <ModuleComponent
                title={"Activiteitenwensen & spelideeën"}
                progress={75}
            />

            <ModuleComponentInvert
                title={"Programmeren"}
                progress={20}
            />

            <ModuleComponent
                title={"Motivatietechnieken & groepsproces"}
                progress={33}
            />

            <ModuleComponentInvert
                title={"Veiligheid"}
                progress={5}
            />

            <ModuleComponent
                title={"Presenteren & uitleggen van activiteiten"}
                progress={100}
            />

            <ModuleComponentInvert
                title={"Gewenst gedrag"}
                progress={90}
            />
            
            <ModuleComponent
                title={"Evalueren van activiteiten"}
                progress={80}
            />

            <ModuleComponentInvert
                title={"Gespreks- & overlegvaardigheden"}
                progress={100}
            />
        </div>
    );
};

export default Modules;
