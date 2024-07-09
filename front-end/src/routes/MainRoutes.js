import { lazy } from "react";

// project imports
import Loadable from "../componets/Loadable";
import AuthGuard from "../guard/authGuard";
import MenuLayout from "../menu";

const RecipeDefault = Loadable(lazy(() => import("../view/receipt")));

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MenuLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/home",
      element: <RecipeDefault />,
    },
  ],
};

export default MainRoutes;
