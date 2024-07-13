import logger from "@/utils/logger";

export const addAppClass = (className: string, id='app') => {
    try {
        let appElement = document.getElementById(id);
        if (!appElement) {
            logger.error("Element not found");
            throw new Error('Element with id "app" not found');
           
        }
        appElement.classList.add(className);
        logger.info(`Added class "${className}" to the app element`);
    } catch (error) {
        console.error(`Failed to add class "${className}":`, error);
    }
};

export const removeAppClass = (className: string, id?: string | 'app') => {
    try {
        let appElement = document.getElementById(id);
        if (!appElement) {
            throw new Error('Element with id "app" not found');
        }
        appElement.classList.remove(className);
        logger.info('remove class "${className}" from the app element');
    } catch (error) {
        logger.error(`Failed to remove class "${className}":`, error);
        console.error(`Failed to remove class "${className}":`, error);
    }
};