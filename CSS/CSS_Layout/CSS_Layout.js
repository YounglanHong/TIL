class NavbarToggler extends HTMLButtonElement {
  connectedCallback() {
    this.setAttribute("aria-expanded", "false");
    this.removeAttribute("hidden");
    this.target.classList.add("hide");

    this.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    let classList = this.target.classList;
    if (classList.contains("hide")) {
      classList.remove("hide");
      this.setAttribute("aria-expanded", "true");
    } else {
      classList.add("hide");
      this.setAttribute("aria-expanded", "false");
    }
  }

  get target() {
    return document.querySelector(this.getAttribute("data-target"));
  }
}
customElements.define("navbar-toggler", NavbarToggler, { extends: "button" });
