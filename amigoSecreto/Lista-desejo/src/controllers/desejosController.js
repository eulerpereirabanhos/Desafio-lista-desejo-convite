const listaDesejos = [];

const adicionarItem = (req, res) => {
    const { item } = req.body;
    listaDesejos.push(item);
    res.status(201).send({ message: 'Item adicionado à lista de desejos', listaDesejos });
};

const removerItem = (req, res) => {
    const { item } = req.body;
    const index = listaDesejos.indexOf(item);
    if (index > -1) {
        listaDesejos.splice(index, 1);
        res.status(200).send({ message: 'Item removido da lista de desejos', listaDesejos });
    } else {
        res.status(404).send({ message: 'Item não encontrado na lista de desejos' });
    }
};

const mostrarItens = (req, res) => {
    res.status(200).send(listaDesejos);
};

module.exports = { adicionarItem, removerItem, mostrarItens };
