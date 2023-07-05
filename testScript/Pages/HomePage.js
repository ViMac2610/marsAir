import { Selector, t} from "testcafe";

export const HomePage = {
    clickLogo: async () => {
        const logoIcon = Selector('a').withAttribute('href','/ViMac');
        await t.click(logoIcon);
    }
}