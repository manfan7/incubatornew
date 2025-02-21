import {createGlobalStyle} from "styled-components";
import {MyTheme} from "./styles.tsx";


const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${MyTheme.colors.primary}
    }
    
    `
export default  GlobalStyles