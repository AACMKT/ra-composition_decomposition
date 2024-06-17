export const Searchfield = (props) => {
    const { text } = props

    return (
        <div className='searchfield'>
            <div className="input-group">
                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                <button type="button" className="btn btn-outline-secondary">Search</button>
            </div>
            <p className="searchfield-text">{ text }</p>
            { props.children }
        </div>
    )
}