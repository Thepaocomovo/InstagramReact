const array = [];

function ArrayPosts(props) {
    array.push(props);
    console.log(array)
    return ""
}


function GeneratePost() {
    // props = {usuarioIMG  usuario  conteudoIMG curtidoIMG curtidoUser curtidoQTD}
    const posts = array.map((post) => <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={post.usuarioIMG} alt="" />
                {post.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={post.conteudoIMG} alt="" />
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={post.curtidoIMG} alt="" />
                <div className="texto">
                    Curtido por <strong>{post.curtidoUser}</strong> e <strong>outras {post.curtidoQTD} pessoas</strong>
                </div>
            </div>
        </div>
    </div>)
    return posts
}

function Posts() {
    return <div className="posts">
        <ArrayPosts usuarioIMG="./assets/img/meowed.svg" usuario="meowed" conteudoIMG="./assets/img/gato-telefone.svg" curtidoIMG="./assets/img/respondeai.svg" curtidoUser="respondeai" curtidoQTD="101.523" />
        <ArrayPosts usuarioIMG="/assets/img/barked.svg" usuario="barked" conteudoIMG="./assets/img/dog.svg" curtidoIMG="./assets/img/adorable_animals.svg" curtidoUser="adorable_animals" curtidoQTD="99.159" />
        <GeneratePost/>
    </div>
}

export default Posts;