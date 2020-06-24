export const checkToken = () => {
  const NOW = Date.now();

  const cachedToken = JSON.parse(localStorage.getItem('tokenObj'));
  if (cachedToken && cachedToken.expiresAt < NOW) {
    localStorage.removeItem('tokenObj');
    return false;
  }
  if (!cachedToken) return false;
  return true;
};

export const saveToken = token => {
  const NOW = Date.now();

  const tokenObj = {
    token,
    expiresAt: NOW + 86400000,
  };

  localStorage.setItem('tokenObj', JSON.stringify(tokenObj));
};
