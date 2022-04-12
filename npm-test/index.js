const axios = require('axios')
const apiKey = '8ebe07e8374307d94841f37a4361b28d'
//const apiKey = '9b42b95b299741645f1c1db83e39d1da'

const api = axios.create({
    baseURL: 'https://api.openuv.io/api/v1',
    headers: {
        'x-access-token' : apiKey,
    }
})

const lat = 'lat=-19.56398'
const lng = 'lng=-43.56290'
let dt = ''
dt = '&dt=2022-04-12'

function realTimeUV(){
    return api.get(`/uv?${lat}&${lng}${dt}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

function UVforecast() {
    return api.get(`/forecast?${lat}&${lng}${dt}`)
    .then(res => {
        return res.data
        })
    .catch(err => {
        return err
    } )
}

async function app () {
    let mediaIncidencia = 0
    const uvForecast = await UVforecast()
    console.log('Cidade: Belo Horizonte\n')
    uvForecast.result.forEach(element => {
        indiceUV = element.uv
        mediaIncidencia += element.uv
        dataHora = new Date(element.uv_time)        
        console.log(`Índice UV: ${indiceUV.toFixed(4)}\tData e Hora: ${dataHora.toLocaleString()}`)
    });
    mediaIncidencia = mediaIncidencia/24
    console.log(`Média de incidência solar: ${mediaIncidencia}`)

    // const rtUV = await realTimeUV()
    // console.log(rtUV)
}

app()

