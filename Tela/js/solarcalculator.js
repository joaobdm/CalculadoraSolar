class Consumo{
    constructor (potenciaPlaca, consumoMesAnterior, numeroPlacas,incidenciaSolar) {
        this.tarifaKWh = 0.92065
        this.incidenciaSolar = incidenciaSolar
        this.potenciaPlaca = potenciaPlaca
        this.consumoMesAnterior = consumoMesAnterior
        this.numeroPlacas = numeroPlacas
    }

    producao(dias){
        return ((this.potenciaPlaca*this.incidenciaSolar*dias)/1000)*this.numeroPlacas
    }

    preco() {
        console.log('KW/h gerado no dia: '+this.producao(30))
        let calculo = (this.consumoMesAnterior - this.producao(30))*this.tarifaKWh
        let calculo2 = Math.round((calculo + Number.EPSILON) * 100) / 100
        if(calculo2 > 0){
            return "Você gastou R$ " + calculo2
        }
        else{

            return "Você gerou R$" + calculo2*-1
        }
    }
}

relogio = new Consumo(100, 200, 5, 2.47367)
console.log(relogio.preco())