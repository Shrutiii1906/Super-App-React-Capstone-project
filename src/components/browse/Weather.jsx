import { useEffect, useState } from "react"
import "./Weather.module.css"
const Weather = ()=>{
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false)
    // console.log(weather)
    useEffect(()=>{
        const fetchWeather = async()=>{
            await fetch(`http://api.weatherapi.com/v1/current.json?key=f51a28068a1d4b11a5d133813231304&q=India&aqi=no`)
                .then(async(data)=>await data.json())
                .then((data)=>setWeather(data)) 
        }
        fetchWeather()
    },[])
    useEffect(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const twelveHourFormat = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const strTime = `${twelveHourFormat}:${formattedMinutes} ${ampm}`;
      setTime(strTime);
    }, [setTime]);
    
        useEffect(()=>{
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();
    
            const month=(mm<10)?`0${mm}`:mm;
            const date=(dd<10)? `0${dd}`:dd;
    
            const Curr = date + '-' + month + '-' + yyyy;
            setDate(Curr)
        },[setDate]);
    return (
      <div style={{width:"30vw",minHeight:"20vh",background:'#101744',borderRadius:"12px", marginTop:"5px"}}>
      <div style={{height:"7vh", background:"#FF4ADE", borderRadius:"12px", color:"white",display:"flex", justifyContent:"space-evenly", alignItems:"center", fontSize:"2rem"}}>
          <span>{date}</span>
          <span>{time}</span>
      </div>
      <div>
          {weather ?<div style={{display:"flex", color:"white", alignItems:"center", justifyContent:"space-evenly"}}> <div>
              <img alt="" src={weather.current.condition.icon} style={{width:"30px",height:"30px"}}/>
              <p>{weather.current.condition.text}</p>
          </div>
          <div>
             <p style={{marginBottom:"12px", fontSize:"24px",marginTop:"10px"}}><span>{weather.current.temp_c}</span>C</p>
              <p>{weather.current.pressure_mb} pressure</p>
          </div>
          <div>
              <p style={{marginBottom:"12px", fontSize:"24px", marginTop:"10px"}}>{weather.current.wind_kph} wind</p>
              <p>{weather.current.humidity} humidity</p>
          </div></div>:<></>}
        </div>
  </div>
    )
}

export default Weather