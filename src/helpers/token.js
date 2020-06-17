export const checkToken = () => {
  const NOW = Math.round((new Date()).getTime() / 1000);

  const cachedToken = JSON.parse(localStorage.getItem('tokenObj'));
  if (cachedToken && cachedToken.expiresAt > NOW) {
    localStorage.removeItem('tokenObj');
    return true;
  }
  return false;
};

export const setToken = token => {
  const NOW = Math.round((new Date()).getTime() / 1000);

  const tokenObj = {
    token,
    expiresAt: NOW + 86400,
  };

  localStorage.setItem('token', JSON.stringify(tokenObj));
};
