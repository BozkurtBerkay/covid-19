import './App.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';
import _ from 'lodash'

function App() {
   
  const [value, setValue] = useState({});

  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  useEffect(() => {
    getData()
    getTotalData()
  }, [])

  const getData = async () => {
    try {
      const {data} = await axios.get("https://corona.lmao.ninja/v2/countries/Turkey?yesterday=true&strict=true&query");
      console.log(data)
      setValue(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getTotalData = async () => {
   
  }
  
  return (
    <div className="App">
      { 
        !_.isEmpty(value) &&
      <div className="container"> 
          <h2>{value.country.toUpperCase()} GÜNLÜK KORONAVİRUS TABLOSU</h2>
          <section className="main">
              <div className="total-main">
                <div className="total-main-content">
                  <div className="total-main-text">
                  <p>Toplam</p>
                  <p>Test</p>
                  <p>Sayısı</p>
                  </div>
                  <p className="total-main-value">{value.tests}</p>
                </div> 
                <div className="total-main-content">
                  <div className="total-main-text">
                    <p>Toplam</p> 
                    <p>Vaka</p>
                    <p>Sayısı</p>
                  </div>
                  <p className="total-main-value">{value.cases}</p>
                </div> 
                <div className="total-main-content">
                 <div className="total-main-text">
                    <p>Toplam</p>
                    <p>Vefat</p> 
                    <p>Sayısı</p>
                 </div>
                  <p className="total-main-value">{value.deaths}</p>
                </div> 
                <div className="total-main-content">
                <div className="total-main-text">
                    <p>Hastalarda</p>
                    <p>Zatüre</p> 
                    <p>Oranı(%)</p>
                 </div>
                 <p className="total-main-value">3.8</p>
                </div> 
                <div className="total-main-content">
                  <div className="total-main-text">
                    <p>Ağır</p>
                    <p>Hasta</p> 
                    <p>Sayısı</p>
                 </div>
                  <p className="total-main-value">{value.critical}</p>
                </div> 
                <div className="total-main-content">
                <div className="total-main-text">
                    <p>İyileşen</p>
                    <p>Hasta</p> 
                    <p>Sayısı</p>
                 </div>
                 <p className="total-main-value">{value.recovered}</p>
                </div>
              </div>  
              <div className="date">
                    <h1>{new Date().getDate()-1}</h1>
                    <h3>{monthNames[new Date().getMonth()]}</h3>
                    <h3>{new Date().getFullYear()}</h3>
                </div>
              <div className="daily-main">
                <div className="daily-main-content">
                    <div className="daily-main-text">
                      <p>Aktif</p>
                      <p>Hasta</p>
                      <p>Sayısı</p>
                    </div>
                    <p className="daily-main-value">{value.active}</p>
                </div>
                <div className="daily-main-content dark">
                    <div className="daily-main-text">
                      <p>Bugünkü</p>
                      <p>Vaka</p>
                      <p>Sayısı</p>
                    </div>
                    <p className="daily-main-value">{value.todayCases}</p>
                </div>
                <div className="daily-main-content">
                    <div className="daily-main-text">
                      <p>Bugünkü</p>
                      <p>Vefat</p>
                      <p>Sayısı</p>
                    </div>
                    <p className="daily-main-value">{value.todayDeaths}</p>
                </div>
                <div className="daily-main-content dark">
                    <div className="daily-main-text">
                      <p>Bugünkü</p>
                      <p>İyileşen Hasta</p>
                      <p>Sayısı</p>
                    </div>
                    <p className="daily-main-value">{value.todayRecovered}</p>
                </div>
              </div>
          </section>
      
        </div>
        
      } 
     
    </div>
  );
}

export default App;
