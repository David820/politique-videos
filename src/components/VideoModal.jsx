import { onCleanup } from "solid-js";
import { css } from "@emotion/css";

const VideoModal = (props) => {
  const { src, onClose } = props;

  const blockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  onCleanup(() => {
    document.removeEventListener("keydown", handleKeyDown);
    enableScroll();
  });

  blockScroll();

  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
      `}
      onClick={onClose} 
    >
      <div
        className={css`
          width: 90%;
          max-width: 880px;
          aspect-ratio: 16 / 9;
          background-color: #000;
          border-radius: 8px;
          overflow: hidden;

          @media (max-width: 1200px) {
            width: 100%;
            max-width: 560px;
            aspect-ratio: 16 / 9;
          }

          @media (max-width: 600px) {
            max-width: 340px;
            aspect-ratio: 16 / 9;
          }
        `}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className={css`
            position: absolute;
            top: 16px;
            right: 16px;
            padding: 8px 12px;
            background-color: #FFFFFF99;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            z-index: 10;
            transition: background-color 0.3s;

            &:hover {background-color: #CCC;}
          `}
        >
          X
        </button>

        <iframe
          src={src}
          className={css`
            width: 100%;
            height: 100%;
            border: none;
          `}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
