import type { RoutePage } from "./types"
import Home from "pages/Home/Home"
import History from "pages/History/History"
import PageNotFound from "pages/PageNotFound/PageNotFound"

export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "/history", element: <History /> },
  { path: "*", element: <PageNotFound /> },
  // { path: "*", element: "Page not found" },
]
