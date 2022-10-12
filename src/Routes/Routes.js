import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import TopicDetails from "../components/TopicDetails/TopicDetails";
import Topics from "../components/Topics/Topics";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'topics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>
            },
            {
                path: 'topic/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <TopicDetails></TopicDetails>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
]);