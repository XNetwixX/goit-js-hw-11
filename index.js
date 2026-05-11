import{a as d,S as m,i}from"./assets/vendor-BcwVMWFW.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="55813974-942b45b0343cd6217098dfac4",y="https://pixabay.com/api/";function h(o){return d.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const l=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${a}" alt="${e}" />
        </a>
        <div class="image-info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${s}</span></p>
          <p><b>Comments</b><span>${u}</span></p>
          <p><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){l.innerHTML=""}function S(){p.classList.add("is-active")}function q(){p.classList.remove("is-active")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query!",position:"topRight"});return}v(),S(),h(r).then(a=>{if(a.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(a)}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
