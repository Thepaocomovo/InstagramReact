import React from "react";



const arrayPosts = [
    {
        usuarioIMG: "./assets/img/meowed.svg",
        usuario: "meowed",
        conteudoIMG: "./assets/img/gato-telefone.svg",
        curtidoIMG: "./assets/img/respondeai.svg",
        curtidoUser: "respondeai",
        curtidoQTD: 101523
    },
    {
        usuarioIMG: "/assets/img/barked.svg",
        usuario: "barked",
        conteudoIMG: "./assets/img/dog.svg",
        curtidoIMG: "./assets/img/adorable_animals.svg",
        curtidoUser: "adorable_animals",
        curtidoQTD: 99159
    }
]





function GeneratePost(props) {
    let curtidoQTD = (props.curtidoQTD)
    const [icon, setIcon] = React.useState("heart-outline");
    const [iconColor, setIconColor] = React.useState({ color: "#202124" });
    const [number, setNumber] = React.useState(curtidoQTD.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
    function Clique() {
        if (icon === "heart-outline") {
            setIcon("heart");
            setIconColor({ color: "red" });
            setNumber((curtidoQTD + 1).toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
        } else {
            setIcon("heart-outline");
            setIconColor({ color: "#202124" });
            setNumber((curtidoQTD).toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
        }
    }


    return <div className="post">
        <div className="topo">
            <div className="usuario" >
                <img src={props.usuarioIMG} alt="" />
                {props.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={props.conteudoIMG} alt="" onDoubleClick={() => (Clique())} />
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon style={iconColor} name={icon} onClick={() => (Clique())}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.curtidoIMG} alt="" />
                <div className="texto">
                    Curtido por <strong>{props.curtidoUser}</strong> e <strong>outras {number} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
}


function Posts() {
    return <div className="posts">

    <ArrayPosts/>

    </div>
}

export default Posts;

function ArrayPosts() {
    const post = arrayPosts.map((post) => < GeneratePost usuarioIMG={post.usuarioIMG}
        usuario={post.usuario}
        conteudoIMG={post.conteudoIMG}
        curtidoIMG={post.curtidoIMG}
        curtidoUser={post.curtidoUser}
        curtidoQTD={post.curtidoQTD} />)
    return post
}