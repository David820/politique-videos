import { css } from "@emotion/css";
import imLdg from "../assets/img/ldgpge.webp";
import imCmp from "../assets/img/cpnt.webp";
import imChrom from "../assets/img/chrom.webp";
import imYtbe from "../assets/img/ytbe.webp";
import imGgle from "../assets/img/ggle.webp";

const Home = () => 

<div className={css`display:grid;place-items:center;height:83dvh;@media (width <= 1200px) {height:unset;}`}>
    <div className={css`
        width:100%;
        display:flex;
        justify-content:space-between;
        @media (width <= 1200px) {flex-direction:column;align-items:center;img{margin-top:56px;}}
    `}>
    
        <img className={css`@media (orientation:portrait) {width:clamp(300px,100%,400px);}`} src={imLdg} width={240} />
    
        <div className={css`
            width:clamp(300px,100%,720px);display:flex;flex-direction:column;gap:32px;padding:0 16px;position:relative;
            h2{font-size:48px;line-height:1;font-family:"Caprasimo";font-weight:100;}
            p{width:clamp(300px,100%,400px);}
            a{background:#68a0c1;padding:16px;color:white;}
            @media (width <= 1200px) {
            padding:0;
            h2{font-size:32px;margin-top:56px;text-align:left;}
            p{margin-bottom:16px;line-height:1.1;}
            a{align-self:left;}
            }
        `}>
            <h2>Une sélection de reportages et documentaires captivants</h2>
            <p>Plongez au cœur des grands débats, des enjeux actuels, et des personnalités qui façonnent l'avenir de notre société.</p>
            <div className={css`
                display:flex;
                align-items:flex-end;
                justify-content:space-between;
                gap:32px;
                position:absolute;
                bottom:0;
                width:100%;
                a{transition:300ms;min-width:fit-content;&:hover {translate:0 -4px;transition:200ms;}}
                @media (width <= 1200px) {position:unset;flex-direction:column;align-items:flex-start;}
                `}>
                <a href="/videos">Voir les vidéos</a>
            </div>
        </div>

        <aside className={css`position:absolute;top:16px;right:24px;display:flex;align-items:center;img:nth-of-type(3){margin-left:32px};@media (orientation: portrait) {top:32px;right:unset;
            img{width:32px};
            img:nth-of-type(2){margin-left:4px;width:28px;}
            img:nth-of-type(3){width:120px;}
        }`}>
        <img src={imGgle} width={40} />
        <img src={imChrom} width={35} />
        <img src={imYtbe} width={190} />
        </aside>

        <img className={css`@media (orientation:portrait) {width:clamp(300px,100%,400px);}`} src={imCmp} width={200} />
    
    </div>
</div>

export default Home;
