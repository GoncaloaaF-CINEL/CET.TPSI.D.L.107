function Btn({item }){
    return (
        <>
            <li>
            <a href={ item.link } target="_blank">
                <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                >
                    <use href={ `/icons.svg#${item.iconSvg}` }></use>
                </svg>
                {item.nome}
            </a>

            </li>
        </>
    )
}

export default Btn