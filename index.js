import{a as c,S as f,i}from"./assets/vendor-r3xvX9o-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function u(o){return c.get("https://pixabay.com/api/",{params:{key:"56280987-1afa6b4fe9ec70137831f4fea",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const n={formEl:document.querySelector(".js-form"),submitBtn:document.querySelector(".js-submit-btn"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},p=new f(".js-gallery a"),m=o=>{const t=o.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
    <img
    class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    /></a>
    <div class="info-img">
    <p class="info">
    <span class="info-label">Likes</span>
    <span class="info-value">${r.likes}</span>
    </p>
    <p class="info">
    <span class="info-label">Views</span> 
    <span class="info-value">${r.views}</span>
    </p>
    <p class="info">
    <span class="info-label">Comments</span> 
    <span class="info-value">${r.comments}</span>
    </p>
    <p class="info">
    <span class="info-label">Downloads</span> 
    <span class="info-value">${r.downloads}</span>
    </p>
    </div>
    </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",t),p.refresh()},d=()=>{n.gallery.innerHTML=""},y=()=>{n.loader.classList.add("is-visible")},g=()=>{n.loader.classList.remove("is-visible")};n.formEl.addEventListener("submit",o=>{o.preventDefault();const r=new FormData(n.formEl).get("search-text");r.trim()&&(d(),y(),setTimeout(()=>{u(r).then(a=>{const e=a.hits;return!e||e.length===0?(i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):e}).then(a=>{a.length&&m(a)}).catch(a=>{i.error({message:"Sorry, something went wrong. Please try again!"})}).finally(()=>g())},0),o.target.reset())});
//# sourceMappingURL=index.js.map
