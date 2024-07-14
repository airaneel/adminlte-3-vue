// Importing the logger utility for logging messages
import logger from "@/utils/logger";


/**
 * Function to determine the window size category based on its width.
 * @param windowWidth The current width of the window in pixels.
 * @returns A string representing the size category ('lg', 'md', 'sm', 'xs').
 */
export const calculateWindowSize = (windowWidth: number): string => {
    // Check if the window width is large enough for 'lg' size
    if (windowWidth >= 1200) {
        return 'lg';
    }
    // Check if the window width is large enough for 'md' size
    if (windowWidth >= 992) {
        return 'md';
    }
    // Check if the window width is large enough for 'sm' size
    if (windowWidth >= 768) {
        return 'sm';
    }
    // Default to 'xs' size if none of the above conditions are met
    return 'xs';
};

/**
 * Adds a CSS class to an HTML element with a specified ID.
 * @param className The CSS class name to add.
 * @param id The ID of the HTML element (defaults to 'app').
 */
export const addAppClass = (className: string, id = 'app-body') => {
    try {
        // Attempting to retrieve the element by its ID
        const appElement = document.getElementById(id);
        if (!appElement) {
            // Logging error and throwing exception if element is not found
            logger.error("Element not found");
            throw new Error('Element with id "app" not found');
        }
        // Adding the class to the element's class list
        appElement.classList.add(className);
        // Logging successful addition of class
        logger.info(`Added class "${className}" to the app element`);
    } catch (error) {
        // Logging to console if there's an error during the process
        console.error(`Failed to add class "${className}":`, error);
    }
};

/**
 * Removes a CSS class from an HTML element with a specified ID.
 * @param className The CSS class name to remove.
 * @param id The ID of the HTML element (defaults to 'app').
 */
export const removeAppClass = (className: string, id: string = 'app-body') => {
    try {
        // Attempting to retrieve the element by its ID
        const appElement = document.getElementById(id);
        if (!appElement) {
            // Throwing exception if the element is not found
            throw new Error('Element with id "app" not found');
        }
        // Removing the class from the element's class list
        appElement.classList.remove(className);
        // Logging successful removal of class
        logger.info(`Removed class "${className}" from the app element`);
    } catch (error) {
        // Logging errors to both logger and console
        logger.error(`Failed to remove class "${className}":`, error);
        console.error(`Failed to remove class "${className}":`, error);
    }
};
