class Consumo{
    constructor (potenciaPlaca, consumoMesAnterior, numeroPlacas) {
        this.tarifaKWh = 0.92065
        this.incidenciaSolar = 5.3
        this.potenciaPlaca = potenciaPlaca
        this.consumoMesAnterior = consumoMesAnterior
        this.numeroPlacas = numeroPlacas
    }

    producao(dias){
        return ((this.potenciaPlaca*this.incidenciaSolar*dias)/1000)*this.numeroPlacas
    }

    preco() {
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

relogio = new Consumo(100, 200, 10)
console.log(relogio.preco())