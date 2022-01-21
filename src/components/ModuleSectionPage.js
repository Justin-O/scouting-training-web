import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/modulepage.css';
import '../assets/css/roadmap.css';
import VideoButton from '../assets/img/video-method.svg';
import TextButton from '../assets/img/text-method.svg';
import QuizButton from '../assets/img/quiz-method.svg';
import AddIcon from '../assets/img/add-icon.svg';
import { Link } from 'react-router-dom';

function ModuleSectionPage() {

    const moduleInfo = "Module 1a: Spelvisie en spelaanbod is geschreven ter ondersteuning van de kwalificatie Leidinggevende bevers, welpen, scouts. Op dit moment werkt dit als voorbeeld pagina voor de onderdelen per module. Spelvisie & Spelaanbod A & B komen voor nu beide hier terecht bij deel A."

    return (
        <>
            <div className='modulepage-container component-padding'>
                <div className='container'>
                    <div className='row bottom-spacer-3 g-0'>
                        <div className='col'>
                            <h2 className='modulepage-title'>Spelvisie & spelaanbod: Onderdeel A</h2>
                            <p className='modulepage-info'>{moduleInfo}</p>
                        </div>
                    </div>
                    <div className='row g-0'>
                        <div className='col d-flex justify-content-center'>
                            <h2 className='modulepage-title'>Kies je methode om te beginnen</h2>
                        </div>
                        <div className='row g-0'>
                            <div className='col-4 method-padding'>
                                <Link to={'/wip'} className='link-d'>
                                    <img className='progress-icon' src={VideoButton} alt=''></img>
                                    <h3>Video</h3>
                                </Link>
                            </div>
                            <div className='col-4 method-padding'>
                                <Link to={'/wip'} className='link-d'>
                                    <img className='progress-icon' src={TextButton} alt=''></img>
                                    <h3>Tekst</h3>
                                </Link>
                            </div>
                            <div className='col-4 method-padding'>
                                <Link to={'/wip'} className='link-d'>
                                    <img className='progress-icon' src={QuizButton} alt=''></img>
                                    <h3>Quiz</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={'/add-method'} className='link-d'>
                    <div className='add-method-button'>
                        <img className='progress-icon section' src={AddIcon} alt=''></img>
                    </div>
                </Link>

            </div>

        </>

    )
}

export default ModuleSectionPage
