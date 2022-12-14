import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    #root,body,html{
        display:flex;
        flex-direction:column;
        align-items:center;
        overflow-y:scroll;
        scrollbar-width: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar{
            width:0;
            height:0;
        }
        color:var(--txtCard);
        scroll-behavior: smooth;

        --bgCard:${props=>props.theme.bgCard};
        --txtCard:${props=>props.theme.txtCard};
        --spnCard:${props=>props.theme.spnCard};
        --bgHeader:${props=>props.theme.bgHeader};
        --bgPages:${props=>props.theme.bgPages}

     
        }

        
   
`;