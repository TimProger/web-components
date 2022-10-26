import Select from "./components/Select/index.js";

if (!customElements.get("new-select")) {
    customElements.define("new-select", Select);
}