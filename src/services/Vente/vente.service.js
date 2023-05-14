const { default: Api } = require('../Api');

const getListeVentes = () => {
    let ventes = []
   
    Api()
    .get('/vente')
    .then(response => {
        let data =  response.data;
        for (const actu in data) {
            ventes.push(data[actu])
        }
    })
    return ventes
}

const saveVente = () => {
    let ventes = []
   
    Api()
    .post('/vente',{
        indicateur_id: indicateur_table[key].id,
        activite_id: activite_id
    })
    .then(response => {
        let data =  response.data;
    })
    return ventes
}

module.exports = {getListeVentes}