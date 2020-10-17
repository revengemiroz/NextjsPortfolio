import style from "styled-components";

export const Nav = style.nav`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');

   border:2px solid green;
   font-family: 'Raleway', sans-serif;
   color:#111111;
   padding:20px 10px;
   font-size:16px;
   font-weight:700;
   
   
   ul{
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
   overflow:hidden;
   }

   li{
      list-style:none;
   }

   li span{
      margin:0 20px;
   }
   `;
