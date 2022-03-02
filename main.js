// بسم الله

// randum background

let landding = document.querySelector(".landing");
let backgroundImageArr = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let backgroundTrue = true;
let randomBackInterval;
changeBackground();
let backgroundTrueLocal = localStorage.getItem("backgroundTrueChange");

if (backgroundTrueLocal != null) {
  document.querySelectorAll(".options_2 button").forEach((button) => {
    button.classList.remove("active");
  });
  if (backgroundTrueLocal == "true") {
    backgroundTrue = true;
    changeBackground();
    document.getElementById("yes").classList.add("active");
  } else {
    backgroundTrue = false;
    clearInterval(randomBackInterval);
    document.getElementById("no").classList.add("active");
  }
}
document.querySelectorAll(".options_2 button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".options_2 button").forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    if (button.dataset.background == "yes") {
      backgroundTrue = true;
      localStorage.setItem("backgroundTrueChange", backgroundTrue);
      changeBackground();
    } else {
      backgroundTrue = false;
      localStorage.setItem("backgroundTrueChange", backgroundTrue);
      clearInterval(randomBackInterval);
    }
  });
});

function changeBackground() {
  if (backgroundTrue === true) {
    randomBackInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * backgroundImageArr.length);
      landding.style.backgroundImage = `url("images/${backgroundImageArr[randomNumber]}")`;
    }, 5000);
  }
}

// -----menu-----
let openMenu = document.getElementById("open_menu");
let exiteMenu = document.getElementById("exiteMenu");
let ulMenu = document.getElementById("ulMenu");

openMenu.onclick = function () {
  this.style.opacity = "0";
  ulMenu.style.left = "0";
};
exiteMenu.onclick = function () {
  ulMenu.style.left = "-110%";
  openMenu.style.opacity = "1";
};

// ----header-----
let ulMenuLi = Array.from(document.querySelectorAll("#ulMenu > li"));
ulMenuLi.forEach((li) => {
  li.addEventListener("click", function () {
    ulMenuLi.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
  });
});

window.onscroll = function () {
  if (scrollY >= 300) {
    document.getElementById("header").style.cssText = `
    background-color: rgb(0 0 0 / 60%);
    `;
  } else {
    document.getElementById("header").style.cssText = `
    background-color: transparent;
    `;
  }
  if (scrollY >= document.getElementById("Feature").offsetTop - 50) {
    // ulMenuLi.forEach((li) => {
    //   li.classList.remove("active");
    // });
    // ulMenuLi[1].classList.add("active");
  } else if (scrollY <= document.getElementById("Feature").offsetTop) {
    // ulMenuLi.forEach((li) => {
    //   li.classList.remove("active");
    // });
    // ulMenuLi[0].classList.add("active");
  }
  let skills = document.getElementById("skills");
  if (scrollY >= skills.offsetTop + skills.offsetHeight - window.innerHeight) {
    document.querySelectorAll(".right .front").forEach((e) => {
      e.style.width = e.dataset.progress;
      e.classList.add("percentage");
    });
  } else {
    document.querySelectorAll(".right .front").forEach((e) => {
      e.style.width = "0";
      e.classList.remove("percentage");
    });
  }
  let gallery = document.querySelector(".gallery");
  if (
    scrollY >=
    gallery.offsetTop + 0.5 * gallery.offsetHeight - window.innerHeight
  ) {
    document.querySelectorAll(".gallery .gallery-box img").forEach((img) => {
      img.style.transform = `rotateY(0deg)`;
    });
  } else {
    document.querySelectorAll(".gallery .gallery-box img").forEach((img) => {
      img.style.transform = `rotateY(90deg)`;
    });
  }
  let timeLine = document.querySelector(".time-line");

  if (
    scrollY >
    timeLine.offsetTop + 0.5 * timeLine.offsetHeight - window.innerHeight
  ) {
    document.querySelectorAll(".time-line .content > div").forEach((divs) => {
      divs.style.transform = `rotateY(0)`;
    });
  } else {
    document.querySelectorAll(".time-line .content > div").forEach((divs) => {
      divs.style.transform = `rotateY(90deg)`;
    });
  }
  let OpenionArea = document.querySelector(".testimonials");
  if (
    scrollY >=
    OpenionArea.offsetTop + 0.5 * OpenionArea.offsetHeight - window.innerHeight
  ) {
    document.querySelector(".testimonials .inputs").style.cssText = `
      opacity: 1;
      transform: translateX(0);
    `;
    document.querySelector(".testimonials .outputs").style.cssText = `
      opacity: 1;
      transform: translateX(0);
    `;
  } else {
    document.querySelector(".testimonials .inputs").style.cssText = `
      opacity: 0;
      transform: translateX(-100px);
    `;
    document.querySelector(".testimonials .outputs").style.cssText = `
      opacity: 0;
      transform: translateX(100px);
    `;
  }
  // ------
  let contact = document.getElementById("contact");
  if (
    scrollY >=
    contact.offsetTop + 0.5 * contact.offsetHeight - window.innerHeight
  ) {
    document.querySelector(".contact .left").style.cssText = `
      opacity: 1;
      transform: translateX(0);
    `;
    document.querySelector(".contact .right").style.cssText = `
      opacity: 1;
      transform: translateX(0);
    `;
  } else {
    document.querySelector(".contact .left").style.cssText = `
      opacity: 0;
      transform: translateX(-100px);
    `;
    document.querySelector(".contact .right").style.cssText = `
      opacity: 0;
      transform: translateX(100px);
    `;
  }
};
// -----setting box-----

