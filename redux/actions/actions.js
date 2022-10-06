import {
    country,
    languages,
    banks,
    billerCategory,
    billerType,
    billerPlan,
    airtime,
    airtimeNetwork,
    bills,
    internalBank,
    interBank,
    interBankEnquiry,
    balanceEnquiry,
    transactionHistory,
    transactionElevate,
    postBeneficiaries,
    getBeneficiaries,
    bulkTransfer,
    internationalTransfer,
    verifyBank,
    verifyCurrency,
    login,
    otp,
    compProfile,
    setupProfile,
    omnilite,
    accountNumber,
    existingUserProfile,
    ecobankOnline,
    createAccount,
    accountStatus,
    completeProfile,
    newUserCreateAccount,
    setTransactionPin,
    getNewUserAccount,
    states,
    cardLogin,
    businessCategories,
    newUserCreateCorpAccount,
    setupBusProfile,
    userProfile,
    accountPrimary,
    getUserBankAccounts,
    uploadIdDocType,
    uploadMemartType,
    uploadCacCertType,
    uploadScmulType,
    shareRefFormtype,
    uploadRefferenceFormType,
    uploadUtilityDocumentype,
    ussdGen,
    ussdStatus,
    forgotPasswordtype
} from '../types/actionTypes';
// import axiosInstance from '../helper/apiClient';
import apiRoutes from '../helper/apiRoutes';
import { getCookie, setCookie } from 'cookies-next';
import axios from 'axios';

var loginToken = '';
var Token;
var options = 1 / 24;

loginToken = getCookie('cookieToken', options);
if (loginToken === null) {
    Token = getCookie('cookieToken', options);
} else {
    Token = getCookie('cookieToken', options);
}

// export const getServerSideProps = async (context) => {
//     // Fetching de notre route
//     // API fetching
//     const res = getCookie('cookieToken', options);

//     const awaitToken = res;

//     return {
//         // Approvisionnement des props de notre page
//         // Sending articles to page
//         props: { token: awaitToken }
//     };
// };
const axiosInstance = axios.create({
    baseURL: 'https://ellevate-test.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`
    }
});
//uusdGen actions
export const ussdGenLoadStart = () => ({
    type: ussdGen.USSDGEN_LOAD_START
});

export const ussdGenLoadSuccess = (billers) => ({
    type: ussdGen.USSDGEN_LOAD_SUCCESS,
    payload: billers
});

export const ussdGenLoadError = (errorMessage) => ({
    type: ussdGen.USSDGEN_LOAD_ERROR,
    payload: errorMessage
});
export const loadussdGen = (code) => (dispatch) => {
    dispatch(ussdGenLoadStart());
    axiosInstance
        .get(`${apiRoutes.ussdGen}${code}`)
        .then((response) => dispatch(ussdGenLoadSuccess(response.data.data)))
        .catch((error) => dispatch(ussdGenLoadError(error.message)));
};
//uusdGen actions end

//uusdStatus actions
export const ussdStatusLoadStart = () => ({
    type: ussdStatus.USSDSTATUS_LOAD_START
});

export const ussdStatusLoadSuccess = (billers) => ({
    type: ussdStatus.USSDSTATUS_LOAD_SUCCESS,
    payload: billers
});

export const ussdStatusLoadError = (errorMessage) => ({
    type: ussdStatus.USSDSTATUS_LOAD_ERROR,
    payload: errorMessage
});
export const loadussdStatus = (code) => (dispatch) => {
    dispatch(ussdStatusLoadStart());
    axiosInstance
        .get(`${apiRoutes.ussdStatus}${code}`)
        .then((response) => dispatch(ussdStatusLoadSuccess(response.data.data)))
        .catch((error) => dispatch(ussdStatusLoadError(error.message)));
};
//uusdStatus actions end

//country actions
export const countryLoadStart = () => ({
    type: country.COUNTRY_LOAD_START
});

export const countryLoadSuccess = (countries) => ({
    type: country.COUNTRY_LOAD_SUCCESS,
    payload: countries
});

export const countryLoadError = (errorMessage) => ({
    type: country.COUNTRY_LOAD_ERROR,
    payload: errorMessage
});

export const loadCountry = () => (dispatch) => {
    dispatch(countryLoadStart());
    axiosInstance
        .get(`${apiRoutes.getCountries}`)
        .then((response) => dispatch(countryLoadSuccess(response.data.data)))
        .catch((error) =>
            dispatch(countryLoadError(error.response.data.message))
        );
};
//country actions end

//accountPrimary actions
export const accountPrimaryLoadStart = () => ({
    type: accountPrimary.ACCOUNTPRIMARY_LOAD_START
});

export const accountPrimaryLoadSuccess = (countries) => ({
    type: accountPrimary.ACCOUNTPRIMARY_LOAD_SUCCESS,
    payload: countries
});

export const accountPrimaryLoadError = (errorMessage) => ({
    type: accountPrimary.ACCOUNTPRIMARY_LOAD_ERROR,
    payload: errorMessage
});

export const loadAccountPrimary = () => (dispatch) => {
    dispatch(accountPrimaryLoadStart());
    axiosInstance
        .get(`${apiRoutes.accountPrimary}`)
        .then((response) => dispatch(accountPrimaryLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(accountPrimaryLoadError(error.response.data.message))
        );
};
//accountPrimary actions end

//profile actions
export const userProfileLoadStart = () => ({
    type: userProfile.USERPROFILE_LOAD_START
});

export const userProfileLoadSuccess = (userProfiles) => ({
    type: userProfile.USERPROFILE_LOAD_SUCCESS,
    payload: userProfiles
});

export const userProfileLoadError = (errorMessage) => ({
    type: userProfile.USERPROFILE_LOAD_ERROR,
    payload: errorMessage
});

export const loadUserProfile = () => (dispatch) => {
    dispatch(userProfileLoadStart());
    const cookie = getCookie('cookieToken');
    axiosInstance
        .get(`https://ellevate-test.herokuapp.com${apiRoutes.userProfile}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookie}`
            }
        })
        .then((response) => dispatch(userProfileLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(userProfileLoadError(error.response.data.message))
        );
};
//userprofile actions end

//businessCategories actions
export const businessCategoriesLoadStart = () => ({
    type: businessCategories.BUSINESSCATEGORIES_LOAD_START
});

export const businessCategoriesLoadSuccess = (countries) => ({
    type: businessCategories.BUSINESSCATEGORIES_LOAD_SUCCESS,
    payload: countries
});

export const businessCategoriesLoadError = (errorMessage) => ({
    type: businessCategories.BUSINESSCATEGORIES_LOAD_ERROR,
    payload: errorMessage
});

export const businessCategoriesData = () => (dispatch) => {
    dispatch(businessCategoriesLoadStart());
    axiosInstance
        .get(`${apiRoutes.businessCategories}`)
        .then((response) =>
            dispatch(businessCategoriesLoadSuccess(response.data.data))
        )
        .catch((error) =>
            dispatch(businessCategoriesLoadError(error.response.data.message))
        );
};
//businessCategories actions end

