import { apiInitializer } from "discourse-common/lib/api-initializers";
import LogoutHeaderButton from "../components/logout-header-button";

export default apiInitializer("1.28.0", (api) => {
  if (api.getCurrentUser()) {
    api.headerIcons.add("logout", LogoutHeaderButton, { before: "auth" });
  }
});
