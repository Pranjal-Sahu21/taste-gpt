import tasteGptLogo from "./image.png"

export default function Header() {
    return (
        <header>
            <a href="/"><img src = {tasteGptLogo} alt="TasteGPT Logo" /></a>
            <a href="/"><h1>TasteGPT</h1></a>
        </header>
    )
}