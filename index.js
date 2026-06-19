import{a as v,S as L,i}from"./assets/vendor-CVWx-W0A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();async function p(o,t,e){return(await v.get("https://pixabay.com/api/",{params:{key:"56280987-1afa6b4fe9ec70137831f4fea",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:Math.max(15,e)}})).data}const a={formEl:document.querySelector(".js-form"),submitBtn:document.querySelector(".js-submit-btn"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loaderBtn:document.querySelector(".js-load-more-btn")},w=new L(".js-gallery a"),y=o=>{const t=o.map(e=>`<li class="gallery-item">
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
    </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",t),w.refresh()},S=()=>{a.gallery.innerHTML=""},g=()=>{a.loader.classList.add("is-visible")},h=()=>{a.loader.classList.remove("is-visible")},b=()=>{a.loaderBtn.classList.add("is-visible")},m=()=>{a.loaderBtn.classList.remove("is-visible")};let l=1;const f=15;let c="",d=0;a.formEl.addEventListener("submit",async o=>{if(o.preventDefault(),c=new FormData(a.formEl).get("search-text").trim(),!!c){l=1,d=0,S(),m(),g();try{const e=await p(c,l,f);if(d=e.totalHits,!e.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),f*l>=d?i.info({message:"We're sorry, but you've reached the end of search results."}):b(),a.formEl.reset()}catch{i.error({message:"Sorry, something went wrong. Please try again!"})}finally{h()}}});a.loaderBtn.addEventListener("click",async()=>{l+=1,m(),g();try{const o=await p(c,l,f);y(o.hits);const t=document.querySelector(".gallery-item");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}l*f>=d?(m(),i.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch{i.error({message:"Sorry, something went wrong. Please try again!"})}finally{h()}});
//# sourceMappingURL=index.js.map
