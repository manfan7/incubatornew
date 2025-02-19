import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import GlobalStyles from "./styles/Global.styled.tsx";

import {StrictMode} from "react";

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <App />
      <GlobalStyles/>
</StrictMode>
)
