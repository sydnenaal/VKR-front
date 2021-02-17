import React from "react";

import "./style.css";

/* preloader from https://loading.io/css/  */
function PreloaderPage() {
  return (
    <div class="preloader">
      <div>
        <p>Time Manager</p>
      </div>
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default PreloaderPage;
