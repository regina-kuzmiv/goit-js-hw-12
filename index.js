import{a as L,S as v,i as c}from"./assets/vendor-CVWx-W0A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();async function p(o,t,e){return(await L.get("https://pixabay.com/api/",{params:{key:"56280987-1afa6b4fe9ec70137831f4fea",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:Math.max(15,e)}})).data}const a={formEl:document.querySelector(".js-form"),submitBtn:document.querySelector(".js-submit-btn"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loaderBtn:document.querySelector(".js-load-more-btn")},w=new v(".js-gallery a"),y=o=>{const t=o.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
    <img
    class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    /></a>
    <div class="info-img">
    <p class="info">
    <span class="info-label">Likes</span>
    <span class="info-value">${e.likes}</span>
    </p>
    <p class="info">
    <span class="info-label">Views</span> 
    <span class="info-value">${e.views}</span>
    </p>
    <p class="info">
    <span class="info-label">Comments</span> 
    <span class="info-value">${e.comments}</span>
    </p>
    <p class="info">
    <span class="info-label">Downloads</span> 
    <span class="info-value">${e.downloads}</span>
    </p>
    </div>
    </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",t),w.refresh()},S=()=>{a.gallery.innerHTML=""},g=()=>{a.loader.classList.add("is-visible")},h=()=>{a.loader.classList.remove("is-visible")},b=()=>{a.loaderBtn.classList.add("is-visible")},m=()=>{a.loaderBtn.classList.remove("is-visible")};let n=1;const d=15;let l="",i=0;a.formEl.addEventListener("submit",async o=>{if(o.preventDefault(),l=new FormData(a.formEl).get("search-text").trim(),!!l){n=1,i=0,S(),m(),g();try{const e=await p(l,n,d);if(i=e.totalHits,!e.hits.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),d*n<i&&b(),a.formEl.reset()}catch{c.error({message:"Sorry, something went wrong. Please try again!"})}finally{h()}}});a.loaderBtn.addEventListener("click",async()=>{n+=1,m(),g();try{const o=await p(l,n,d);y(o.hits),b();const t=document.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}n*d>=i&&(m(),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch{c.error({message:"Sorry, something went wrong. Please try again!"})}finally{h()}});
//# sourceMappingURL=index.js.map
