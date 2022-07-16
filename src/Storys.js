
const array = [];

function ArrayStory(props) {
    array.push(props)
    return ""
}

function Story() {
    const story = array.map((story) => <div className="story">
        <div className="imagem">
            <img src={story.imagem} alt="" />
        </div>
        <div className="usuario">
            {story.usuario}
        </div>
    </div>)
    return story
}


function Storys() {
    return <div className="stories">
        <ArrayStory imagem="assets/img/9gag.svg" usuario="9gag" />
        <ArrayStory imagem="assets/img/meowed.svg" usuario="meowed" />
        <ArrayStory imagem="assets/img/barked.svg" usuario="barked" />
        <ArrayStory imagem="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
        <ArrayStory imagem="assets/img/wawawicomics.svg" usuario="wawawicomics" />
        <ArrayStory imagem="assets/img/respondeai.svg" usuario="respondeai" />
        <ArrayStory imagem="assets/img/filomoderna.svg" usuario="filomoderna" />
        <ArrayStory imagem="assets/img/memeriagourmet.svg" usuario="9memeriagourmet" />
        <Story/>
        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
}

export default Storys;