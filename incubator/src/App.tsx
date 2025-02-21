import {useState} from 'react'
import {ThemeProvider} from "styled-components";
import './App.css'
import Study from "./StudyTest.tsx";
import {DarkTheme, LightTheme} from "./styles/styles.tsx";


function App() {
    const [count, setCount] = useState(0)
    const [content, setContent] = useState(true)
    const [theme, setTheme] = useState(LightTheme)
    const ThemeChanger = () => {
        setTheme(theme === LightTheme ? DarkTheme : LightTheme)

    }
    return (
        <>
            <ThemeProvider theme={theme}>
            <button onClick={() => {
                setContent(false)
            }}>Portfolio Test
            </button>
            <button onClick={() => setContent(true)}>Vite</button>
            <h1>Vite + React</h1>
            <button onClick={ThemeChanger}>Выбор темы(жми)</button>
            {content ? <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}

                </button>
'dev commit 1'
            </div> : <Study/>}
            </ThemeProvider>

        </>
    )
}

export default App
