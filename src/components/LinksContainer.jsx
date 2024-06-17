export const LinksContainer = ({ data, newClass="" } ) => {
    return (
        <div className={ `links-area ${ newClass }` }>
            {
                data.map(link => {
                    return (
                        <a key = { link.text } className = { `link ${ link.addClass }` } href = { link.href }>{ link.text }</a>
                    )
                })
            }

        </div>
    )
}