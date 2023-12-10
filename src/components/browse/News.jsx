import { useEffect, useState } from "react"
import "./News.module.css"
const apiKey =  process.env.apiKEY

const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    console.log(news)
    useEffect(()=>{
        const fetchNews = async()=>{
            await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27777a040f764ca1a0b555b78038af84`)  //data extract
                 .then(async(data)=>await data.json())   //data json format
                 .then((result)=>setNews(result.articles[2]))   //utilization
         }
         fetchNews();
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
      <>
        {news.length !== 0 ? (
          <div className="news">
            <div
              className="news__image__title"
              style={{
                backgroundImage: `url(${news[0].urlToImage})`,
                backgroundSize: "cover",
              }}
            >
              <h3>{news[0].title}</h3>
              <h3>
                {date} | {Curr}
              </h3>
            </div>
            <div className="news__description">
              <p>{news[0].description}</p>
            </div>
          </div>
        ) : (
          <div className="news_lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </>
    );
}

export default News