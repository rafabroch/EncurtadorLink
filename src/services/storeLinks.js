


//busca links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// salvar no local storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    //se ja tiver um link salvo não deixa duplicar
const hasLink = linksStored.some(link => link.id === newLink.id)

if(hasLink) {
    console.log("Link já existe na lista!")
    return;
}

//adicionar novo link

linksStored.push(newLink)
await localStorage.setItem(key, JSON.stringify(linksStored))
console.log("Link Salvo com Sucesso")

}


//deletar link do localStorage

export function deleteLink(Links, id) {
    let myLinks = Links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso")

    return myLinks;
}