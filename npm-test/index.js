const axios = require('axios')
//const apiKey = '8ebe07e8374307d94841f37a4361b28d'
//const apiKey = '9b42b95b299741645f1c1db83e39d1da'
//const apiKey = '163ff004dcb77136a8d81c460ac5f9f6'
const apiKey = '4a7e9f1897629886fac81cd3309d2ad8'

const api = axios.create({
    baseURL: 'https://api.openuv.io/api/v1',
    headers: {
        'x-access-token' : apiKey,
    }
})

const lat = 'lat=-19.56398'
const lng = 'lng=-43.56290'
let dt = ''
dt = '&dt=2022-01-12'

function realTimeUV(){
    return api.get(`/uv?${lat}&${lng}${dt}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

function UVforecast(day,month) {
    dt=`&dt=2022-${month}-${day}`
    return api.get(`/forecast?${lat}&${lng}${dt}`)
    .then(res => {
        return res.data
        })
    .catch(err => {
        return err
    } )
}

async function app () {
    let day = 12
    let month = 8
    console.log('UV,Data,Hora')
    for (let index = 0; index < 50; index++) {

        let mediaIncidencia = 0
        const uvForecast = await UVforecast(day,month)
        //console.log('Cidade: Belo Horizonte\n')
    
        uvForecast.result.forEach(element => {
            indiceUV = element.uv
            mediaIncidencia += element.uv
            dataHora = new Date(element.uv_time)        
            console.log(`${indiceUV.toFixed(4)},${dataHora.toLocaleString()}`)
        });
        mediaIncidencia = mediaIncidencia/24
        //console.log(`Média de incidência solar: ${mediaIncidencia}`)
        day++
        if(day == 32){
            day = 2
            month++
        }        
    }


    // const rtUV = await realTimeUV()
    // console.log(rtUV)
}

app()

