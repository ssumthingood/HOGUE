import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    color:inherit;
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-size:14px;
    color:black;
    text-decoration:none;
}
`;

export default GlobalStyles;