let colorLi = Array.from(document.querySelectorAll(".color-switch li"));

let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  colorLi.forEach((li) => {
    li.classList.remove("active");

    if (li.getAttribute("costumData") === mainColor) {
      li.classList.add("active");
    }
  });
}

let settingBox = document.querySelector(".setting-box");
let gearBtn = document.querySelector(".gear");
gearBtn.addEventListener("click", function () {
  settingBox.classList.toggle("opened");
});

colorLi.forEach((ele) => {
  ele.onclick = function () {
    let liColor = ele.getAttribute("costumData");

    localStorage.setItem("color_option", liColor);

    document.documentElement.style.setProperty("--main-color", liColor);

    colorLi.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
  };
});

// ---popup gallery--

let popupGallery = document.querySelectorAll(".gallery img");

popupGallery.forEach((img) => {
  img.addEventListener("click", function () {
    let popupOverlay = document.createElement("div");

    popupOverlay.className = "popup-overlay";

    document.body.appendChild(popupOverlay);

    let popupImgContainer = document.createElement("div");

    popupImgContainer.className = "popupImg";

    if (img.alt != "") {
      let imageHeader = document.createElement("h3");

      imageHeader.innerHTML = img.alt;

      popupImgContainer.appendChild(imageHeader);
    }

    let popupImg = document.createElement("img");

    popupImg.src = this.src;

    popupImgContainer.appendChild(popupImg);

    document.body.appendChild(popupImgContainer);

    let closeBtn = document.createElement("span");

    closeBtn.appendChild(document.createTextNode("x"));

    closeBtn.setAttribute("class", "popup-close-btn");

    popupImgContainer.appendChild(closeBtn);

    document.querySelector(".popup-close-btn").onclick = function () {
      popupImgContainer.remove();
      popupOverlay.remove();
    };
    document.querySelector(".popup-overlay").onclick = () => {
      popupImgContainer.remove();
      popupOverlay.remove();
    };
  });
});
// --------- add comments -------
let addComment = document.getElementById("addComment");

let outputs = document.getElementById("outputs");

if (localStorage.getItem("commentBox") != null) {
  outputs.innerHTML = localStorage.getItem("commentBox");
}

function addCommentFun() {
  let box = document.createElement("div");

  box.classList.add("box");

  let div = document.createElement("div");

  let imgArr = [
    "user01.svg",
    "user02.svg",
    "user03.svg",
    "user04.svg",
    "user05.svg",
  ];

  let img = document.createElement("img");

  img.src = `icones/${imgArr[Math.floor(Math.random() * imgArr.length)]}`;

  img.alt = "user";

  let h3 = document.createElement("h3");

  let p = document.createElement("p");

  // add content
  let userName = document.getElementById("name");

  let textArea = document.getElementById("textArea");

  h3.innerHTML = userName.value;

  p.innerHTML = textArea.value;

  // add

  if (userName.value != "" && textArea.value != "") {
    div.appendChild(img, h3);
    div.appendChild(h3);

    box.appendChild(div);

    box.appendChild(p);

    outputs.appendChild(box);

    textArea.value = "";

    userName.value = "";

    if (localStorage.commentBox != null) {
      localStorage.commentBox += box.outerHTML;
    } else {
      localStorage.commentBox = box.outerHTML;
    }
  } else if (userName.value == "") {
    userName.style.backgroundColor = "#ffd5d5";

    userName.setAttribute("placeholder", "please input your name");
  } else if (textArea.value == "") {
    textArea.style.backgroundColor = "#ffd5d5";
    textArea.setAttribute("placeholder", "please input your comment");
  }
  userName.addEventListener("focus", () => {
    userName.style.backgroundColor = "#fff";
  });
  textArea.addEventListener("focus", () => {
    textArea.style.backgroundColor = "#fff";
  });
}
// localStorage.clear()
addComment.addEventListener("click", addCommentFun);

// ------- bullets to scroll ------

let bullets = document.querySelectorAll(".buletts li");

bullets.forEach((bulett) => {
  bulett.onclick = function () {
    document
      .querySelector(this.getAttribute("data-toSection"))
      .scrollIntoView({ behavior: "smooth" });
  };
});
let checkBox = document.getElementById("checkbox");
checkBox.onclick = function () {
  if (checkBox.checked === true) {
    document.querySelector(".setting-box  .span-back").style.backgroundColor =
      "#999";
    document.querySelector(".buletts").style.display = "none";
  } else {
    document.querySelector(".setting-box  .span-back").style.backgroundColor =
      "var(--main-color)";
    document.querySelector(".buletts").style.display = "block";
  }
};

document.querySelector(".setting-box .reset").onclick = function () {
  localStorage.removeItem("backgroundTrueChange");
  localStorage.removeItem("color_option");
  window.location.reload();
};

//------ الحمد الله----
