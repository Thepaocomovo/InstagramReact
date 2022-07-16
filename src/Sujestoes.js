const array = [];

function ArraySuggestion(props) {
    array.push(props);
    return ""
}

function GenerateSugestao() {
    const suggestion = array.map((suggestion) => <div className="sugestao">
        <div className="usuario">
            <img src={suggestion.IMG} alt="" />
            <div className="texto">
                <div className="nome">{suggestion.user}</div>
                <div className="razao">{suggestion.razao}</div>
            </div>
        </div>
        <div className="seguir">Seguir</div>
    </div>)
    return suggestion
}

function Sujestoes() {
    return <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        <ArraySuggestion IMG="./assets/img/bad.vibes.memes.svg" user="bad.vibes.memes" razao="Segue você" />
        <ArraySuggestion IMG="./assets/img/chibirdart.svg" user="chibirdart" razao="Segue você" />
        <ArraySuggestion IMG="./assets/img/razoesparaacreditar.svg" user="razoesparaacreditar" razao="Novo no Instagram" />
        <ArraySuggestion IMG="./assets/img/adorable_animals.svg" user="adorable_animals" razao="Segue você" />
        <ArraySuggestion IMG="./assets/img/smallcutecats.svg" user="smallcutecats" razao="Segue você" />
        <GenerateSugestao />
    </div>
}

export default Sujestoes;