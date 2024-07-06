import log from 'loglevel';

// Установка уровня логирования в зависимости от окружения
if (import.meta.env.MODE === 'production') {
    log.setLevel('warn'); // В продакшене логируем только предупреждения и ошибки
} else {
    log.setLevel('debug'); // В разработке логируем все
}

const logger = {
    debug: (message: string, ...args: any[]) => log.debug(message, ...args),
    info: (message: string, ...args: any[]) => log.info(message, ...args),
    warn: (message: string, ...args: any[]) => log.warn(message, ...args),
    error: (message: string, ...args: any[]) => log.error(message, ...args),
};

export default logger;

