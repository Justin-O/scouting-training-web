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
                number={"1"}
            />

            <ModuleComponentInvert
                title={"Scouting in de samenleving"}
                number={"2"}
            />

            <ModuleComponent
                title={"Scouting academy"}
                number={"3"}
            />

            <ModuleComponentInvert
                title={"Leeftijdseigen kenmerken"}
                number={"4"}
            />
            <ModuleComponent
                title={"Activiteitenwensen & spelideeën"}
                number={"5"}
            />

            <ModuleComponentInvert
                title={"Programmeren"}
                number={"6"}
            />
            <ModuleComponent
                title={"Motivatietechnieken & groepsproces"}
                number={"7"}
            />

            <ModuleComponentInvert
                title={"Veiligheid"}
                number={"8"}
            />
            <ModuleComponent
                title={"Presenteren & uitleggen van activiteiten"}
                number={"9"}
            />

            <ModuleComponentInvert
                title={"Gewenst gedrag"}
                number={"10"}
            />
            <ModuleComponent
                title={"Evalueren van activiteiten"}
                number={"11"}
            />

            <ModuleComponentInvert
                title={"Gespreks- & overlegvaardigheden"}
                number={"12"}
            />
        </div>
    );
};

export default Modules;
