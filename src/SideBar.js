import Sujestoes from './Sujestoes'

function User(props) {
    return <div className="usuario">
        <img src={props.IMG} alt="" />
        <div className="texto">
            <strong>{props.user}</strong>
            {props.text}
        </div>
    </div>
}

function SideBar() {
    return <div className="sidebar">
        
        <User IMG="./assets/img/catanacomics.svg" user="catanacomics" text="Catana" />
        <Sujestoes />

        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
}

export default SideBar;