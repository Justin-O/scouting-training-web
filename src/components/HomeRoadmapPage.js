import React from 'react';
import '../assets/css/roadmap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ModuleComponent from './ModuleComponent';
import ModuleComponentInvert from './ModuleComponentInvert';

function HomeRoadmapPage() {
    return (
        <div className='component-padding roadmap-container'>
            <ModuleComponent
                title={"Spelvisie & spelaanbod"}
                progress={100}
                color={"green"}
            />

            <ModuleComponentInvert
                title={"Scouting in de samenleving"}
                progress={90}
                color={"yellow"}
            />

            <ModuleComponent
                title={"Scouting academy"}
                progress={100}
                color={"yellow"}
            />

            <ModuleComponentInvert
                title={"Leeftijdseigen kenmerken"}
                progress={100}
                color={"green"}
            />

            <ModuleComponent
                title={"Activiteitenwensen & spelideeën"}
                progress={75}
                color={"green"}
            />

            <ModuleComponentInvert
                title={"Programmeren"}
                progress={20}
                color={"yellow"}
            />

            <ModuleComponent
                title={"Motivatietechnieken & groepsproces"}
                progress={33}
                color={"yellow"}
            />

            <ModuleComponentInvert
                title={"Veiligheid"}
                progress={5}
                color={"green"}
            />

            <ModuleComponent
                title={"Presenteren & uitleggen van activiteiten"}
                progress={100}
                color={"green"}
            />

            <ModuleComponentInvert
                title={"Gewenst gedrag"}
                progress={90}
                color={"yellow"}
            />

            <ModuleComponent
                title={"Evalueren van activiteiten"}
                progress={80}
                color={"yellow"}
            />

            <ModuleComponentInvert
                title={"Gespreks- & overlegvaardigheden"}
                progress={100}
                color={"green"}
            />
        </div>
    );
};

export default HomeRoadmapPage;
