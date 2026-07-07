// ============================
// AFNSV GROOMING
// Premium Animation
// ============================

// Появление элементов при прокрутке

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".btn,.gallery,.photos img,h1,.subtitle")
.forEach(el=>observer.observe(el));

// ============================
// Увеличение фотографий
// ============================

const images=document.querySelectorAll(".photos img");

const overlay=document.createElement("div");

overlay.className="overlay";

overlay.innerHTML=`
<img>
`;

document.body.appendChild(overlay);

const overlayImg=overlay.querySelector("img");

images.forEach(img=>{

img.onclick=()=>{

overlay.classList.add("active");

overlayImg.src=img.src;

};

});

overlay.onclick=()=>{

overlay.classList.remove("active");

};

// ============================
// Небольшой параллакс логотипа
// ============================

const logo=document.querySelector(".logo");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*8;

const y=(e.clientY/window.innerHeight-.5)*8;

logo.style.transform=
`translate(${x}px,${y}px)`;

});

// ============================
// Подсветка кнопок
// ============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow=
"0 0 35px rgba(255,180,70,.35)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});
