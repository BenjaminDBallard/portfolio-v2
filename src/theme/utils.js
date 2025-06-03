export const createTheme = (baseTheme, accentTheme) => {
    const mergedAccent = {
        ...accentTheme,
        ...(baseTheme.overwriteAccent || {}),
    };

    return {
        ...baseTheme,
        accent: mergedAccent,
    };
};
