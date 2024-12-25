import LogoutHeaderButton from "../components/logout-header-button";
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-logout-button",

  initialize() {
    withPluginApi("1.28.0", (api) => {
      if (api.getCurrentUser()) {
        api.headerIcons.add("logout", LogoutHeaderButton, { before: "auth" });
      }
    });
  },
};
