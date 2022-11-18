import imgMeme from './assets/troll-face.png'

export default function Header () {

    return (
        <header className="header">
            <img
                src={imgMeme}
                className="header--image"
            />

            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React project</h4>

        </header>
    )
}