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
  