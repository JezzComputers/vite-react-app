import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Projects from "./routes/Projects"
import Links from "./routes/Links"
import TodoItem from "./routes/TodoItem"

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/projects", element: <Projects /> },
    { path: "/links", element: <Links /> },
    { path: ":slug", element: <TodoItem /> }
  ])