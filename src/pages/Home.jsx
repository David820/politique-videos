import { css } from "@emotion/css";
import imLdg from "../assets/img/ldgpge.webp";
import imCmp from "../assets/img/cmpnt.webp";

const Home = () => 

<div className={css`display:grid;place-items:center;height:83dvh;`}>
    <div className={css`
        width:100%;
        display:flex;
        justify-content:space-between;
    `}>
    
        <img src={imLdg} width={240} />
    
        <div className={css`
        width:100%;max-width:720px;display:flex;flex-direction:column;gap:24px;padding:0 16px;position:relative;
            h2{font-size:56px;line-height:1;}
            a{position:absolute;bottom:0;background:#68a0c1;padding:16px;color:white;}
        `}>
            <h2>Une sélection de reportages et documentaires captivants</h2>
            <p>Plongez au cœur des grands débats, des enjeux actuels, et des personnalités qui façonnent l'avenir de notre société.</p>
            <small> Tous nos contenus sont hébergés sur YouTube pour un accès rapide et facile.</small>
            <a href="/videos">Voir les vidéos</a>
        </div>

        <img src={imCmp} width={200} />
    
    </div>
</div>

export default Home;
