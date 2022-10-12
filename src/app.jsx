import {
  Form,
  Outlet,
  useLoaderData,
  useNavigate,
  useSubmit,
} from 'react-router-dom';

export function App() {
  const users = useLoaderData();
  const submit = useSubmit();
  const navigate = useNavigate();
  return (
    <>
      <Form
        onChange={(event) => {
          const formdata = new FormData(event.currentTarget);
          if (formdata.get('user') === '') {
            navigate('/');
          } else {
            submit(event.currentTarget);
          }
        }}
      >
        <select name="user">
          <option value="">{'Select a user'}</option>
          {users.map((user) => {
            return (
              <option key={user.name} value={user.id}>
                {user.name}
              </option>
            );
          })}
          ;
        </select>
      </Form>
      <Outlet />
    </>
  );
}
