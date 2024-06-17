export const Contentline = ({ prefix = '', title, text, conTitle= "", conText = "" }) => {
    return (
        <div className='content-row'><div className={ prefix }>{ prefix }</div><span className={ conTitle }>{ title }</span><span className={ conText }>{ text }</span></div>
    )
}