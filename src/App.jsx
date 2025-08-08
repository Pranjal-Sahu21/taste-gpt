import Header from "./Header"
import Main from "./MainContent"
import Footer from "./Footer"
import React from "react"

export default function App() {
    const [ingredientsCount, setIngredientsCount] = React.useState(0)

    return (
        <>
            <Header />
            <Main onIngredientsChange={setIngredientsCount} />
            <Footer 
                style={{ marginTop: ingredientsCount > 3 ? "40px" : "380px" }} 
            />
        </>
    )
}
