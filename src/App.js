import React from "react";
import "./styles.css";

class App extends React.Component {
 
constructor(props){
super(props);

   this.state={
    datos: null
   };
 }

      /* METODO PUST */

/* componentDidMount(){

const Request = {
  method: "POST",
  Headers: {"contend-type": "aplication/json"
},
  body: JSON.stringify({
    
    
    "id": 1000,
    "category": {
      "id": 1010,
      "name": "Perro"
    },
    "name": "luis",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
     
  })
 }; */


/*  METODO PUT */

 /* componentDidMount(){

  const Request = {
    method: "PUT",
    Headers: {"contend-type": "aplication/json"
  },
    body: JSON.stringify({
    
      "id": 1000,
      "category": {
        "id": 1010,
        "name": "Gato"
      },
      "name": "michu",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
       
    })
   };
    */

/* METODO GET */

   /* componentDidMount(){

    const Request = {
      method: "GET",
      Headers: {"contend-type": "aplication/json"
    },
      body: JSON.stringify({
      
        "id": 1000,
  "category": {
    "id": 1010,
    "name": "gato"
    },
    "name": "muñeca",
    "photoUrls": [
    "string"
    ],
     "tags": [
     {
      "id": 0,
      "name": "string"
        }
      ],
     "status": "available"
         
      })
     };
 */

/* METODO DELETE */

     componentDidMount(){

      const Request = {
        method: "DELETE",
        Headers: {"contend-type": "aplication/json"
      },
        body: JSON.stringify({
        
          "petId " : 1000 
           
        })
       };


fetch("https://petstore.swagger.io/v2/pet/michu", Request)
.then((res) =>res.json())
 .then((data) => this.setState({datos: data}))
  .catch((err)=> console.log(err))

 }

  render(){
   console.log(this.state.datos);
   return (
    <h1> Hola </h1>
   );
  }
}

export default App;