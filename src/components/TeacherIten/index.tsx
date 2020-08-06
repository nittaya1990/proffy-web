import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/49327237?s=400&u=3b9ac2cb488cf243d35c0753001d1f7250f7f474&v=4" alt="Marcos Winicios"/>
                <div>
                    <strong>Marcos Winicios</strong>
                    <span>Química</span>
                </div>
                </header>

                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                    Apaixonado por explodir coisas em laboratório e por mudar a vidas as pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            
        </article>
    );
}

export default TeacherItem;