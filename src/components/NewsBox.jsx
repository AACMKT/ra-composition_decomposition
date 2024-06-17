export const NewsBox = (props) => {
    const { title, text } = props
    return (
        <div className="card-body">
            <h5 className="link">{ title }</h5>
            <p className="card-text">{ text }</p>
            { props.children }
        </div>
    )
}