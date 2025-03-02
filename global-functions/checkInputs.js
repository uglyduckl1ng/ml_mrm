const checkInputs = (loginValue, passwordValue) => {
  const login = loginValue || '';
  const password = passwordValue || '';

  // Проверяем, что оба поля не пустые
  if (login.trim() !== '' && password.trim() !== '') {
    return true; // Если оба поля заполнены
  } else {
    return false; // Если хотя бы одно поле пустое
  }
};

export default checkInputs;
