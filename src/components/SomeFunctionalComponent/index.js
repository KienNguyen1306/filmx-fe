import { useDetectAdBlock } from "adblock-detect-react";
import "./adBlockDetected.css";
import Adblock from "../../assets/image/logo.a4adc14c.svg";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
const SomeFunctionalComponent = () => {
  const adBlockDetected = useDetectAdBlock();

  const [show, setShow] = useState(true);
  function handlereloadPage() {
    window.location.reload();
  }
  function handleClose() {
    setShow(false);
  }

  return (
    <>
      {show && (
        <div>
          {adBlockDetected && (
            <div className="adBlockDetected">
              <p className="close" onClick={handleClose}>
                <AiOutlineCloseSquare className="icon" />
              </p>
              <p>Vui lòng tắt trình chặn quảng cáo trước khi xem !</p>
              <p>Please turn off your ad blocker before watching !</p>
              <img src={Adblock} alt="Adblock" />
              <h2 className="btn-reload" onClick={handlereloadPage}>
                Reload the page
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SomeFunctionalComponent;
