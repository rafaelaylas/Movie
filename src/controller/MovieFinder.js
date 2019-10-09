
class MovieFinder 
{
    createData(item,idArray) 
    {
        //console.log("entreCreate Data",idArray)
        console.log("item",item)
        const baseURLImg = "https://image.tmdb.org/t/p/w200";
        
        return {  
        
            id: idArray,
            imagen: `${baseURLImg}${item.poster_path}`,
            title: item.title,
            author: item.overview,    
            };
        
    }

    buscarEstrenos(okBusqueda)
    {
        //Parametros de conexion
        const url ="https://api.themoviedb.org/3/discover/movie?api_key=";
        const discover= "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
        const apiKEY="af158ebf42ce4f8e554bcd0ba82df8dc";

        const endpoint = `${url}${apiKEY}${discover}`;
            //console.log("Buscando",endpoint);
            fetch(endpoint
            ).then ((response) => {
                
                return response.json();
            }).then (responseData => {
                //console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.results;
                //console.log("Resultados",results);
                //Dar formato a los datos para mostrar en la grilla
                let pelisAMostrar=[];
                let i;
                for (i = 0; i < results.length; i++) 
                {
                    pelisAMostrar.push(this.createData(results[i],i));
                }
                //devuelvo respuesta
                okBusqueda(pelisAMostrar);              
            });
    }

    buscarTitulo(titulo,okBusqueda)
    {
     //Parametros de conexion
     const url ="https://api.themoviedb.org/3/search/movie?api_key=";
     const search= `${"&query="}${titulo}${"&page=1"}`;
     const apiKEY="af158ebf42ce4f8e554bcd0ba82df8dc";

     const endpoint = `${url}${apiKEY}${search}`;
         //console.log("Buscando",endpoint);
         fetch(endpoint
         ).then ((response) => {
             
             return response.json();
         }).then (responseData => {
             //console.log("respuesta bruta",responseData);
             //Obtengo resultados
             const results = responseData.results;
             //console.log("Resultados",results);
             //Dar formato a los datos para mostrar en la grilla
             let pelisAMostrar=[];
             let i;
             for (i = 0; i < results.length; i++) 
             {
                 pelisAMostrar.push(this.createData(results[i],i));
             }
             //devuelvo respuesta
             okBusqueda(pelisAMostrar);              
         });   
    }
}
export default new MovieFinder();