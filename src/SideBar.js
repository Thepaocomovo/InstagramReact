import Sujestoes from './Sujestoes'

function SideBar() {
    return <div className="sidebar">
        <div className="usuario">
            <img src="./assets/img/catanacomics.svg" alt=""/>
            <div className="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>

        <Sujestoes/>

        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
}

export default SideBar;