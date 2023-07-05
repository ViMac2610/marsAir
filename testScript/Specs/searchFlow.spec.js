import { SearchPage } from "../Pages/SearchPage";

fixture `Search flow test cases`
    .page('https://marsair.recruiting.thoughtworks.net/ViMac');

test('On Home page, user can see availible seats when they search flight by inputing all valid data', async () => {
    await SearchPage.clickDeparting({depPosition: 1, month: 'July'});
    await SearchPage.clickReturning({returnPosition: 2, month: 'December'});
    await SearchPage.enterPromotionalCodes('AF3-FJK-418', {replaceText: true});
    await SearchPage.clickSubmit();
    await SearchPage.seeSearchResult('Promotional code AF3-FJK-418 used: 30% discount!');
});

test('On Home page, user can not see availible seats when they search flight by inputing invalid promotional code', async () => {
    await SearchPage.clickDeparting({depPosition: 1, month: 'July'});
    await SearchPage.clickReturning({returnPosition: 2, month: 'December'});
    await SearchPage.enterPromotionalCodes('AF3-FJK-410', {replaceText: true});
    await SearchPage.clickSubmit();
    await SearchPage.seeSearchResult('Sorry, code AF3-FJK-410 is not valid');
});

test('On Home page, user can not see availible seats when they input invalid return date', async () => {
    await SearchPage.clickDeparting({depPosition: 1, month: 'July'});
    await SearchPage.clickReturning({returnPosition: 1, month: 'July'});
    await SearchPage.enterPromotionalCodes('AF3-FJK-418', {replaceText: true});
    await SearchPage.clickSubmit();
    await SearchPage.seeSearchResult('Unfortunately, this schedule is not possible. Please try again.');
});

test('On Home page, user can not see availible seats when they do not input any data', async () => {
    await SearchPage.clickSubmit();
    await SearchPage.seeSearchResult('Sorry, there are no more seats available.');
});

test('Checking the back button', async () => {
    await SearchPage.clickDeparting({depPosition: 1, month: 'July'});
    await SearchPage.clickReturning({returnPosition: 1, month: 'July'});
    await SearchPage.enterPromotionalCodes('AF3-FJK-419', {replaceText: true});
    await SearchPage.clickSubmit();
    await SearchPage.clickBack();
})