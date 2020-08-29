const app = new Vue({
    el:'#app',
    data: {
        title:'Hola Mundo',
        frutas:[
            {
                nombre:'piña',
                cantidad: 10
            },
            {
                nombre:'guayaba',
                cantidad: 0
            },
            {
                nombre:'mango',
                cantidad: 10
            }
        ],
        nuevaFruta:'',
        totalCantidad: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: this.cantidadFruta
            })
            this.nuevaFruta = ''
        }
    },
    computed:{
        sumarFrutas () {
            this.totalCantidad = 0
            this.frutas.forEach(element => {
               console.log(element)
               this.totalCantidad = this.totalCantidad  + element.cantidad 
            });
            return this.totalCantidad;
        }
    }
})