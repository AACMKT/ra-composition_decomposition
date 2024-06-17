import reactLogo from './assets/react.svg'
import banner from "./assets/banner.jpg"
import play from "./assets/play.svg"
import sunnyWeather from "./assets/weather.svg"
import { Newsline } from './components/Newsline'
import { NewsBox } from './components/NewsBox'
import { Feed } from './components/Feed'
import { Searchfield } from './components/Searchfield'
import { LinksContainer } from './components/LinksContainer'
import { Card } from './components/Card'
import { Weather } from './components/Weather'
import{ data, data1, data2, data3 } from './data'
import './App.css'
import { Contentline } from './components/ContentLine'

function App() {

  return (
    <div className='content'>
   
      <section className='middle_section'>
      <div className="content-holder">
      <div className='content-box_main'>
      <LinksContainer data = { data1 } />
      <Feed>
        <Newsline text= { data3[0].text } img= { data3[0].icon }/>
        <Newsline text= { data3[1].text } img= { data3[1].icon }/>
        <Newsline text= { data3[3].text } img= { data3[2].icon }/>
      </Feed>
      </div>
      <div className='content-box_secondary'>
      <Card topContent ={ <img src={ reactLogo } style={ {width: "20%", margin: "auto"} } className="card-img-top" alt="React logo"/> }>
        <NewsBox title = { data.firstCard[0] } text = { data.firstCard[1] }/>
      </Card>
      </div>
      </div>
      <LinksContainer data = { data2 } newClass = "searchfield_navigator"/>
      <Searchfield text = { 'JUST ANOTHER BROWSER' }/>
      <img className="banner" src= { banner }/>
      <div className="content-holder">
      <Card>
        <Weather img= { sunnyWeather } now = { '23' } min = { '12' } max = { '27' }/>
      </Card>
      <Card>
        <NewsBox title = { "Most popular" }>
          <Contentline title= { 'Real esatate' } conTitle = { 'con-title' } text = { '- New districts' } conText = { 'card-text' }/>
          <Contentline title= { 'Market' } conTitle = { 'con-title' } text = { '- furniture' } conText = { 'card-text' }/>
          <Contentline title= { 'Cars' } conTitle = { 'con-title' } text = { '- all road vehicles' } conText = { 'card-text' }/>
        </NewsBox>
      </Card>
      <Card>
        <NewsBox title = { "What to watch?" }>
          <Newsline text= { "Equilibium" } img={ play }/>
          <Newsline text= { "Night in museum" } img={ play }/>
          <Newsline text= { "Solaris" } img={ play }/>
          <Newsline text= { "War and Peace" } img={ play }/>
        </NewsBox>
      </Card>
      </div>
      </section>

    </div>
  )
}

export default App
