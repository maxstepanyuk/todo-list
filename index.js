import{n as c}from"./assets/vendor-BY9c7rfI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={taskForm:document.querySelector(".task-form"),taskList:document.querySelector("#task-list")};function l({name:r,description:s,id:o}){return`
    <li class="task-list-item">
        <h3 class="task-list-title">${r} (id: ${o})</h3>
        <p class="task-list-description">${s}</p>
        <button class="task-list-delete-button" type="button">Delete</button>
    </li>
    `}function u(r){a.taskList.insertAdjacentHTML("afterend",r)}function d(r){r.preventDefault();const{taskName:s,taskDescription:o}=r.target.elements,i=s.value.trim(),e=o.value.trim();if(!i||!e){alert("not all fields are filled");return}const t={name:i,description:e,id:c()};u(l(t))}a.taskForm.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
