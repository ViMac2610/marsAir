import { Selector, t} from "testcafe";

export const SearchPage = {

    clickDeparting: async ( {depPosition = 0, monthDep = 'July'} = {} ) => {
        const departingDropDown = Selector("#departing");
        const depMonth = departingDropDown.withText(monthDep).child(depPosition);

        await t.click(departingDropDown);
        await t.click(depMonth, {speed: 0.2} );
    },

    clickReturning: async ( {returnPosition = 0, monthReturn = 'July'} = {} ) => {
        const returningDropDown = Selector("#returning");
        const returnMonth = returningDropDown.withText(monthReturn).child(returnPosition);

        await t.click(returningDropDown);
        await t.click(returnMonth, {speed: 0.2} );
    },

    clickSubmit: async () => {
        const searchBtn = Selector('input').withAttribute('type','submit');
        await t.click(searchBtn);
    },

    enterPromotionalCodes: async (promtionalCodes, {replaceText = false} = {}) => {
        const promotionalCodesField = Selector('input').withAttribute('type','text');
        await t.typeText(promotionalCodesField, promtionalCodes, { replace: replaceText});
    },

    seeSearchResult: async (message) => {
        const searchResult = Selector('#content');
        await t.expect(searchResult.innerText).contains(message);
    },

    clickBack: async () => {
        const backBtn = Selector('div').withText(' Back');
        const homePage = Selector('div').withText('Welcome to MarsAir!');

        await t.click(backBtn);
        await t.expect(homePage);
    }

}