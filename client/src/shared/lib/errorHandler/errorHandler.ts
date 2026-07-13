export const errorHandler = (error) => {
    console.error('Login error:', error);

    // ✅ Извлекаем сообщение об ошибке из ответа сервера
    let errorMessage = 'Произошла ошибка при входе';

    if (error.response) {
        // Ошибка от сервера
        errorMessage = error.response.data?.message ||
            error.response.data?.error ||
            error.response.statusText ||
            errorMessage;
    } else if (error.request) {
        // Ошибка сети
        errorMessage = 'Нет соединения с сервером';
    } else if (error.message) {
        errorMessage = error.message;
    }

    // ✅ Возвращаем строку с ошибкой
    return errorMessage;
}
