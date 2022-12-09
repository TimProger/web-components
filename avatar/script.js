import Avatar from "./components/Avatar/index.js";

if (!customElements.get("new-avatar")) {
  customElements.define("new-avatar", Avatar);
}