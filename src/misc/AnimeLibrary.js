import anime from 'animejs/lib/anime'

export const sidebarAni = () => {
  const el = document.querySelector(".SideBarRoot");
  const init = anime.get(el, "width", "px");
  const width = init > 0 ? [init, 0] : [0, "40%"];
  anime({
    targets: ".SideBarRoot",
    width,
    easing: "linear",
    duration: 200
  });
};