//states actions
export const statesLoadStart = () => ({
    type: states.STATES_LOAD_START
});

export const statesLoadSuccess = (countries) => ({
    type: states.STATES_LOAD_SUCCESS,
    payload: countries
});

export const statesLoadError = (errorMessage) => ({
    type: states.STATES_LOAD_ERROR,
    payload: errorMessage
});

export const statesData = () => (dispatch) => {
    dispatch(statesLoadStart());
    axiosInstance
        .get(`${apiRoutes.states}`)
        .then((response) => dispatch(statesLoadSuccess(response.data.data)))
        .catch((error) =>
            dispatch(statesLoadError(error.response.data.message))
        );
};
//states actions end

//banks actions
export const bankLoadStart = () => ({
    type: banks.BANK_LOAD_START
});

export const bankLoadSuccess = (countries) => ({
    type: banks.BANK_LOAD_SUCCESS,
    payload: countries
});

export const bankLoadError = (errorMessage) => ({
    type: banks.BANK_LOAD_ERROR,
    payload: errorMessage
});

export const loadbank = (code) => (dispatch) => {
    dispatch(bankLoadStart());
    axiosInstance
        .get(`${apiRoutes.getBanks}?affiliateCode=${code}`)
        .then((response) => dispatch(bankLoadSuccess(response.data.data)))
        .catch((error) => dispatch(bankLoadError(error.message)));
};
//banks actions end

//billerCategory actions
export const billerCategoryLoadStart = () => ({
    type: billerCategory.BILLERCATEGORY_LOAD_START
});

export const billerCategoryLoadSuccess = (biller) => ({
    type: billerCategory.BILLERCATEGORY_LOAD_SUCCESS,
    payload: biller
});

export const billerCategoryLoadError = (errorMessage) => ({
    type: billerCategory.BILLERCATEGORY_LOAD_ERROR,
    payload: errorMessage
});

