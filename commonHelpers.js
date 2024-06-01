import{a as y,S as L,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const b="44054769-ac6c6ce91eaa06c7c2eb96b02",w="https://pixabay.com/api/",f=async(s,e=1)=>{try{return(await y.get(w,{params:{key:b,image_type:"photo",orientation:"horizontal",q:s,safesearch:!0,page:e,per_page:15}})).data}catch(o){throw new Error(o.response.status)}},v=new L(".list-link"),g=(s,e)=>{const o=s.map(i=>`<li class="list-item">
            <a class="list-link" href="${i.largeImageURL}"><img class="list-img" src="${i.webformatURL}" data-original="${i.largeImageURL}" download></a>
            <ul class="list-statistic">
              <li>
                <span class="list-item-title">likes</span>
                <span class="list-item-number">${i.likes}</span>
              </li>
  
              <li>
                <span class="list-item-title">views</span>
                <span class="list-item-number">${i.views}</span>
              </li>
              <li>
                <span class="list-item-title">comments</span>
                <span class="list-item-number">${i.comments}</span>
              </li>
              <li>
                <span class="list-item-title">downloads</span>
                <span class="list-item-number">${i.downloads}</span>
              </li>
            </ul>
          </li>`).join("");e.insertAdjacentHTML("beforeend",o),v.refresh()},R=document.querySelector(".search-form"),p=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".load-more-btn");a.style.display="none";let l=1,u=1;const h=15;let d;R.addEventListener("submit",async s=>{if(s.preventDefault(),l=1,d=s.target.elements.search.value.trim(),!d)return c.error({message:"Search query cannot be empty.",position:"topRight"});n.classList.remove("is-hidden"),p.innerHTML="",setTimeout(async()=>{try{const e=await f(d,l,h);if(u=Math.ceil(e.totalHits/h),n.classList.add("is-hidden"),e.hits.length===0)return c.error({message:"No images found for your search query.",position:"topRight"});g(e.hits,p),l<u&&(a.style.display="block")}catch(e){c.error({message:`Error during fetching posts: ${e}`,position:"topRight"}),n.classList.add("is-hidden")}},1e3),s.currentTarget.reset()});a.addEventListener("click",()=>{l+=1,n.classList.remove("is-hidden"),setTimeout(async()=>{try{const s=await f(d,l,h);g(s.hits,p),n.classList.add("is-hidden"),l>=u?(a.style.display="none",c.info({message:"You've reached the end of search results.",position:"topRight"})):a.style.display="block";const e=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}catch(s){c.error({message:`Error during loading more images: ${s}`,position:"topRight"}),n.classList.add("is-hidden"),a.style.display="none"}},1e3)});
//# sourceMappingURL=commonHelpers.js.map
