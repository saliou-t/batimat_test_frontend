const { default: Api } = require('../Api');

const getActualiteList = () => {
    let actualites = []
   
    Api()
    .get('/actualite')
    .then(response => {
        let data =  response.data;
        for (const actu in data) {
            actualites.push(data[actu])
        }
    })
    return actualites
}

module.exports = {getActualiteList}