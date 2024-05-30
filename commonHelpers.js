import{S as c,i as n}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m="44054769-ac6c6ce91eaa06c7c2eb96b02",u="https://pixabay.com/api/?key=",d=o=>fetch(`${u}${m}&image_type=photo&orientation=horizontal&q=${o}&safesearch=true`).then(t=>{if(t.ok)return t.json();throw new Error(t.status)}),p=new c(".list-link"),f=(o,t)=>{const i=o.map(r=>`<li class="list-item">
            <a class="list-link" href="${r.largeImageURL}"><img class="list-img" src="${r.webformatURL}" data-original="${r.largeImageURL}" download></a>
            <ul class="list-statistic">
              <li>
                <span class="list-item-title">likes</span>
                <span class="list-item-number">${r.likes}</span>
              </li>
  
              <li>
                <span class="list-item-title">views</span>
                <span class="list-item-number">${r.views}</span>
              </li>
              <li>
                <span class="list-item-title">comments</span>
                <span class="list-item-number">${r.comments}</span>
              </li>
              <li>
                <span class="list-item-title">downloads</span>
                <span class="list-item-number">${r.downloads}</span>
              </li>
            </ul>
          </li>`).join("");t.insertAdjacentHTML("beforeend",i),p.refresh()},l={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.search.value.trim();if(t===""){n.error({message:"Please enter text to find something!",position:"topRight"});return}l.loader.classList.remove("is-hidden"),d(t).then(i=>{i.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.form.search.value="",l.gallery.innerHTML="",f(i.hits,l.gallery),l.loader.style.display="none"}).catch(i=>{console.error("Error fetching images:",i),n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),l.loader.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
