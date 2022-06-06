const axios = require('axios')
let apiList = new Array('8ebe07e8374307d94841f37a4361b28d', '9b42b95b299741645f1c1db83e39d1da', '163ff004dcb77136a8d81c460ac5f9f6', '4a7e9f1897629886fac81cd3309d2ad8')
let apiKey = apiList[apiList.length - 1]
const _31days = new Array(1, 3, 5, 7, 8, 10, 12)
const api = axios.create({
    baseURL: 'https://api.openuv.io/api/v1',
    headers: {
        'x-access-token': apiKey,
    }
})

const lat = 'lat=-19.56398'
const lng = 'lng=-43.56290'
let dt = ''
dt = '&dt=2022-01-12'

function realTimeUV() {
    return api.get(`/uv?${lat}&${lng}${dt}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

function UVforecast(day, month) {
    dt = `&dt=2022-${month}-${day}`
    return api.get(`/forecast?${lat}&${lng}${dt}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err.response.data)
            return err
        })
}

async function app() {
    console.log(new Date().toLocaleString('pt-br'))
    let day = 29
    let month = 3
    console.log('UV,Data,Hora')
    // console.log(apiKey)
    for (let index = 0; index < 199; index++) {
        if (index == 50 || (index > 50 && index % 50 == 0)) {
            apiList.pop();
            apiKey = apiList[apiList.length - 1]
            // console.log(apiKey)
        }
        // let mediaIncidencia = 0
        console.log('DAY: '+day)
        const uvForecast = await UVforecast(day, month)
        //console.log('Cidade: Belo Horizonte\n')

        uvForecast.result.forEach(element => {
            indiceUV = element.uv
            // mediaIncidencia += element.uv
            dataHora = new Date(element.uv_time)
            console.log(`${indiceUV.toFixed(4)},${dataHora.toLocaleString('pt-br')}`)
        });
        // mediaIncidencia = mediaIncidencia / 24
        //console.log(`Média de incidência solar: ${mediaIncidencia}`)
        // console.log(`${day}/${month}`)
        day++
        if (month != 2) {
            if (day == 31 && !_31days.includes(month)) {
                day = 1
                month++
            }
            else if (day == 32 && _31days.includes(month)) {
                day = 1
                month++
            }
        }
        else {
            if (day == 29) {
                day = 1
                month++
            }
        }
    }
}

app()