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

    { title: "Russie, Chine, Iran : La revanche des empires", imgSrc: "https://img.youtube.com/vi/V0Q9oikAAQM/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/V0Q9oikAAQM?si=FZJvBW2UyV2rbAgA&amp;controls=0" },
    
    { title: "Création de l'État d'Israël", imgSrc: "https://img.youtube.com/vi/oOJvNxFiC4M/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/oOJvNxFiC4M?si=yrcRd90OBX3tGTkP&amp;controls=0" },
    
    { title: "La face cachée du recyclage", imgSrc: "https://img.youtube.com/vi/Iv9icf-0wJ4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/Iv9icf-0wJ4?si=iL1JVMlgrqT72hOu&amp;controls=0" },
    
    { title: "Maastricht, 30 ans après", imgSrc: "https://img.youtube.com/vi/KlrIvPz5wDA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/KlrIvPz5wDA?si=3Wzq_TS4KpsahOau&amp;controls=0" },
    
    { title: "Nicolas Sarkozy - Portrait d'un homme qui courait plus vite que son ombre", imgSrc: "https://img.youtube.com/vi/BTuPBlrSkqg/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/BTuPBlrSkqg?si=_vb2qNO_LQ_1Jopx&amp;controls=0" },
    
    { title: "Services publics, cash investigation", imgSrc: "https://img.youtube.com/vi/PyiSyO5J0bc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/PyiSyO5J0bc?si=2MgV8YIBZJgfESL5&amp;controls=0" },
    
    { title: "L'épargne des Français : le scandale de l'argent caché", imgSrc: "https://img.youtube.com/vi/hpqhSsC6Suc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/hpqhSsC6Suc?si=HnpIF4W4NrKtI_8t&amp;controls=0" },

    { title: "Le Système G, un documentaire incisif sur la politique Marseillaise", imgSrc: "https://img.youtube.com/vi/pIwJ-DZ3prA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/pIwJ-DZ3prA?si=WjVzeO_ZuYlG8OXt&amp;controls=0" },

    { title: "Gustave Eiffel a révolutionné la construction", imgSrc: "https://img.youtube.com/vi/4KzAPtrYe5U/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/4KzAPtrYe5U?si=78YUdw_8ItJr-K2F&amp;controls=0" },
    
    { title: "Les enfants terrible de la gauche, parti socialiste", imgSrc: "https://img.youtube.com/vi/PDs9nmqQNkk/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/PDs9nmqQNkk?si=Yj2dWJNFLknyNWEw&amp;controls=0" },
    
    { title: "La bombe atomique", imgSrc: "https://img.youtube.com/vi/62vWvzTlur0/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/62vWvzTlur0?si=eB8IkO8D8qiO4z8B&amp;controls=0" },

    { title: "Président de la république", imgSrc: "https://img.youtube.com/vi/Li8ha80JUec/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/Li8ha80JUec?si=wFOWDqvkwkb_qJHc&amp;controls=0" },
    
    { title: "Mossad : l'histoire secrète d'Israël", imgSrc: "https://img.youtube.com/vi/1EFr3Y7eQMA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/1EFr3Y7eQMA?si=5HLkJXf8R-RO6YAQ&amp;controls=0" },
    
    { title: "Qui profite de nos impôts ?", imgSrc: "https://img.youtube.com/vi/tpXF3W-RkUA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/tpXF3W-RkUA?si=MdmfVEnIwqS3qYgd&amp;controls=0" },
    
    { title: "Poutine et les présidents français", imgSrc: "https://img.youtube.com/vi/DgTkt4pUBcs/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/DgTkt4pUBcs?si=yiIT5kLRW4ez-SEt&amp;controls=0" },
    
    { title: "Les maîtres du monde : l'Europe face aux géants du numérique", imgSrc: "https://img.youtube.com/vi/XF1FJ-nptyc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/XF1FJ-nptyc?si=RjLEXiF_Fn5-9jcw&amp;controls=0" },
    
    { title: "Mitterrand et les secrets des gourous de l’Élysée", imgSrc: "https://img.youtube.com/vi/uzhizLoseBU/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/uzhizLoseBU?si=X6-Lp9Edp1rrERO_&amp;controls=0" },

    { title: "La fusion nucléaire, l'énergie du futur", imgSrc: "https://img.youtube.com/vi/Mf1mlRuGpqI/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/Mf1mlRuGpqI?si=3Yr-ee5KvRUDR3Yz&amp;controls=0" },

    { title: "Jacques Chirac, l'homme qui ne voulait pas être président", imgSrc: "https://img.youtube.com/vi/ZpqtDLZIR_Q/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/ZpqtDLZIR_Q?si=46I1orRFv_LPrrUV&amp;controls=0" },

    { title: "Nucléaire, un fiasco français", imgSrc: "https://img.youtube.com/vi/bYGoGoJe89Y/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/bYGoGoJe89Y?si=efnUNc41HWv-ICnj&amp;controls=0" },

    { title: "Au cœur de la présidentielle", imgSrc: "https://img.youtube.com/vi/bySNCiODilE/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/bySNCiODilE?si=q2-VfTDxcEB4fDIZ&amp;controls=0" },

    { title: "Macron, en marche vers l élysée", imgSrc: "https://img.youtube.com/vi/xaCxgo5r_xE/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/xaCxgo5r_xE?si=_fzJSAz8uV0NBeJ4&amp;controls=0" },

    { title: "ena", imgSrc: "https://img.youtube.com/vi/gjv15p9IBNE/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/gjv15p9IBNE?si=miU2IHaYSuCs6tac&amp;controls=0" },

    { title: "DSK, l'homme qui voulait tout", imgSrc: "https://img.youtube.com/vi/qh57qbryZMA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/qh57qbryZMA?si=_JCgRc3p-byf4Fkg&amp;controls=0" },

    { title: "Valéry Giscard d'Estaing, l'homme qui voulait être aimé", imgSrc: "https://img.youtube.com/vi/zQdEGOYNjeQ/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/zQdEGOYNjeQ?si=KcFAHw5N3JMwUezG&amp;controls=0" },

    { title: "Les coulisses de l'assemblée nationale", imgSrc: "https://img.youtube.com/vi/t7X22Ax1gRo/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/t7X22Ax1gRo?si=xmEOzM7RxACMZHPe&amp;controls=0" },

    { title: "La révolution verte des porte-conteneurs", imgSrc: "https://img.youtube.com/vi/1NxZMSonydw/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/1NxZMSonydw?si=of12gWp1U6wSG9Wz&amp;controls=0" },

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
    padding: 8px;
    cursor: pointer;
    font-size: 20px;
    color: #555;
    transition: 300ms;
    &:hover {
      transition: 200ms;
      background-color:#BBBBBB55;
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
              padding: 12px;
              width:100%;
              max-width: 320px;
              margin-right: 8px;
              border-radius: 4px;
              box-shadow: 1px 1px 8px #dbd3d2;
              outline: 0;
              font-size: 18px;
              &::placeholder {
                color: #555;
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

            @media (width <= 1200px) {margin: 56px 0 120px;}
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
                  
                  @media (width <= 1200px) {width:100%;max-width:400px;}
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
