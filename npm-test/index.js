const axios = require('axios')

const api = axios.create({
    baseURL: 'https://api.openuv.io/api/v1',
    headers: {
        'x-access-token' : '9b42b95b299741645f1c1db83e39d1da',
    }
})

function getUVRegion() {
    return api.get("/forecast?lat=-19.897480&lng=-43.962586&dt=2022-04-20")
    .then(res => {
            return res.data
        })
    .catch(err => {
        return err
    } )
}

async function app () {
    const uvRegion = await getUVRegion()


}

app()

