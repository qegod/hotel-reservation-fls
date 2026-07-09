export const classNames = (cls?: string, additional?: string[], mods?: Record<string, boolean>) => {
    let mainCls = cls || '';

    // Правильная обработка массива additional
    if (additional) {
        additional.forEach((className) => {
            if (className) {
                mainCls += ` ${className}`;
            }
        });
    }

    // Обработка модификаторов
    if (mods) {
        Object.entries(mods).forEach(([key, value]) => {
            if (value) {
                mainCls += ` ${key}`;
            }
        });
    }

    return mainCls.trim(); // Убираем лишние пробелы
};
