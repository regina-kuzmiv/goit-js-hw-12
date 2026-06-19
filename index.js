import{a as b,S as L,i as d}from"./assets/vendor-CVWx-W0A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();async function p(a,t,e){return(await b.get("https://pixabay.com/api/",{params:{key:"56280987-1afa6b4fe9ec70137831f4fea",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:e}})).data}const o={formEl:document.querySelector(".js-form"),submitBtn:document.querySelector(".js-submit-btn"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loaderBtn:document.querySelector(".js-load-more-btn")},v=new L(".js-gallery a"),m=a=>{const t=a.map(e=>`<li class="gallery-item">
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
    </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",t),v.refresh()},w=()=>{o.gallery.innerHTML=""},y=()=>{o.loader.classList.add("is-visible")},g=()=>{o.loader.classList.remove("is-visible")},h=()=>{o.loaderBtn.classList.add("is-visible")},i=()=>{o.loaderBtn.classList.remove("is-visible")};let l=1;const c=15;let q="",u=0;o.formEl.addEventListener("submit",async a=>{a.preventDefault();const e=new FormData(o.formEl).get("search-text");if(e.trim()){l=1,w(),y();try{const n=await p(e,l,c);if(u=n.totalHits,!n.hits.length){d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}m(n.hits),l*c<u?h():i(),o.formEl.reset()}catch{i(),o.formEl.reset(),d.error({message:"Sorry, something went wrong. Please try again!"})}finally{g()}}});o.loaderBtn.addEventListener("click",async()=>{l+=1,i(),y();try{const a=await p(q,l,c);m(a.hits),h();const t=document.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}l*c>=u&&(i(),d.info({message:"We're sorry, but you've reached the end of search results."}))}catch(a){console.error(a)}finally{g()}});
//# sourceMappingURL=index.js.map
