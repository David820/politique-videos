import { css } from "@emotion/css";
import imLdg from "../assets/img/ldgpge.webp";
import imCmp from "../assets/img/cmpnt.webp";
import imGglchrm from "../assets/img/chrom.webp";
import imYtbvdo from "../assets/img/ytb.webp";

const Home = () => 

<div className={css`display:grid;place-items:center;height:83dvh;@media (width <= 1200px) {height:unset;}`}>
    <div className={css`
        width:100%;
        display:flex;
        justify-content:space-between;
        @media (width <= 1200px) {flex-direction:column;align-items:center;img{margin-top:56px;}}
    `}>
    
        <img src={imLdg} width={240} />
    
        <div className={css`
            width:100%;max-width:720px;display:flex;flex-direction:column;gap:32px;padding:0 16px;position:relative;
            h2{font-size:48px;line-height:1;font-family:"Caprasimo";font-weight:100;}
            p{width:560px;}
            a{background:#68a0c1;padding:16px;color:white;}
            @media (width <= 1200px) {
            text-align:center;
            h2{font-size:32px;margin-top:56px;}
            p{width:100%;margin-bottom:16px;}
            a{align-self:center;}
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
                @media (width <= 1200px) {position:unset;flex-direction:column;align-items:flex-start;}
                `}>
                <a href="/videos">Voir les vidéos</a>
                <div className={css`
                    display:flex;
                    align-items:flex-end;
                    gap:16px;
                    translate: 0 5px;
                    @media (width <= 1200px) {align-items:center;justify-content:center;width:100%;}
                `}>
                    <img src={imGglchrm} width={40} alt="Google Chrome" />
                    <img src={imYtbvdo} width={152} alt="Youtube" />
                </div>
            </div>
        </div>

        <img src={imCmp} width={200} />
    
    </div>
</div>

export default Home;
