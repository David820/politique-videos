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

  onCleanup(() => {
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
        background-color: #123;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      `}
    >
      <div
        className={css`
          width: clamp(340px,100%,880px);
          aspect-ratio: 16 / 9;
          background-color: #000;
          border:solid #000 2px;
          overflow: hidden;
        `}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className={css`
            position: absolute;
            top: 16px;
            color:#EDC;
            font-size:32px;
            right: 16px;
            padding: 8px;
            border: none;
            cursor: pointer;
            z-index: 99;
          `}
        >
          &times;
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
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
