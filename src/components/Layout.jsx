import { css } from "@emotion/css";

const Layout = (props) => (
    <div className={css`width:100%;max-width:1300px;padding:8px 24px;margin:0 auto;
      header{display:flex;align-items:center;justify-content:space-between;transition:400ms;a:hover{background-color:#EEE;transition:200ms;};nav>a{font-size:1.5rem;border:solid 1.5px currentColor;padding:0 8px;}}
      footer{display:flex;align-items:center;justify-content:space-between;font-size:1rem;}
      @media (width <= 1200px) {
      header{padding:16px;flex-direction:column;gap:24px;}
      footer{padding:16px;flex-direction:column;gap:24px;}
      }
      `}>
      <header>
        <h1 className={css`span:nth-of-type(1){color:#a04747;}span:nth-of-type(2){color:#3795bd;}`}>
          <a href="https://politiquefrance.fr/"><span>Politique</span> <span>France</span></a>
        </h1>
      </header>
      <main>{props.children}</main>
      <footer>©2024 Politique France</footer>
    </div>
  );
  
  export default Layout;
  