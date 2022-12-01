import AvatarCreator from "./components/index.js";


if (!customElements.get("avatar-creator")) {
    customElements.define("avatar-creator", AvatarCreator);
}