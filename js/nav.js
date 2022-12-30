const $hamburguer = document.querySelector(".hamburguer");
const $menu = document.querySelector("#menu");
const $body = document.querySelector("body");
const $logo = document.querySelector("#logo");

export function showNav() {
  $hamburguer.addEventListener("click", () => {
    $hamburguer.classList.toggle("active");
    $menu.classList.toggle("active");
    $body.classList.toggle("nooverflow");
    const $itemList = $menu.querySelectorAll("a");
    $itemList.forEach((item) => {
      item.addEventListener("click", () => {
        $hamburguer.classList.remove("active");
        $menu.classList.remove("active");
        $body.classList.remove("nooverflow");
      });
    });
  });
}

export function closeNav() {
  document.addEventListener("click", function (e) {
    if (
      !document.getElementById("menu").contains(e.target) &&
      !document.getElementById("hamburguer").contains(e.target)
    ) {
      $hamburguer.classList.remove("active");
      $menu.classList.remove("active");
      $body.classList.remove("nooverflow");
    }
  });
}

export function topPage() {
  $logo.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
