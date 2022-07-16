
// function Stories() {
//     const Stories = [{imagem: "assets/img/9gag.svg", usuario: "9gag"}, 
//                     {imagem: "assets/img/meowed.svg", usuario: "meowed"},
//                     {imagem: "assets/img/barked.svg", usuario: "barked"},
//                     {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
//                     {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
//                     {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
//                     {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
//                     {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}];

//     return <div className="story">
//         <div className="imagem">
//             <img src="assets/img/9gag.svg" alt=""/>
//         </div>
//         <div className="usuario">
//             9gag
//         </div>
//     </div>
// }

function Storys() {
    return <div className="stories">
        <div className="story">
            <div className="imagem">
                <img src="./assets/img/9gag.svg" alt=""/>
            </div>
            <div className="usuario">
                9gag
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/meowed.svg" alt=""/>
            </div>
            <div className="usuario">
                meowed
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/barked.svg" alt=""/>
            </div>
            <div className="usuario">
                barked
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/nathanwpylestrangeplanet.svg" alt=""/>
            </div>
            <div className="usuario">
                nathanwpylestrangeplanet
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/wawawicomics.svg" alt=""/>
            </div>
            <div className="usuario">
                wawawicomics
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/respondeai.svg" alt=""/>
            </div>
            <div className="usuario">
                respondeai
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/filomoderna.svg" alt=""/>
            </div>
            <div className="usuario">
                filomoderna
            </div>
        </div>

        <div className="story">
            <div className="imagem">
                <img src="./assets/img/memeriagourmet.svg" alt=""/>
            </div>
            <div className="usuario">
                memeriagourmet
            </div>
        </div>

        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
}

export default Storys;