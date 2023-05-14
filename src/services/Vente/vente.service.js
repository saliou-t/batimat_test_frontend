const { default: Api } = require('../Api');

const getListeVentes = () => {
    let ventes = []
   
    Api()
    .get('/vente')
    .then(response => {
        let data =  response.data;
        for (const index in data) {
            ventes.push(data[index])
        }
    })
    return ventes
}

const saveVente = (produits) => {
    
    let montantTotal = 0
    for (const index in produits) {
       montantTotal += produits[index].sousTotal
    }
    
    let user =JSON.parse(localStorage.getItem('user'))

    Api()
    .post('/vente',{
        user_id: user.id,
        montant_total: montantTotal,
        etat:"Enregistre",
    })
    .then(response => {
        for (const index in produits) {
            saveLigneVente(produits[index], response.data.vente.id)   
        }
    })
}


const saveLigneVente = (produit, vente_id) => {
// console.log(produit);
    Api()
    .post('/ligneVente',{
        produit_id:produit.id ,
        vente_id: vente_id,
        quantite: produit.quantite
    })
    .then(response => {
        console.log(response.status);
    })

}


module.exports = {getListeVentes, saveVente, saveLigneVente}