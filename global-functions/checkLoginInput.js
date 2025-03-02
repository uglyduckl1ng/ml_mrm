const checkLoginInput = loginValue => {
  const login = loginValue || '';

  // Проверяем, что оба поля не пустые
  if (login.trim() !== '') {
    return true; // Если оба поля заполнены
  } else {
    return false; // Если хотя бы одно поле пустое
  }
};

export default checkLoginInput;
