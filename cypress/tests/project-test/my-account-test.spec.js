import { GeneralStep,generalStep } from "../../../test-data/steps/general-step";
import { textData,users } from "../../../test-data/data/testdata";
import { generalPage,GeneralPage } from "../../../test-data/pages/generalpage";
import { myAccountStep } from "../../../test-data/steps/my-account-step";
import { MyAccountPage,myAccountPage } from "../../../test-data/pages/my-account-page";

describe('Testing the My account page', () => {

  beforeEach(() => {
    let username = 'Katharina_Bernier';
    let rememberme= true;
    myAccountStep.signinAndOpenMyAccountWebpage(username,rememberme);
    myAccountStep.visit();
  })

  it('Check the form graphics and visibility', () => {
    myAccountStep.visit();
    myAccountStep.checkGraphics();
  })
})