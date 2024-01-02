describe('test', () => {
    fit('x', async () => {
        await driver.activateApp('io.ionic.starter');
        await driver.pause(5000);
        await driver.switchContext('WEBVIEW_io.ionic.starter');
        console.log('loaded 1');
        await $('body').waitForDisplayed();

        await driver.terminateApp('io.ionic.starter');
        await driver.pause(5000);

        await driver.activateApp('io.ionic.starter');
        await driver.pause(5000);
        await driver.switchContext('WEBVIEW_io.ionic.starter');
        const contexts = await Promise.resolve(driver.getContexts());
        console.log('loaded 2', contexts);
        await $('body').waitForDisplayed();
    });
})

