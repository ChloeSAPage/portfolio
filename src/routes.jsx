import Root from "./components/Root/Root";
import Home from "./components/views/Home/Home";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
];

export default routes;