export const loadbillerCategory = (code) => (dispatch) => {
    dispatch(billerCategoryLoadStart());
    axiosInstance
        .get(`${apiRoutes.getBillerCategories}?affiliateCode=${code}`)
        .then((response) =>
            dispatch(billerCategoryLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(billerCategoryLoadError(error.message)));
};
//billerCategory actions end

//country actions
export const billerTypeLoadStart = () => ({
    type: billerType.BILLERTYPE_LOAD_START
});

export const billerTypeLoadSuccess = (billers) => ({
    type: billerType.BILLERTYPE_LOAD_SUCCESS,
    payload: billers
});

export const billerTypeLoadError = (errorMessage) => ({
    type: billerType.BILLERTYPE_LOAD_ERROR,
    payload: errorMessage
});
export const loadbillerType = (category) => (dispatch) => {
    dispatch(billerTypeLoadStart());
    axiosInstance
        .get(`${apiRoutes.getBillerType}?category=${category}`)
        .then((response) => dispatch(billerTypeLoadSuccess(response.data.data)))
        .catch((error) => dispatch(billerTypeLoadError(error.message)));
};
//country actions end

//country actions
export const billerPlanLoadStart = () => ({
    type: billerPlan.BILLERPLAN_LOAD_START
});

export const billerPlanLoadSuccess = (billers) => ({
    type: billerPlan.BILLERPLAN_LOAD_SUCCESS,
    payload: billers
});

export const billerPlanLoadError = (errorMessage) => ({
    type: billerPlan.BILLERPLAN_LOAD_ERROR,
    payload: errorMessage
});
export const loadbillerPlan = (code) => (dispatch) => {
    dispatch(billerPlanLoadStart());
    axiosInstance
        .get(`${apiRoutes.getBillerPlan}${code}`)
        .then((response) => dispatch(billerPlanLoadSuccess(response.data.data)))
        .catch((error) => dispatch(billerPlanLoadError(error.message)));
};
//country actions end

//setTransactionPin actions
export const setTransactionPinLoadStart = () => ({
    type: setTransactionPin.SETTRANSACTIONPIN_LOAD_START
});

export const setTransactionPinLoadSuccess = (billers) => ({
    type: setTransactionPin.SETTRANSACTIONPIN_LOAD_SUCCESS,
    payload: billers
});

export const setTransactionPinLoadError = (errorMessage) => ({
    type: setTransactionPin.SETTRANSACTIONPIN_LOAD_ERROR,
    payload: errorMessage
});
export const loadsetTransactionPin = (code) => (dispatch) => {
    dispatch(setTransactionPinLoadStart());
    axiosInstance
        .post(`${apiRoutes.setTransactionPin}`, code)
        .then((response) =>
            dispatch(setTransactionPinLoadSuccess(response.data))
        )
        .catch((error) => dispatch(setTransactionPinLoadError(error.message)));
};
//setTransactionPin actions end

//languages action

export const languageLoadStart = () => ({
    type: languages.LANGUAGE_LOAD_START
});

export const languageLoadSuccess = (language) => ({
    type: languages.LANGUAGE_LOAD_SUCCESS,
    payload: language
});

export const languageLoadError = (errorMessage) => ({
    type: languages.LANGUAGE_LOAD_ERROR,
    payload: errorMessage
});
export const loadLanguageAsync = () => (dispatch) => {
    dispatch(languageLoadStart());
    axiosInstance
        .get(`${apiRoutes.getLanguages}`)
        .then((response) => dispatch(languageLoadSuccess(response.data.data)))
        .catch((error) => dispatch(languageLoadError(error.message)));
};

//languagex action end

//airtime action
export const airtimeLoadStart = () => ({
    type: airtime.AIRTIME_LOAD_START
});

export const airtimeLoadSuccess = (airtimes) => ({
    type: airtime.AIRTIME_LOAD_SUCCESS,
    payload: airtimes
});

export const airtimeLoadError = (errorMessageAirtime) => ({
    type: airtime.AIRTIME_LOAD_ERROR,
    payload: errorMessageAirtime
});
export const postAirtime = (data) => (dispatch) => {
    dispatch(airtimeLoadStart());
    axiosInstance
        .post(`${apiRoutes.airtime}`, data)
        .then((response) => dispatch(airtimeLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(airtimeLoadError(error.response.data.message))
        );
};

//airtime action end

//airtimeNetwork action
export const airtimeNetworkLoadStart = () => ({
    type: airtimeNetwork.AIRTIMENETWORK_LOAD_START
});

export const airtimeNetworkLoadSuccess = (airtimeNetworks) => ({
    type: airtimeNetwork.AIRTIMENETWORK_LOAD_SUCCESS,
    payload: airtimeNetworks
});

export const airtimeNetworkLoadError = (errorMessageAirtimeNetwork) => ({
    type: airtimeNetwork.AIRTIMENETWORK_LOAD_ERROR,
    payload: errorMessageAirtimeNetwork
});
export const postAirtimeNetwork = () => (dispatch) => {
    dispatch(airtimeNetworkLoadStart());
    axiosInstance
        .get(`${apiRoutes.airtimeNetwork}?affiliateCode=ENG`)
        .then((response) =>
            dispatch(airtimeNetworkLoadSuccess(response.data.data))
        )
        .catch((error) =>
            dispatch(airtimeNetworkLoadError(error.response.data.message))
        );
};

//airtimeNetwork action end

//bills action
export const billsLoadStart = () => ({
    type: bills.BILLS_LOAD_START
});

export const billsLoadSuccess = (bill) => ({
    type: bills.BILLS_LOAD_SUCCESS,
    payload: bill
});

export const billsLoadError = (errorMessageBills) => ({
    type: bills.BILLS_LOAD_ERROR,
    payload: errorMessageBills
});
export const postBills = (data) => (dispatch) => {
    dispatch(billsLoadStart());
    axiosInstance
        .post(`${apiRoutes.bills}`, data)
        .then((response) => dispatch(billsLoadSuccess(response.data.data)))
        .catch((error) =>
            dispatch(billsLoadError(error.response.data.message))
        );
};

//bills action end

//internalBank action
export const internalBankLoadStart = () => ({
    type: internalBank.INTERNALBANK_LOAD_START
});

export const internalBankLoadSuccess = (bill) => ({
    type: internalBank.INTERNALBANK_LOAD_SUCCESS,
    payload: bill
});

export const internalBankLoadError = (internalBankerror) => ({
    type: internalBank.INTERNALBANK_LOAD_ERROR,
    payload: internalBankerror
});
export const postInternalBank = (data) => (dispatch) => {
    dispatch(internalBankLoadStart());
    axiosInstance
        .post(`${apiRoutes.internalBank}`, data)
        .then((response) =>
            dispatch(internalBankLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(internalBankLoadError(error.message)));
};

//internalBank action end

//interBank action
export const interBankLoadStart = () => ({
    type: interBank.INTERBANK_LOAD_START
});

export const interBankLoadSuccess = (bill) => ({
    type: interBank.INTERBANK_LOAD_SUCCESS,
    payload: bill
});

export const interBankLoadError = (interBankerror) => ({
    type: interBank.INTERBANK_LOAD_ERROR,
    payload: interBankerror
});
export const postInterBank = (data) => (dispatch) => {
    dispatch(interBankLoadStart());
    axiosInstance
        .post(`${apiRoutes.interBank}`, data)
        .then((response) => dispatch(interBankLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(interBankLoadError(error.response.data.message))
        );
};

//interBank action end

//interBankEnquiry action
export const interBankEnquiryLoadStart = () => ({
    type: interBankEnquiry.INTERBANKENQUIRY_LOAD_START
});

export const interBankEnquiryLoadSuccess = (bill) => ({
    type: interBankEnquiry.INTERBANKENQUIRY_LOAD_SUCCESS,
    payload: bill
});

export const interBankEnquiryLoadError = (interBankEnquiryerror) => ({
    type: interBankEnquiry.INTERBANKENQUIRY_LOAD_ERROR,
    payload: interBankEnquiryerror
});
export const postInterBankEnquiry = (data) => (dispatch) => {
    dispatch(interBankEnquiryLoadStart());
    axiosInstance
        .post(`${apiRoutes.interBankEnquiry}`, data)
        .then((response) =>
            dispatch(interBankEnquiryLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(interBankEnquiryLoadError(error.message)));
};

//interBankEnquiry action end

//balanceEnquiry action
export const balanceEnquiryLoadStart = () => ({
    type: balanceEnquiry.BALANCEENQUIRY_LOAD_START
});

export const balanceEnquiryLoadSuccess = (bill) => ({
    type: balanceEnquiry.BALANCEENQUIRY_LOAD_SUCCESS,
    payload: bill
});

export const balanceEnquiryLoadError = (balanceEnquiryerror) => ({
    type: balanceEnquiry.BALANCEENQUIRY_LOAD_ERROR,
    payload: balanceEnquiryerror
});
export const getBalanceEnquiry = (data) => (dispatch) => {
    dispatch(balanceEnquiryLoadStart());
    axiosInstance
        .post(`${apiRoutes.balanceEnquiry}`, data)
        .then((response) =>
            dispatch(balanceEnquiryLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(balanceEnquiryLoadError(error.message)));
};

//balanceEnquiry action end

//transactionHistory action
export const transactionHistoryLoadStart = () => ({
    type: transactionHistory.TRANSACTIONHISTORY_LOAD_START
});

export const transactionHistoryLoadSuccess = (bill) => ({
    type: transactionHistory.TRANSACTIONHISTORY_LOAD_SUCCESS,
    payload: bill
});

export const transactionHistoryLoadError = (transactionHistoryerror) => ({
    type: transactionHistory.TRANSACTIONHISTORY_LOAD_ERROR,
    payload: transactionHistoryerror
});
export const getTransactionHistory = () => (dispatch) => {
    dispatch(transactionHistoryLoadStart());
    axiosInstance
        .get(`${apiRoutes.transactionHistory}`)
        .then((response) =>
            dispatch(transactionHistoryLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(transactionHistoryLoadError(error.message)));
};

//transactionHistory action end

//transactionElevate action
export const transactionElevateLoadStart = () => ({
    type: transactionElevate.TRANSACTIONELEVATE_LOAD_START
});

export const transactionElevateLoadSuccess = (bill) => ({
    type: transactionElevate.TRANSACTIONELEVATE_LOAD_SUCCESS,
    payload: bill
});

export const transactionElevateLoadError = (transactionElevateerror) => ({
    type: transactionElevate.TRANSACTIONELEVATE_LOAD_ERROR,
    payload: transactionElevateerror
});
export const getTransactionElevate = () => (dispatch) => {
    dispatch(transactionElevateLoadStart());
    axiosInstance
        .get(`${apiRoutes.transactionElevate}`)
        .then((response) =>
            dispatch(transactionElevateLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(transactionElevateLoadError(error.message)));
};

//transactionElevate action end

//transactionHistory action
export const bulkTransferLoadStart = () => ({
    type: bulkTransfer.BULKTRANSFER_LOAD_START
});

export const bulkTransferLoadSuccess = (bill) => ({
    type: bulkTransfer.BULKTRANSFER_LOAD_SUCCESS,
    payload: bill
});

export const bulkTransferLoadError = (bulkTransfererror) => ({
    type: bulkTransfer.BULKTRANSFER_LOAD_ERROR,
    payload: bulkTransfererror
});
export const getBulkTransfer = (data) => (dispatch) => {
    dispatch(bulkTransferLoadStart());
    axiosInstance
        .post(`${apiRoutes.bulkTransfer}`, data)
        .then((response) =>
            dispatch(bulkTransferLoadSuccess(response.data.data))
        )
        .catch((error) =>
            dispatch(bulkTransferLoadError(error.response.data.message))
        );
};

//transactionHistory action end

//internationalTransfer action
export const internationalTransferLoadStart = () => ({
    type: internationalTransfer.INTERNATIONALTRANSFER_LOAD_START
});

export const internationalTransferLoadSuccess = (bill) => ({
    type: internationalTransfer.INTERNATIONALTRANSFER_LOAD_SUCCESS,
    payload: bill
});

export const internationalTransferLoadError = (internationalTransfererror) => ({
    type: internationalTransfer.INTERNATIONALTRANSFER_LOAD_ERROR,
    payload: internationalTransfererror
});
export const getInternationalTransfer = (data) => (dispatch) => {
    dispatch(internationalTransferLoadStart());
    axiosInstance
        .post(`${apiRoutes.internationalTransfer}`, data)
        .then((response) =>
            dispatch(internationalTransferLoadSuccess(response.data.data))
        )
        .catch((error) =>
            dispatch(internationalTransferLoadError(error.message))
        );
};

//internationalTransfer action end

//verifyBank action
export const verifyBankLoadStart = () => ({
    type: verifyBank.VERIFYBANK_LOAD_START
});

export const verifyBankLoadSuccess = (bill) => ({
    type: verifyBank.VERIFYBANK_LOAD_SUCCESS,
    payload: bill
});

export const verifyBankLoadError = (verifyBankerror) => ({
    type: verifyBank.VERIFYBANK_LOAD_ERROR,
    payload: verifyBankerror
});
export const getverifyBank = (data) => (dispatch) => {
    dispatch(verifyBankLoadStart());
    axiosInstance
        .post(`${apiRoutes.verifyBank}`, data)
        .then((response) => dispatch(verifyBankLoadSuccess(response.data.data)))
        .catch((error) => dispatch(verifyBankLoadError(error.message)));
};

//verifyBank action end

//verifyCurrency action
export const verifyCurrencyLoadStart = () => ({
    type: verifyCurrency.VERIFYCURRENCY_LOAD_START
});

export const verifyCurrencyLoadSuccess = (bill) => ({
    type: verifyCurrency.VERIFYCURRENCY_LOAD_SUCCESS,
    payload: bill
});

export const verifyCurrencyLoadError = (verifyCurrencyerror) => ({
    type: verifyCurrency.VERIFYCURRENCY_LOAD_ERROR,
    payload: verifyCurrencyerror
});
export const getVerifyCurrency = (data) => (dispatch) => {
    dispatch(verifyCurrencyLoadStart());
    axiosInstance
        .post(`${apiRoutes.verifyCurrency}`, data)
        .then((response) =>
            dispatch(verifyCurrencyLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(verifyCurrencyLoadError(error.message)));
};

//verifyCurrency action end

//getBeneficiaries action
export const getBeneficiariesLoadStart = () => ({
    type: getBeneficiaries.GETBENEFICIARIES_LOAD_START
});

export const getBeneficiariesLoadSuccess = (bill) => ({
    type: getBeneficiaries.GETBENEFICIARIES_LOAD_SUCCESS,
    payload: bill
});

export const getBeneficiariesLoadError = (getBeneficiarieserror) => ({
    type: getBeneficiaries.GETBENEFICIARIES_LOAD_ERROR,
    payload: getBeneficiarieserror
});
export const getBeneficiariesData = () => (dispatch) => {
    dispatch(getBeneficiariesLoadStart());
    axiosInstance
        .get(`${apiRoutes.beneficiaries}`)
        .then((response) =>
            dispatch(getBeneficiariesLoadSuccess(response.data.data))
        )
        .catch((error) => dispatch(getBeneficiariesLoadError(error.message)));
};

//getBeneficiaries action end

//postBeneficiaries action
export const postBeneficiariesLoadStart = () => ({
    type: postBeneficiaries.POSTBENEFICIARIES_LOAD_START
});

export const postBeneficiariesLoadSuccess = (bill) => ({
    type: postBeneficiaries.POSTBENEFICIARIES_LOAD_SUCCESS,
    payload: bill
});

export const postBeneficiariesLoadError = (postBeneficiarieserror) => ({
    type: postBeneficiaries.POSTBENEFICIARIES_LOAD_ERROR,
    payload: postBeneficiarieserror
});
export const postBeneficiariesData = (data) => (dispatch) => {
    dispatch(postBeneficiariesLoadStart());
    axiosInstance
        .post(`${apiRoutes.beneficiaries}`, data)
        .then((response) =>
            dispatch(
                postBeneficiariesLoadSuccess(response.data.data.beneficiaries)
            )
        )
        .catch((error) => dispatch(postBeneficiariesLoadError(error.message)));
};

//postBeneficiaries action end

//omnilite action
export const omniliteLoadStart = () => ({
    type: omnilite.OMNILITE_LOAD_START
});

export const omniliteLoadSuccess = (omniliteData) => ({
    type: omnilite.OMNILITE_LOAD_SUCCESS,
    payload: omniliteData
});

export const omniliteLoadError = (errorMessage) => ({
    type: omnilite.OMNILITE_LOAD_ERROR,
    payload: errorMessage
});
export const omniliteDataa = (data) => (dispatch) => {
    dispatch(omniliteLoadStart());
    axiosInstance
        .post(`${apiRoutes.omnilite}`, data)
        .then((response) => dispatch(omniliteLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(omniliteLoadError(error.response.data.message))
        );
};

//omnilite action end

//ecobankOnline action
export const ecobankOnlineLoadStart = () => ({
    type: ecobankOnline.ECOBANKONLINE_LOAD_START
});

export const ecobankOnlineLoadSuccess = (bill) => ({
    type: ecobankOnline.ECOBANKONLINE_LOAD_SUCCESS,
    payload: bill
});

export const ecobankOnlineLoadError = (ecoOnlineErrorMessage) => ({
    type: ecobankOnline.ECOBANKONLINE_LOAD_ERROR,
    payload: ecoOnlineErrorMessage
});
export const ecobankOnlineData = (data) => (dispatch) => {
    dispatch(ecobankOnlineLoadStart());
    axiosInstance
        .post(`${apiRoutes.ecobankOnline}`, data)
        .then((response) => dispatch(ecobankOnlineLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(ecobankOnlineLoadError(error.response.data.message))
        );
};

//ecobankOnline action end

//accountNumber action
export const accountNumberLoadStart = () => ({
    type: accountNumber.ACCOUNTNUMBER_LOAD_START
});

export const accountNumberLoadSuccess = (accountNumbers) => ({
    type: accountNumber.ACCOUNTNUMBER_LOAD_SUCCESS,
    payload: accountNumbers
});

export const accountNumberLoadError = (errorMessages) => ({
    type: accountNumber.ACCOUNTNUMBER_LOAD_ERROR,
    payload: errorMessages
});
export const accountNumberData = (data) => (dispatch) => {
    dispatch(accountNumberLoadStart());
    axiosInstance
        .post(`${apiRoutes.accountNumber}`, data)
        .then((response) => dispatch(accountNumberLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(accountNumberLoadError(error.response.data.message))
        );
};

//accountNumber action end

//cardLogin action
export const cardLoginLoadStart = () => ({
    type: cardLogin.CARDLOGIN_LOAD_START
});

export const cardLoginLoadSuccess = (bill) => ({
    type: cardLogin.CARDLOGIN_LOAD_SUCCESS,
    payload: bill
});

export const cardLoginLoadError = (errorMessages) => ({
    type: cardLogin.CARDLOGIN_LOAD_ERROR,
    payload: errorMessages
});
export const cardLoginData = (data) => (dispatch) => {
    dispatch(cardLoginLoadStart());
    axiosInstance
        .post(`${apiRoutes.cardLogin}`, data)
        .then((response) => dispatch(cardLoginLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(cardLoginLoadError(error.response.data.message))
        );
};

//cardLogin action end

//existingUserProfile action
export const existingUserProfileLoadStart = () => ({
    type: existingUserProfile.EXISTINGUSERPROFILE_LOAD_START
});

export const existingUserProfileLoadSuccess = (existingUserProfilee) => ({
    type: existingUserProfile.EXISTINGUSERPROFILE_LOAD_SUCCESS,
    payload: existingUserProfilee
});

export const existingUserProfileLoadError = (errorMessage) => ({
    type: existingUserProfile.EXISTINGUSERPROFILE_LOAD_ERROR,
    payload: errorMessage
});
export const existingUserProfileData = (data) => (dispatch) => {
    dispatch(existingUserProfileLoadStart());
    axiosInstance
        .post(`${apiRoutes.existingUserProfile}`, data)
        .then((response) => {
            dispatch(existingUserProfileLoadSuccess(response));
            console.log(response.data.data.token);
            setCookie('existingToken', response.data.data.token);
        })
        .catch((error) => dispatch(existingUserProfileLoadError(error)));
};

//accountNumber action end

//createAccount action
export const createAccountLoadStart = () => ({
    type: createAccount.CREATEACCOUNT_LOAD_START
});

export const createAccountLoadSuccess = (bill) => ({
    type: createAccount.CREATEACCOUNT_LOAD_SUCCESS,
    payload: bill
});

export const createAccountLoadError = (errorData) => ({
    type: createAccount.CREATEACCOUNT_LOAD_ERROR,
    payload: errorData
});
export const createAccountData = (data) => (dispatch) => {
    dispatch(createAccountLoadStart());
    axiosInstance
        .post(`${apiRoutes.createAccount}`, data)
        .then((response) => dispatch(createAccountLoadSuccess(response.data)))
        .catch((error) =>
            dispatch(createAccountLoadError(error.response.data.message))
        );
};

//accountNumber action end

//accountStatus action
export const accountStatusLoadStart = () => ({
    type: accountStatus.ACCOUNTSTATUS_LOAD_START
});

export const accountStatusLoadSuccess = (bill) => ({
    type: accountStatus.ACCOUNTSTATUS_LOAD_SUCCESS,
    payload: bill
});

export const accountStatusLoadError = (errorMessages) => ({
    type: accountStatus.ACCOUNTSTATUS_LOAD_ERROR,
    payload: errorMessages
});
export const accountStatusData = (data) => (dispatch) => {
    dispatch(accountStatusLoadStart());
    axiosInstance
        .get(`${apiRoutes.accountStatus}/${data}`)
        .then((response) => {
            console.log(response);
            dispatch(accountStatusLoadSuccess(response));
        })
        .catch((error) =>
            dispatch(accountStatusLoadError(error.response.data.message))
        );
};

export const newAccountStatusLoadStart = () => ({
    type: accountStatus.ACCOUNTSTATUS_LOAD_START
});

export const newAccountStatusLoadSuccess = (accountStatus) => ({
    type: accountStatus.ACCOUNTSTATUS_LOAD_SUCCESS,
    payload: accountStatus
});

export const newAccountStatusLoadError = (errorMessages) => ({
    type: accountStatus.ACCOUNTSTATUS_LOAD_ERROR,
    payload: errorMessages
});
export const newAccountStatusData = () => (dispatch) => {
    const cookie = getCookie('cookieToken');
    // dispatch(accountStatusLoadStart());
    axiosInstance
        .get(`https://ellevate-test.herokuapp.com${apiRoutes.accountStatus}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookie}`
            }
        })
        .then((response) => {
            dispatch(accountStatusLoadSuccess(response.data));
            console.log(response.data.message);
        })
        .catch((error) =>
            dispatch(accountStatusLoadError(error.response.data.message))
        );
};

//accountNumber action end

//add user
export const userRegisterStart = (user) => ({
    type: login.REGISTER_SUCCESS,
    payload: user
});
export const userRegisterError = (errorMessage) => ({
    type: login.REGISTER_FAIL,
    payload: errorMessage
});
export const createUserAction = (postData) => {
    return (dispatch) => {
        axiosInstance
            .post(`${apiRoutes.register}`, postData)
            .then((response) => {
                console.log('data from action', response.data);
                dispatch(userRegisterStart(response.data.message));
            })
            .catch((error) => {
                dispatch(userRegisterError(error.response.data.message));
            });
    };
};
//add user end

//login User
export const userLoadStart = (errorMessages) => ({
    type: login.LOGIN_SUCCESS,
    payload: errorMessages
});
export const userLoadError = (errorMessages) => ({
    type: login.LOGIN_FAIL,
    payload: errorMessages
});

export const loginUserAction = (loginData) => {
    return (dispatch) => {
        axiosInstance
            .post(`${apiRoutes.login}`, loginData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem(
                    'token',
                    JSON.stringify(response.data.data.token)
                );
                console.log(response.data);
                localStorage.setItem(
                    'user',
                    JSON.stringify(response.data.data.user)
                );

                setCookie('cookieToken', response.data.data.token, 1 / 24);
                dispatch(userLoadStart(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(userLoadError(error.response.data.message));
            });
    };
};

// const getConfig = () => {
//     try {
//         let token = localStorage.getItem('token');
//         console.log(token);
//         return {
//             headers: { Authorization: `Bearer ${token}` }
//         };
//     } catch (error) {
//         console.log('getConfig error', error);
//         let token = JSON.parse(localStorage.getItem('token'));
//         console.log(token);
//         return {
//             headers: { Authorization: token }
//         };
//     } catch (error) {
//         console.log('get config error', error);
//     }
// };

//end login user

//profile setup action start
export const setupProfileStart = (errorMessages) => ({
    type: setupProfile.PROFILESETUP_LOAD_START,
    payload: errorMessages
});
export const setupProfileSucces = (profileSetup) => ({
    type: setupProfile.PROFILESETUP_LOAD_SUCCESS,
    payload: profileSetup
});
export const setupProfileError = (errorMessages) => ({
    type: setupProfile.PROFILESETUP_LOAD_ERROR,
    payload: errorMessages
});
export const bvnNinError = (bvnError) => ({
    type: setupProfile.BVN_NIN_LOAD_ERROR,
    payload: bvnError
});
export const bvnNinErrorI = (bvnErrorI) => ({
    type: setupProfile.BVN_NIN_LOAD_ERRORI,
    payload: bvnErrorI
});
export const bvnNinErrorII = (bvnErrorII) => ({
    type: setupProfile.BVN_NIN_LOAD_ERRORII,
    payload: bvnErrorII
});
export const bvnNinErrorIII = (bvnErrorIII) => ({
    type: setupProfile.BVN_NIN_LOAD_ERRORIII,
    payload: bvnErrorIII
});
export const bvnNinPending = (bvnNinPend) => ({
    type: setupProfile.BVN_NIN_LOAD_PENDING,
    payload: bvnNinPend
});
export const bvnNinData = (bvnNin) => ({
    type: setupProfile.BVN_NIN_LOAD_SUCCESS,
    payload: bvnNin
});
export const createProfileSetup = (profileData) => {
    const cookie = getCookie('cookieToken');
    return async (dispatch) => {
        await axios
            .post(
                `https://ellevate-test.herokuapp.com${apiRoutes.profileSetup}`,
                profileData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                dispatch(setupProfileSucces(response.data));

                console.log('data from profile', response.data);
                if (
                    response.data.message ===
                    'profile setup intialized, sending otp'
                ) {
                    console.log('test1');
                    const cookie = getCookie('cookieToken');
                    console.log(cookie);
                    axios
                        .post(
                            `https://ellevate-test.herokuapp.com${apiRoutes.verifyStatus}`,
                            [],
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${cookie}`
                                }
                            }
                        )
                        .then((response) => {
                            dispatch(bvnNinData(response.data.message));
                            console.log('profile otp dispatch', response);
                        })
                        .catch((error) => {
                            console.log('profile otp dispatch', error);
                            dispatch(bvnNinError(error.response.data.message));
                        });
                }
            })
            .catch((error) => {
                console.log(
                    'profile setup dispatch',
                    error.response.data.message
                );
                dispatch(setupProfileError(error.response.data.message));
            });
    };
};

// profile setuo action end

//business profile setup action start
export const setupBusProfileStart = (busErrorMessages) => ({
    type: setupBusProfile.BUS_PROFILESETUP_LOAD_START,
    payload: busErrorMessages
});
export const setupBusProfileSucces = (busProfileSetup) => ({
    type: setupBusProfile.BUS_PROFILESETUP_LOAD_SUCCESS,
    payload: busProfileSetup
});
export const setupBusProfileError = (busErrorMessages) => ({
    type: setupBusProfile.BUS_PROFILESETUP_LOAD_ERROR,
    payload: busErrorMessages
});
export const bvnBusNinError = (busBvnError) => ({
    type: setupBusProfile.BUS_BVN_NIN_LOAD_ERROR,
    payload: busBvnError
});
export const bvnBusNinErrorI = (busBvnErrorI) => ({
    type: setupBusProfile.BUS_BVN_NIN_LOAD_ERRORI,
    payload: busBvnErrorI
});
export const bvnBusNinErrorII = (busBvnErrorII) => ({
    type: setupBusProfile.BUS_BVN_NIN_LOAD_ERRORII,
    payload: busBvnErrorII
});
export const bvnBusNinErrorIII = (busBvnErrorIII) => ({
    type: setupBusProfile.BUS_BVN_NIN_LOAD_ERRORIII,
    payload: busBvnErrorIII
});
export const bvnBusNinPending = (busBvnNinPend) => ({
    type: setupBusProfile.BUS_BVN_NIN_LOAD_PENDING,
    payload: busBvnNinPend
});
export const bvnBusNinData = (busBvnNin) => ({
    type: setupBusProfile.BUS_BVN_NIN_LOAD_SUCCESS,
    payload: busBvnNin
});
export const createBusProfileSetup = (businessProfileData) => {
    const cookie = getCookie('cookieToken');
    // console.log('cookie in create profile function', cookie);
    return async (dispatch) => {
        await axios
            .post(
                `https://ellevate-test.herokuapp.com${apiRoutes.profileSetupBus}`,
                businessProfileData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                dispatch(setupProfileSucces(response.data));

                console.log('data from Business profile', response.data);
                if (response.data.message === 'Success') {
                    const cookie = getCookie('cookieToken');
                    axiosInstance
                        .post(
                            `https://ellevate-test.herokuapp.com${apiRoutes.verifyStatusBus}`,
                            [],

                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${cookie}`
                                }
                            }
                        )
                        .then((response) => {
                            dispatch(bvnNinData(response.data.message));
                            console.log('profile otp dispatch', response);
                        })
                        .catch((error) => {
                            console.log('profile otp dispatch', error);
                            dispatch(bvnNinError(error.response.data.message));
                        });
                }
            })
            .catch((error) => {
                console.log(
                    'profile setup dispatch',
                    error.response.data.message
                );
                dispatch(setupProfileError(error.response.data.message));
            });
    };
};

// business profile setuo action end
//BVN Otp
export const otpLoadStart = (errorMessages) => ({
    type: otp.OTP_LOAD_START,
    payload: errorMessages
});
export const otpLoadSuccess = (otpActData) => ({
    type: otp.OTP_LOAD_SUCCESS,
    payload: otpActData
});
export const otpLoadError = (otpErrorMessage) => ({
    type: otp.OTP_LOAD_ERROR,
    payload: otpErrorMessage
});

export const verifyOtp = (otpData) => {
    const cookie = getCookie('cookieToken');
    return async (dispatch) => {
        await axiosInstance
            .post(
                `https://ellevate-test.herokuapp.com${apiRoutes.verifyOtp}`,
                otpData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                dispatch(otpLoadSuccess(response.data));
                console.log('otp', otpData);
                console.log('data from otp', response.data);
            })
            .catch((error) => {
                console.log('profile otp dispatch', error);
                dispatch(bvnNinError(error.response.message));
            })
            .catch((error) => {
                console.log('profile Bvn dispatch', error.response);
            });
    };
};

//BVN OTP End

//Complete Profile Action
export const profileLoadStart = (errorMessages) => ({
    type: compProfile.PROFILE_LOAD_START,
    payload: errorMessages
});
export const profileLoadSuccess = (profile) => ({
    type: compProfile.PROFILE_LOAD_SUCCESS,
    payload: profile
});
export const profileLoadError = (errorMessages) => ({
    type: login.PROFILE_LOAD_ERROR,
    payload: errorMessages
});

export const CompProfile = () => {
    const cookie = getCookie('cookieToken');
    return (dispatch) => {
        dispatch(profileLoadStart());
        axiosInstance
            .get(
                `https://ellevate-test.herokuapp.com${apiRoutes.authProfile}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                dispatch(profileLoadSuccess(response));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//Commplete Profile End

//Complete Profile post
export const completeProfileLoadStart = (errorMessages) => ({
    type: completeProfile.COMP_PROFILE_LOAD_START,
    payload: errorMessages
});
export const completeProfileLoadSuccess = (compBusprofile) => ({
    type: completeProfile.COMP_PROFILE_LOAD_SUCCESS,
    payload: compBusprofile
});
export const completeProfileLoadError = (errorMessage) => ({
    type: completeProfile.COMP_PROFILE_LOAD_ERROR,
    payload: errorMessage
});

export const CompleteBusinessProfile = (completeProfileData) => {
    let cookie;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    return (dispatch) => {
        // dispatch(completeProfileLoadStart());
        axiosInstance
            .post(
                `https://ellevate-test.herokuapp.com${apiRoutes.completesBusinessProfile}`,
                completeProfileData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                console.log('complete business profiler', response.data);
                dispatch(completeProfileLoadSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(
                    completeProfileLoadError(
                        'error check the fields and try again'
                    )
                );
            });
    };
};
//Complete Profile Post End

//Create New User Action
export const createNewAccountStart = () => ({
    type: newUserCreateAccount.CREATE_NEW_ACCOUNT_LOAD_START,
    payload: newAccountErrorMessage
});
export const createNewAccountSuccess = (newAccount) => ({
    type: newUserCreateAccount.CREATE_NEW_ACCOUNT_LOAD_SUCCESS,
    payload: newAccount
});
export const createNewAccountError = (newAccountErrorMessage) => ({
    type: newUserCreateAccount.CREATE_NEW_ACCOUNT_LOAD_ERROR,
    payload: newAccountErrorMessage
});

export const createNewUserAccount = (accountData) => {
    const cookie = getCookie('cookieToken');
    return (dispatch) => {
        // dispatch(completeProfileLoadStart());
        axiosInstance
            .post(
                `https://ellevate-test.herokuapp.com${apiRoutes.newCreateAccount}`,
                accountData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                console.log('create New Account', response.data);
                dispatch(createNewAccountSuccess(response.data));
            })
            .catch((error) => {
                console.log('create new account:', error.response.data.message);
                dispatch(createNewAccountError(error.response.data.message));
                // console.log(error);
            });
    };
};

//End Create New User Action

//Create New Corporate User Action
export const createNewCorpAccountStart = (newCorpAccountErrorMessage) => ({
    type: newUserCreateAccount.CREATE_NEW_ACCOUNT_LOAD_START,
    payload: newCorpAccountErrorMessage
});
export const createNewCorpAccountSuccess = (newCorpAccount) => ({
    type: newUserCreateAccount.CREATE_NEW_ACCOUNT_LOAD_SUCCESS,
    payload: newCorpAccount
});
export const createNewCorpAccountError = (newCorpAccountErrorMessage) => ({
    type: newUserCreateAccount.CREATE_NEW_ACCOUNT_LOAD_ERROR,
    payload: newCorpAccountErrorMessage
});

export const createNewCorpUserAccount = (accountData) => {
    const cookie = getCookie('cookieToken');
    return (dispatch) => {
        // dispatch(completeProfileLoadStart());
        axiosInstance
            .post(
                `https://ellevate-app.herokuapp.com${apiRoutes.corpNewUser}`,
                accountData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie}`
                    }
                }
            )
            .then((response) => {
                console.log('create New Account', response.data);
                // console.log('create new account:', error.response.data.message);
                dispatch(createNewAccountSuccess(response.data));
            })
            .catch((error) => {
                console.log(
                    'create new account Error:',
                    error.response.data.message
                );
                dispatch(
                    createNewCorpAccountError(error.response.data.message)
                );
            });
    };
};
//End Create New Corporate User Action

//start corp account status

export const getNewAccountStart = () => ({
    type: newUserCreateCorpAccount.CREATE_NEW_CORP_ACCOUNT_LOAD_START,
    payload: ''
});
export const getNewAccountSuccess = (newUserAccount) => ({
    type: newUserCreateCorpAccount.CREATE_NEW_CORP_ACCOUNT_LOAD_SUCCESS,
    payload: newUserAccount
});
export const getNewAccountError = (newUserAccountErrorMessage) => ({
    type: newUserCreateCorpAccount.CREATE_NEW_CORP_ACCOUNT_LOAD_ERROR,
    payload: newUserAccountErrorMessage
});

export const getNewUserAccountDetails = (accountData) => {
    return (dispatch) => {
        // dispatch(completeProfileLoadStart());
        // dispatch(getNewAccountStart());
        axiosInstance
            .get(`${apiRoutes.corpAccountStatus}`)
            .then((response) => dispatch(getNewAccountSuccess(response.data)))
            .catch((error) =>
                dispatch(getNewAccountError(error.response.data.message))
            );
    };
};
//end corp account status

//bank accounts start

export const bankAccountsStart = () => ({
    type: getUserBankAccounts.GET_USER_Bank_ACCOUNTS_ACCOUNT_LOAD_START
});

export const bankAccountsSuccess = (bankAccounts) => ({
    type: getUserBankAccounts.GET_USER_Bank_ACCOUNTS_ACCOUNT_LOAD_SUCCESS,
    payload: bankAccounts
});

export const bankAccountsLoadError = (bankAccountErrorMessages) => ({
    type: getUserBankAccounts.GET_USER_Bank_ACCOUNTS_ACCOUNT_LOAD_ERROR,
    payload: bankAccountErrorMessages
});
export const bankAccountsData = () => (dispatch) => {
    const exToken = getCookie('existingToken');
    dispatch(accountNumberLoadStart());
    axios
        .get(`https://ellevate-test.herokuapp.com${apiRoutes.banksAccounts}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${exToken}`
            }
        })
        .then((response) => {
            dispatch(bankAccountsSuccess(response.data[0].accountNumber));
            console.log(response.data.accountNumber);
        })
        .catch((error) =>
            dispatch(bankAccountsLoadError(error.response.data.message))
        );
};

//bank accunt end

//tility upload start
export const uploadUtilityStart = () => ({
    type: uploadUtilityDocumentype.GET_UTILITY_DOCUMENT_START
});

export const uploadUtilitySuccess = (utilityUpload) => ({
    type: uploadUtilityDocumentype.GET_UTILITY_DOCUMENT_SUCCESS,
    payload: utilityUpload
});

export const uploadUtilityError = (utilityUplodaErrorMessages) => ({
    type: uploadUtilityDocumentype.GET_UTILITY_DOCUMENT_ERROR,
    payload: utilityUplodaErrorMessages
});
export const uploadUtilityData = (utilitydata) => (dispatch) => {
    let cookie;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadUtilityDocument}`,
            utilitydata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(uploadUtilitySuccess(response));
            console.log(response);
        })
        .catch((error) => dispatch(uploadUtilityError(error)));
};

//utility upload end

//Upload identification Documentation start
export const identificationDocStart = () => ({
    type: uploadIdDocType.GET_ID_DOCUMENTATION_START
});

export const identificationDocSuccess = (identification) => ({
    type: getUserBankAccounts.GET_USER_Bank_ACCOUNTS_ACCOUNT_LOAD_SUCCESS,
    payload: identification
});

export const identificationDocError = (identificationErrorMessages) => ({
    type: getUserBankAccounts.GET_USER_Bank_ACCOUNTS_ACCOUNT_LOAD_ERROR,
    payload: identificationErrorMessages
});
export const identificationDocData = (identificationdata) => (dispatch) => {
    let cookie;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadIdentificationDoc}`,
            identificationdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(identificationDocSuccess(response));
            console.log(response);
        })
        .catch((error) => dispatch(identificationDocError(error.response)));
};

//upload identification Documentation end

//upload  uploadMemart start
export const memartStart = () => ({
    type: uploadMemartType.GET_MEMART_START
});

export const memartSuccess = (memart) => ({
    type: uploadMemartType.GET_MEMART_SUCCESS,
    payload: memart
});

export const memartError = (memartErrorMessages) => ({
    type: uploadMemartType.GET_MEMART_ERROR,
    payload: memartErrorMessages
});
export const memartData = (memartdata) => (dispatch) => {
    let cookie;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadMemart}`,
            memartdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(memartSuccess(response));
            console.log(response);
        })
        .catch((error) => dispatch(memartError(error.response)));
};

//upload  uploadMemart end

//upload cac document start
export const cacStart = () => ({
    type: uploadCacCertType.GET_CAC_CERIFICATE_START
});

export const cacSuccess = (cac) => ({
    type: uploadCacCertType.GET_CAC_CERIFICATE_SUCCESS,
    payload: cac
});

export const cacError = (cacErrorMessages) => ({
    type: uploadCacCertType.GET_CAC_CERIFICATEERROR,
    payload: cacErrorMessages
});
export const cacData = (cacdata) => (dispatch) => {
    let cookie;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadCacCert}`,
            cacdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(cacSuccess(response.data.message));
            console.log(response);
        })
        .catch((error) => {
            dispatch(cacError(error.response));
            console.log(error.response);
        });
};
//upload cac document end

//upload scmul document start
export const scmulStart = () => ({
    type: uploadScmulType.GET_SCMUL_START
});

export const scmulSuccess = (scmul) => ({
    type: uploadScmulType.GET_SCMUL_SUCCESS,
    payload: scmul
});

export const scmulError = (scmulErrorMessages) => ({
    type: uploadScmulType.GET_SCMUL_ERROR,
    payload: scmulErrorMessages
});
export const scmulData = (scmuldata) => (dispatch) => {
    let cookie;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadScmul}`,
            scmuldata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(scmulSuccess(response));
            console.log(response);
        })
        .catch((error) => dispatch(scmulError(error.response)));
};
//upload scmul document end

//upload share reffernce form start
export const shareRefFormStart = () => ({
    type: shareRefFormtype.GET_SHARE_REFFERENCE_START
});

export const shareRefFormSuccess = (shareRefForm) => ({
    type: shareRefFormtype.GET_SHARE_REFFERENCE_SUCCESS,
    payload: shareRefForm
});

export const shareRefFormError = (shareRefFormErrorMessages) => ({
    type: shareRefFormtype.GET_SHARE_REFFERENCE_ERROR,
    payload: shareRefFormErrorMessages
});
export const shareRefFormData = (sharerefformdata) => (dispatch) => {
    let cookie;
    r;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.shareRefForm}`,
            sharerefformdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(shareRefFormSuccess(response.data[0].accountNumber));
            console.log(response.data.accountNumber);
        })
        .catch((error) =>
            dispatch(shareRefFormError(error.response.data.message))
        );
};
//upload hare reffernce formt end

//upload  refference form start
export const uploadRefFormStart = () => ({
    type: uploadRefferenceFormType.GET_REFFERENCE_FORM_START
});

export const uploadRefFormSuccess = (uploadRefForm) => ({
    type: uploadRefferenceFormType.GET_REFFERENCE_FORM_SUCCESS,
    payload: uploadRefForm
});

export const uploadRefFormError = (uploadRefFormErrorMessages) => ({
    type: uploadRefferenceFormType.GET_REFFERENCE_FORM_ERROR,
    payload: uploadRefFormErrorMessages
});
export const uploadRefFormData = (uploadrefformdata) => (dispatch) => {
    let cookie;

    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadRefForm}`,
            uploadrefformdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(uploadRefFormSuccess(response));
            console.log(response);
        })
        .catch((error) => dispatch(uploadRefFormError(error.response)));
};
//upload refference form end

//upload  board resolution start
export const uploadBoardResStart = () => ({
    type: uploadRefferenceFormType.GET_REFFERENCE_FORM_START
});

export const uploadBoardResSuccess = (uploadBoardRes) => ({
    type: uploadRefferenceFormType.GET_REFFERENCE_FORM_SUCCESS,
    payload: uploadBoardRes
});

export const uploadBoardResError = (uploadBoardResErrorMessages) => ({
    type: uploadRefferenceFormType.GET_REFFERENCE_FORM_ERROR,
    payload: uploadBoardResErrorMessages
});
export const uploadBoardResData = (uploadboardresdata) => (dispatch) => {
    let cookie;
    r;
    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.uploadBoardRes}`,
            uploadboardresdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(uploadBoardResSuccess(response.data[0].accountNumber));
            console.log(response.data.accountNumber);
        })
        .catch((error) =>
            dispatch(uploadBoardResError(error.response.data.message))
        );
};
//upload board resolution end

//forgot password resolution start
export const forgotPasswordStart = () => ({
    type: forgotPasswordtype.GET_FORGOT_PASSWORD_START
});

export const forgotPasswordSuccess = (forgotPassword) => ({
    type: forgotPasswordtype.GET_FORGOT_PASSWORD_SUCCESS,
    payload: forgotPassword
});

export const forgotPasswordError = (forgotPasswordErrorMessages) => ({
    type: forgotPasswordtype.GET_FORGOT_PASSWORD_ERROR,
    payload: forgotPasswordErrorMessages
});
export const forgotPasswordData = (forgotPassworddata) => (dispatch) => {
    let cookie;

    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }
    // dispatch(accountNumberLoadStart());
    axios
        .post(
            `https://ellevate-test.herokuapp.com${apiRoutes.forgotPassword}`,
            forgotPassworddata,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookie}`
                }
            }
        )
        .then((response) => {
            dispatch(forgotPasswordSuccess(response));
            console.log(response);
        })
        .catch((error) => dispatch(forgotPasswordError(error)));
};
//forgot password resolution end
