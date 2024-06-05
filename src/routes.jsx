import Root from "./components/Root/Root";
import Home from "./components/views/Home/Home";
import Showcase from "./components/views/Showcase/Showcase";
import CV from "./components/views/CV/CV";

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
