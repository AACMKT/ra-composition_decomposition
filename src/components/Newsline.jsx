export const Newsline = ({ text, img= "" }) => {
    return (
        <div className='newsline'><img className="newsline_logo" src={ img } onError={ (e)=> e.target.src="./src/assets/dot_icon.svg"}></img><span>{ text }</span></div>
    )
}