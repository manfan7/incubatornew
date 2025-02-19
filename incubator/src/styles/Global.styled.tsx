import {createGlobalStyle} from "styled-components";
import {MyTheme} from "./styles.tsx";


const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${MyTheme.colors.secondary}
    }
    
    `
export default  GlobalStyles