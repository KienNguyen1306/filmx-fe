import dayjs from "dayjs";

export function fetchVideoAsBlob(videoURL) {
    return new Promise((resolve, reject) => {
      fetch(videoURL)
        .then(response => {
          if (!response.ok) {
            reject(new Error(`Failed to fetch video: ${response.status} ${response.statusText}`));
            return;
          }
          return response.blob();
        })
        .then(blob => {
          resolve(blob);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
 export function createBlobURL(blob) {
    return URL.createObjectURL(blob);
  }
  


  export function formatDate(date) {
    return dayjs(date).format("DD/MM/YYYY"); // 08/08/2020
  }
  
  export function formatDate2Time(date) {
    return dayjs(date).locale("vi").fromNow(); // 3 năm trước
  }


 export function getBrowserType() {
    if (isOpera()) {
      return 'Opera';
    } else if (isEdge() || isEdgeChromium()) {
      return 'Microsoft Edge';
    } else if (isChrome()) {
      return 'Google Chrome';
    } else if (isFirefox()) {
      return 'Mozilla Firefox';
    } else if (isSafari()) {
      return 'Apple Safari';
    } else if (isInternetExplorer()) {
      return 'Microsoft Internet Explorer';
    } else if (isUCBrowser()) {
      return 'UC Browser';
    } else if (isSamsungBrowser()) {
      return 'Samsung browser';
    } else {
      return 'Unknown browser';
    }
  }
  
 
  function isOpera() {
    return (
      !!window.opr ||
      !!window.opera ||
      navigator.userAgent.toLowerCase().includes('opr/')
    );
  }
  
  function isFirefox() {
    return (
      navigator.userAgent.toLowerCase().includes('firefox') ||
      typeof InstallTrigger !== 'undefined'
    );
  }
  
  function isSafari() {
    return navigator.userAgent.toLowerCase().includes('safari');
  }
  
  function isInternetExplorer() {
    return false || !!document.documentMode;
  }
  
  function isEdge() {
    return !isInternetExplorer() && !!window.StyleMedia;
  }
  
  function isChrome() {
    const userAgent = navigator.userAgent.toLowerCase();
  
    return (
      userAgent.includes('chrome') ||
      userAgent.includes('chromium') ||
      userAgent.includes('crios')
    );
  }
  
  function isEdgeChromium() {
    return isChrome() && navigator.userAgent.includes('Edg');
  }
  
  function isUCBrowser() {
    return navigator.userAgent.toLowerCase().includes('ucbrowser');
  }
  
  function isSamsungBrowser() {
    return navigator.userAgent
      .toLowerCase()
      .includes('samsungbrowser');
  }