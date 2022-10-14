export const GET_CLIMA = 'GET_CLIMA'
export const ON_CLOSE = 'ON_CLOSE'
export const ON_FILTER = 'ON_FILTER'

export function onSearch(ciudad) {
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    return function (dispatch){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
          .then(r => r.json())
          .then((recurso) => {
            if(recurso.main !== undefined){
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
              };
              console.log(ciudad)
              return dispatch({
                type : GET_CLIMA,
                payload : ciudad
            })
            } else {
              alert("Ciudad no encontrada");
            }
          });
    }
  //Llamado a la API del clima
}