import tasteGptLogo from "./image.png"

export default function Header() {
    return (
        <header>
            <img src = {tasteGptLogo} alt="TasteGPT Logo" />
            <h1>TasteGPT</h1>
        </header>
    )
}