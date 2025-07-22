function useAuthentication() {
  const userKey = localStorage.getItem('userKey');
  const username = localStorage.getItem('username');
  const name = localStorage.getItem('name');
  const avatar = localStorage.getItem('avatar') || 'https://avatar.iran.liara.run/public';

  const isAuthenticated = !!userKey;

  const user = {
    key: userKey,
    name,
    username,
    avatar,
  }

  const logout = () => {
    localStorage.removeItem('userKey');
  };
  return { isAuthenticated, logout, user };
}

export default useAuthentication;
