import logger from "@/utils/logger";



export const setAppTheme = (theme: string) => {
    try {
        const htmlElement = document.documentElement;
        if (!htmlElement) {
            throw new Error('Element <html> not found');
        }
        htmlElement.setAttribute('data-bs-theme', theme);
        logger.debug('set theme "${theme}"');
    } catch (error) {
        console.error(`Failed to set theme "${theme}":`, error);
    }
};

export const getAppTheme = (): string | null => {
    try {
        const htmlElement = document.documentElement;
        if (!htmlElement) {
            throw new Error('Element <html> not found');
        }
        return htmlElement.getAttribute('data-bs-theme');
    } catch (error) {
        console.error('Failed to get current theme:', error);
        return null;
    }
};

export const toggleAppTheme = (): void => {
    try {
        const htmlElement = document.documentElement;
        if (!htmlElement) {
            throw new Error('Element <html> not found');
        }
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        logger.debug(`toggled theme to "${newTheme}"`);
    } catch (error) {
        console.error('Failed to toggle theme:', error);
    }
};