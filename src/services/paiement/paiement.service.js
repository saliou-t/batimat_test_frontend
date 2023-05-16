const { default: Api } = require('../Api');

var user = JSON.parse(localStorage.getItem('user'))
const { default: router } = require('../../router'); 


const getLisePaiementByUser = () => {
    let paiements = []
   
    Api()
    .get('/user-paiement/'+user.id)
    .then(response => {
        let data =  response.data;
        for (const index in data) {
            paiements.push(data[index])
        }
    })
    return paiements
}

const savePaiment = (moyenPaiement, vente_id) => {
    Api()
    .post('/paiement',{
        numero:generateRandomString(5),
        vente_id: vente_id,
        moyen_de_paiment: moyenPaiement,
        etat:"Enregistre"
    })
    .then(response => {
        console.log(response.status);
    })
    
    router.push('/vente')
}


const saveTicket = (paiement_id, beneficiaire) => {
    Api()
    .post('/ticket/',{
        paiement_id:paiement_id,
        nom_complet_beneficiaire: beneficiaire.nomCompletBeneficiaire,
        numero_beneficiaire: beneficiaire.telephone,
        etat:"Enregistre"
    })
    .then(response => {
        console.log(response.status);
    })
    
    router.push('/vente')
}




const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const finalisePaiement = (vente) => {
    console.log(vente.paiement) 
    Api()
    .patch('/paiement/'+vente.paiement.id,{
        etat: "Termine"
    })
    .then(response => {
        console.log(response.status);
        router.push('/paiement')
    })
}


module.exports = {getLisePaiementByUser, savePaiment, finalisePaiement, generateRandomString, saveTicket}