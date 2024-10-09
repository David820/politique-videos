import { createSignal, lazy, Suspense } from "solid-js";
import { css } from "@emotion/css";

const VideoModal = lazy(() => import("../components/VideoModal")); 

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const Videos = () => {
  const [currentVideo, setCurrentVideo] = createSignal("");
  const [searchTerm, setSearchTerm] = createSignal("");
  const [debouncedSearch, setDebouncedSearch] = createSignal("");

  const debouncedSetSearch = debounce((value) => {
    setDebouncedSearch(value);
  }, 300); 

  const videos = [

    { title: "Création de l'État d'Israël", imgSrc: "https://img.youtube.com/vi/oOJvNxFiC4M/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/oOJvNxFiC4M?si=yrcRd90OBX3tGTkP&amp;controls=0" },

    { title: "Mossad : l'histoire secrète d'Israël", imgSrc: "https://img.youtube.com/vi/1EFr3Y7eQMA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/1EFr3Y7eQMA?si=5HLkJXf8R-RO6YAQ&amp;controls=0" },

    { title: "La face cachée du recyclage", imgSrc: "https://img.youtube.com/vi/Iv9icf-0wJ4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/Iv9icf-0wJ4?si=iL1JVMlgrqT72hOu&amp;controls=0" },

    { title: "Maastricht, 30 ans après", imgSrc: "https://img.youtube.com/vi/KlrIvPz5wDA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/KlrIvPz5wDA?si=3Wzq_TS4KpsahOau&amp;controls=0" },

    { title: "Services publics, cash investigation", imgSrc: "https://img.youtube.com/vi/PyiSyO5J0bc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/PyiSyO5J0bc?si=2MgV8YIBZJgfESL5&amp;controls=0" },

    { title: "L'épargne des Français : le scandale de l'argent caché", imgSrc: "https://img.youtube.com/vi/hpqhSsC6Suc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/hpqhSsC6Suc?si=HnpIF4W4NrKtI_8t&amp;controls=0" },

    { title: "Les enfants terrible de la gauche, parti socialiste", imgSrc: "https://img.youtube.com/vi/PDs9nmqQNkk/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/PDs9nmqQNkk?si=Yj2dWJNFLknyNWEw&amp;controls=0" },

    { title: "Un virus s'est-il échappé du Laboratoire P4 de Wuhan ", imgSrc: "https://img.youtube.com/vi/EYpgcOz2OWs/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/EYpgcOz2OWs?si=LCJEgGJU1VnesKo7&amp;controls=0" },

    { title: "L'Intérieur : Au coeur des crises", imgSrc: "https://img.youtube.com/vi/tTD9SAECPZ0/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/tTD9SAECPZ0?si=oGZuYNz7g6nxwx1S&amp;controls=0" },

    { title: "Poutine et les présidents français", imgSrc: "https://img.youtube.com/vi/DgTkt4pUBcs/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/DgTkt4pUBcs?si=yiIT5kLRW4ez-SEt&amp;controls=0" },

    { title: "Nucléaire, un fiasco français", imgSrc: "https://img.youtube.com/vi/bYGoGoJe89Y/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/bYGoGoJe89Y?si=efnUNc41HWv-ICnj&amp;controls=0" },

    { title: "Au cœur de la présidentielle", imgSrc: "https://img.youtube.com/vi/bySNCiODilE/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/bySNCiODilE?si=q2-VfTDxcEB4fDIZ&amp;controls=0" },

    { title: "Macron, en marche vers l élysée", imgSrc: "https://img.youtube.com/vi/xaCxgo5r_xE/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/xaCxgo5r_xE?si=_fzJSAz8uV0NBeJ4&amp;controls=0" },

    { title: "ena", imgSrc: "https://img.youtube.com/vi/gjv15p9IBNE/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/gjv15p9IBNE?si=miU2IHaYSuCs6tac&amp;controls=0" },

    { title: "Nos très chers députés : dans les coulisses de l'Assemblée nationale", imgSrc: "https://img.youtube.com/vi/c-9bfpoRA0U/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/c-9bfpoRA0U?si=XuSL_Rctq2PEWYs_&amp;controls=0" },

    { title: "Opération Rubicon : espionnage à l'échelle mondiale", imgSrc: "https://img.youtube.com/vi/Wm1Vk90tUKw/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/Wm1Vk90tUKw?si=4Uo8OsaO6b1adpgB&amp;controls=0" },

  ];

  const filteredVideos = () => {
    return videos.filter((video) =>
      video.title.toLowerCase().includes(debouncedSearch().toLowerCase())
    );
  };

  const resetSearch = () => {
    setSearchTerm("");
    setDebouncedSearch("");
  };

  const blockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const handleVideoClick = (url) => {
    setCurrentVideo(url);
    blockScroll();
  };

  const closeIframe = () => {
    setCurrentVideo("");
    enableScroll();
  };

  const buttonStyle = css`
    padding: 12px;
    border: 1px solid #555;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    color: #555;
    font-weight: 500;
    transition: 300ms;
    &:hover {
      transition: 200ms;
      border: 1px solid tomato;
      color: tomato;
    }
  `;

  return (
    <div>
      <div
        className={css`
          min-height: 100dvh;
          margin-top: 80px;
        `}
      >
        <div
          className={css`
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <input
            type="text"
            placeholder="Rechercher une vidéo"
            value={searchTerm()}
            onInput={(e) => {
              setSearchTerm(e.target.value);
              debouncedSetSearch(e.target.value);
            }}
            className={css`
              padding: 11px;
              width: 320px;
              margin-right: 16px;
              border: 1px solid #555;
              border-radius: 4px;
              outline: 0;
              font-size: 18px;
              &::placeholder {
                color: #999;
                font-size: 16px;
                letter-spacing: 1px;
                font-family: "Afacad Flux", sans-serif;
                font-weight: 300;
                font-style: italic;
              }
            `}
          />
          <button onClick={resetSearch} className={buttonStyle}>
            X
          </button>
        </div>

        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 32px;
            margin: 80px auto 120px;
            width: 100%;
            max-width: 960px;
          `}
        >
          {filteredVideos().length > 0 ? (
            filteredVideos().map((video) => (
              <img
                src={video.imgSrc}
                alt={video.title}
                title={video.title}
                width={200}
                loading="lazy" 
                className={css`
                  cursor: pointer;
                  transition: 300ms;
                  &:hover {
                    translate: 0 -6px;
                    scale: 1.05;
                    transition: 200ms;
                  }
                `}
                onClick={() => handleVideoClick(video.videoUrl)}
              />
            ))
          ) : (
            <p
              className={css`
                color: tomato;
                font-size: 24px;
                font-weight: 500;
              `}
            >
              Aucun résultat
            </p>
          )}
        </div>

        {currentVideo() && (
          <Suspense fallback={<div>Loading...</div>}>
            <VideoModal src={currentVideo()} onClose={closeIframe} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Videos;
