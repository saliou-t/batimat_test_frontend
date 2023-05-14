const { default: Api } = require('../Api');

const getListeVentes = () => {
    let ventes = []
   
    Api()
    .get('/vente')
    .then(response => {
        let data =  response.data;
        for (const item in data) {
            ventes.push(data[item])
        }
    })
    return ventes
}

const saveVente = (produits) => {
    
    let montantTotal = 0
    for (const item in produits) {
       montantTotal += produits[item].sousTotal
    }
    
    let user =JSON.parse(localStorage.getItem('user'))

    Api()
    .post('/vente',{
        user_id: user.id,
        montant_total: montantTotal,
        etat:"Enregistre",
    })
    .then(response => {
        // for (const produit in produits) {
            
        // }
        console.log(response.status)
    })
}


const saveLigneVente = (produit, vente_id) => {
    
    Api()
    .post('/ligneVente',{
        produit: produit.id,
        vente_id: vente_id,
    })
    .then(response => {
        console.log(response.status);
    })
}


module.exports = {getListeVentes, saveVente, saveLigneVente}