export const Weather = (props) => {
    const { img, now, min, max } = props
    return (
        <>
        <h5 className="link">Wheather</h5>
        <div className= "weather-box">
            <img src={ img } style={ {width: "80px", margin: "left"} } className="card-img-top" alt="Weather"/>
            <div className= "weather-now">{ now }°</div>
            <div className= "weather-variatons">
                <p className= "weather-peack">min: { min }°</p>
                <p className= "weather-peack">max: { max }°</p>
            </div>
        </div>
        </>
    )
} 
