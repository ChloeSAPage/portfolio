import Root from "./components/Root/Root";
import Home from "./components/Views/Home/Home";
import Showcase from "./components/Views/Showcase/Showcase";
import CV from "./components/Views/CV/CV";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "showcase",
                element: <Showcase />,
            },
            {
                path: "cv",
                element: <CV />,
            },
        ],
    },
];

export default routes;
