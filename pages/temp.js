   const name={props};
//   const API_URL = `https://api.api-ninjas.com/v1/planets?name= ${name}`

//  async function searchPlanet(){
//   const options={
//      headers:{
//       'X-Api-Key':'UYrtxdj/yHEsGj8u8hK1qg==MJBvJ33RumjZ4EJU',
    
//     }

//   }
  
//   const response =await fetch(`https://api.api-ninjas.com/v1/planets?name=${name}`,options);
//   const data = response.json();
//   console.log(data);
//  }

const [planets,setPalnets] = useState([])
useEffect(()=>{
    searchPlanet();
   },[])