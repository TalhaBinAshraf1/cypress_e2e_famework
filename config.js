module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', webpackPreprocessor);
            AllureWriter(on, config);
            return config;
        }
    }
});