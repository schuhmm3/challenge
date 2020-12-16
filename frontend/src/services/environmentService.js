export const REACT_APP_API = "REACT_APP_API";

/**
 * Gets an environment variable value, using the right source
 *
 * @param {String} env_variable Environment variable name
 * @return {String} Environment variable value
 */
export const getEnvVariable = env_variable => {
    return typeof window._env_ !== "undefined"
        ? window._env_[env_variable]
        : process.env[env_variable];
};
