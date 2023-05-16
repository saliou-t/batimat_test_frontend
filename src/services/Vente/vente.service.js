const { default: Api } = require('../Api');
const { savePaiment, generateRandomString } = require('../paiement/paiement.service');

var user = JSON.parse(localStorage.getItem('user'))

const getListeVentesNotPayedByUser = ()=> {
    let ventes = []
   
    Api()
    .get('/user-vente-non-payer/'+user.id)
    .then(response => {
        let data =  response.data.ventes;
        for (const index in data) {
            ventes.push(data[index])
        }

    })
    return ventes
}

const getAllUserVentes = ()=> {
    let ventes = []
   
    Api()
    .get('/user-all-ventes/'+user.id)
    .then(response => {
        let data =  response.data.ventes;
        for (const index in data) {
            ventes.push(data[index])
        }

    })
    return ventes
}

const getListeVentesPayedByUser = ()=> {
    let ventes = []
   
    Api()
    .get('/user-vente-payer/'+user.id)
    .then(response => {
        let data =  response.data.ventes;
        for (const index in data) {
            ventes.push(data[index])
        }

    })
    return ventes
}



const saveVente = (produits ,moyenPaiement) => {
    
    
    let montantTotal = 0

    for (const index in produits) {
       montantTotal += produits[index].sousTotal
    }
    
    Api()
    .post('/vente',{
        user_id: user.id,
        numero: generateRandomString(5),
        montant_total: montantTotal
    })
    .then(response => {
        savePaiment(moyenPaiement, response.data.vente.id )

        for (const index in produits) {
            saveLigneVente(produits[index], response.data.vente.id)   
        }
      
    })
}


const finaliseVente = (vente) => {
    console.log(vente);
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


module.exports = {getListeVentesNotPayedByUser, saveVente, saveLigneVente, finaliseVente, getListeVentesPayedByUser, getAllUserVentes}