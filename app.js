Vue.component("encabezado", {
  template: ` <div> <h1>Tabla Pablo</h1> sds</div> `,
});
Vue.component("tabla", {
  template: ` <div> <table>
  <thead>
  <tr>
    <th v-for="(t, index) in titulos" :key>{{t}}</th>
  </thead>
  <tbody> <tr>  <td>Pablo</td> </tr> </tbody> </table> </div> `,
});
var app = new Vue({
  el: "#app",
  data() {
    return {
      titulos: ["Nombre", "Apellido", "Edad", "Telefono", "Correo"],
      datos: [
        {
          nombre: "Juan",
          apellido: "Perez",
          edad: 20,
          estado: "soltero",
          pais: "Cuba",
        },
        {
          nombre: "Pablo",
          apellido: "Bustos",
          edad: 36,
          estado: "casado",
          pais: "Ecuador",
        },
        {
          nombre: "Pedro",
          apellido: "López",
          edad: 40,
          estado: "soltero",
          pais: "Argnetina",
        },
      ],
    };
  },
});
