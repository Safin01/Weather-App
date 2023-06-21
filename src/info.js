




async function weather(location){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4498ca2611a444cda4640249232106&q=${location}`,{mode:"cors"});
    const data = await response.json();
    return  data;
}

export default weather;