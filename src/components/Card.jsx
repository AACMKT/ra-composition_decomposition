export const Card = (props) => {
    const { children, topContent }  = props
    return(
        <div className="card">
            <>{ topContent }</>
            { children }
        </div>
    )

}