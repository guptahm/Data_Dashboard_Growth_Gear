
import react from "react";
import { createRoot } from "react-dom/client";
import ReactDOM  from "react-dom/client";
import App from "./src/App";

function First (){
    return (
        <>
        <App/>        
        </>
    )
}


const root= ReactDOM.createRoot( document.getElementById('root'));
root.render(<First/>);