const showPassword = checkbox => {
  if (checkbox) {
    return false; // Если чекбокс отмечен, показываем пароль
  } else {
    return true; // Если чекбокс не отмечен, скрываем пароль
  }
};

export default showPassword;
