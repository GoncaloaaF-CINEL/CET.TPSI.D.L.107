import Btn from "./Btn.jsx";

const lista =  [
    {id:1,  nome: "GitHub", iconSvg: "github-icon", link: "https://github.com/vitejs/vite" },
    {id:2,  nome: "Discord", iconSvg: "discord-icon", link: "https://chat.vite.dev/" },
    {id:3,  nome: "X.com", iconSvg: "x-icon", link: "https://x.com/vite_js" },
    {id:4,  nome: "Bluesky", iconSvg: "bluesky-icon", link: "https://bsky.app/profile/vite.dev" },
]

export default function Social({titulo, description, icon}) {

    return (
        <>
            <div id="social">
                <svg className="icon" role="presentation" aria-hidden="true">
                    <use href={ `icons.svg#${ icon }` }></use>
                </svg>
                <h2> { titulo } </h2>
                <p>{ description }</p>
                <ul>

                    {lista.map(item => (
                        <Btn
                            key={ item.id }
                            item={ item }
                        />
                    ))
                    }

                </ul>
            </div>

        </>
    )

}