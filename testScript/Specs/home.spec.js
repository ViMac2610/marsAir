import { HomePage } from "../Pages/HomePage";

fixture `Home page`
    .page('https://marsair.recruiting.thoughtworks.net/ViMac');


test('Checking home page when clicking on logo', async () => {
        await HomePage.clickLogo();
    });