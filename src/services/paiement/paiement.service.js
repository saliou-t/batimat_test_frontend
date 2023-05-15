const { default: Api } = require('../Api');

var user = JSON.parse(localStorage.getItem('user'))

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
//    alert(moyenPaiement)  
    Api()
    .post('/paiement/',{
        numero:generateRandomString(5),
        vente_id: vente_id,
        moyen_de_paiement: moyenPaiement,
        etat:"Enregistre"
    })
    .then(response => {
        console.log(response.status);
    })
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
  

const finalisePaiement = (paiement_id) => {
     
    Api()
    .patch('/paiement/'+paiement_id,{
        etat: "Termine"
    })
    .then(response => {
        console.log(response.status);
    })
}


module.exports = {getLisePaiementByUser, savePaiment, finalisePaiement}