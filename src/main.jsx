import { render } from 'preact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { User } from './user';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: async () => {
      const users = await fetch(`https://jsonplaceholder.typicode.com/users`);
      return users;
    },
    children: [
      {
        path: '/',
        element: <User />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const userId = url.searchParams.get('user');
          if (!userId) {
            const user = null;
            return user;
          } else {
            const user = await fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            return user;
          }
        },
      },
    ],
  },
]);

render(<RouterProvider router={router} />, document.getElementById('app'));
