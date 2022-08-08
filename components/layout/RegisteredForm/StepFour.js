import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import ButtonComp from '../../ReusableComponents/Button';
import { location } from '../../ReusableComponents/Data';
import {
    existingUserProfileData,
    createAccountData,
    accountStatusData
} from '../../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../ReusableComponents/Loader';
import { useRouter } from 'next/router';
import axios from 'axios';

const StepFour = ({ title }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const account = localStorage.getItem('meta');
    const accountDetails = JSON.parse(account);
    const account1 = localStorage.getItem('account');
    const accountDetails1 = JSON.parse(account1);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { existingUserProfile, errorMessage } = useSelector(
        (state) => state.existingUserProfileReducer
    );
    const { accountStatus, errorMessages } = useSelector(
        (state) => state.accountStatusReducer
    );
    const { createAccount, errorData } = useSelector(
        (state) => state.createAccountReducer
    );
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmitNew = (data) => {
        setLoading(true);
        console.log(data);

        // const userData = {
        //     email: data.email,
        //     password: password,
        //     confirmPassword: confPassword
        // };
        dispatch(existingUserProfileData(accountDetails));
    };

    const profileTest = () => {
        if (errorMessage) {
            setError(errorMessage);
            console.log(errorMessage);
            setLoading(false);
        } else if (
            existingUserProfile.message === 'User account created succesfully'
        ) {
            setLoading(false);
            router.push('/Dashboard');
        }
    };
    useEffect(() => {
        profileTest();
    }, [errorMessage, existingUserProfile]);

    const onSubmit = (data) => {
        setLoading(true);
        console.log(accountDetails1);
        const userData = {
            affiliateCode: 'ENG',
            firstName: accountDetails1.data.userInfo.firstName,
            middleName: 'Sam',
            lastName: accountDetails1.data.userInfo.lastName,
            dob: '1998-08-10',
            id_type: 'IDCD',
            idNo: '1234TTZN14',
            idIssuingDate: '2022-06-27',
            idExpiryDate: '2029-06-05',
            phoneNumber: accountDetails1.data.userInfo.phoneNumber,
            email: accountDetails1.data.userInfo.email,
            gender: 'MALE',
            address1: 'AKure',
            address2: 'IKORODU',
            countryCode: 'NG',
            custType: 'I',
            custCategory: 'INDIVIDUAL',
            brnCode: 'A01',
            ccy: 'NGN',
            flexCustId: '',
            accountClass: 'GHSABP',
            password: accountDetails.password
        };
        dispatch(createAccountData(userData));
        // window.localStorage.setItem('accountNumber', JSON.stringify(response2));
        // router.push('/Dashboard');
    };

    const newAccountTest = () => {
        console.log(createAccount);

        if (errorData) {
            setError(errorData);
            console.log(errorData);
            setLoading(false);
        } else if (createAccount.statusCode === 200) {
            console.log(createAccount);
            dispatch(accountStatusData(createAccount.data.userId));
        }
    };
    useEffect(() => {
        newAccountTest();
    }, [errorData, createAccount]);

    const newAccountTest1 = () => {
        console.log(accountStatus);
        if (errorMessages) {
            setError(errorMessages);
            console.log(errorMessages);
            setLoading(false);
        } else if (accountStatus.message === 'Try Again') {
            setTimeout(() => {
                dispatch(accountStatusData(createAccount.data.userId));
                console.log('Hello');
            }, 40000);
        } else if (accountStatus.message === 'SUCCESS') {
            window.localStorage.setItem(
                'accountNumber',
                JSON.stringify(accountStatus)
            );
            router.push('/Dashboard');
        }
    };
    useEffect(() => {
        newAccountTest1();
    }, [errorMessages, accountStatus]);

    // const accountTest = () => {
    //     if (errorMessage) {
    //         setError(errorMessage);
    //         console.log(errorMessage);
    //         setLoading(false);
    //     } else if (
    //         existingUserProfile.message === 'User account created succesfully'
    //     ) {
    //         setLoading(false);
    //         router.push('/Dashboard');
    //     }
    // };
    // useEffect(() => {
    //     accountTest();
    // }, [errorMessage, existingUserProfile]);
    const types = (type) => {
        setOutType(type);
    };
    const [activeBtn, setActiveBtn] = useState(true);
    const [localState, setLocalState] = useState('');
    const [localGovernment, setLocalGovernment] = useState('');
    useEffect(() => {
        location.filter((item) => {
            if (item.state === localState) {
                setLocalGovernment(item.localGoverment);
            }
        });
    }, [localState]);
    const myref = useRef();
    useEffect(() => {
        myref.current.scrollTo(0, 0);
        window.scrollTo(0, 0);
    }, []);
    return (
        <div ref={myref}>
            <h1 className={styles.header}>Complete Your Profile</h1>
            {title === 'New' ? (
                <div>
                    <form onSubmit={handleSubmit(onSubmitNew)}>
                        {error ? <p className={styles.error}>{error}</p> : null}
                        <div className={styles.bord}>
                            <div className={styles.inps}>
                                {errors.businessName?.message}
                                <label>Enter Business Name</label>

                                <br />

                                <input
                                    placeholder="Enter Business Name"
                                    className={styles.textInput}
                                    required
                                    {...register('businessName', {
                                        required: 'Business Name is Required'
                                        // pattern: {
                                        //     // eslint-disable-next-line
                                        //     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        //     message: 'Invalid email address'
                                        // }
                                    })}
                                />
                            </div>
                            {/* <div className={styles.inps}>
                                    <label>
                                        Enter TIN <i>(optional)</i>{' '}
                                    </label>
                                    <br />

                                    <input
                                        placeholder="Enter Tin"
                                        className={styles.textInput}
                                        required
                                        {...register('tin', {
                                            required: 'Tin is Required'
                                            // pattern: {
                                            //     // eslint-disable-next-line
                                            //     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            //     message: 'Invalid email address'
                                            // }
                                        })}
                                    />
                                </div> */}

                            <div className={styles.inps}>
                                <label>Select Your Business Type </label>
                                {errors.email?.message}
                                <br />

                                <select>
                                    <option value="">
                                        Search Your Business Type
                                    </option>

                                    <option value="Retail business">
                                        Retail business
                                    </option>
                                    <option value="Perishable business">
                                        Perishable business
                                    </option>
                                </select>
                            </div>
                            <p className={styles.ent}>Enter Business Address</p>
                            <div className={styles.busAdd}>
                                <div className={styles.inps}>
                                    <label>Street Name </label>
                                    {errors.streetName?.message}
                                    <br />

                                    <input
                                        placeholder="Enter Street Name"
                                        className={styles.textInput}
                                        required
                                        {...register('streetName', {
                                            required: 'Street Name is Required'
                                            // pattern: {
                                            //     // eslint-disable-next-line
                                            //     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            //     message: 'Invalid email address'
                                            // }
                                        })}
                                    />
                                </div>
                                <div className={styles.inps}>
                                    <label>State </label>
                                    {errors.email?.message}
                                    <br />

                                    <select
                                        className={styles.busInp}
                                        onChange={(event) => {
                                            setLocalState(event.target.value);
                                        }}
                                    >
                                        <option>Enter State</option>
                                        {location?.map((item, index) => {
                                            return (
                                                <option
                                                    value={item.state}
                                                    key={index}
                                                >
                                                    {item.state}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className={styles.inps}>
                                    <label>Select Your Local Government </label>
                                    {errors.email?.message}
                                    <br />

                                    <select className={styles.busInp}>
                                        <option value="">
                                            Select Local Government
                                        </option>
                                        {localGovernment
                                            ? localGovernment?.map(
                                                  (item, index) => {
                                                      return (
                                                          <option
                                                              value={item}
                                                              key={index}
                                                          >
                                                              {item}
                                                          </option>
                                                      );
                                                  }
                                              )
                                            : null}
                                    </select>
                                </div>
                                <div className={styles.inps}>
                                    <label>City </label>
                                    {errors.city?.message}
                                    <br />

                                    <input
                                        placeholder="Enter City"
                                        className={styles.textInput}
                                        required
                                        {...register('city', {
                                            required: 'City is Required'
                                            // pattern: {
                                            //     // eslint-disable-next-line
                                            //     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            //     message: 'Invalid email address'
                                            // }
                                        })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.inps}>
                            <label>
                                Enter Referal Code <i>(optional)</i>{' '}
                            </label>
                            {errors.email?.message}
                            <br />

                            <input
                                placeholder="Enter Referal Code"
                                className={styles.textInput}
                                // required
                                // {...register('email', {
                                //     required: 'Business Address is Required',
                                //     pattern: {
                                //         // eslint-disable-next-line
                                //         value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                //         message: 'Invalid email address'
                                //     }
                                // })}
                            />
                        </div>
                        <div>
                            <div className={styles.terms}>
                                <input type="checkbox" />
                                <label>
                                    I agree with Ellevate App{' '}
                                    <span>Terms and Conditions</span>
                                </label>
                            </div>
                        </div>
                        {loading ? (
                            <Loader />
                        ) : (
                            <ButtonComp
                                disabled={activeBtn}
                                active={activeBtn ? 'active' : 'inactive'}
                                text="Update Profile"
                                type="submit"
                                // onClick={handleShowSuccessStep}
                                // onClick={handleShowFourthStep}
                            />
                        )}
                    </form>
                </div>
            ) : (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.bord}>
                            <div className={styles.inps}>
                                <label>
                                    Enter RC Number/Business Registration Number
                                </label>

                                <br />

                                <input
                                    placeholder="Enter RC Number"
                                    className={styles.textInput}
                                    required
                                    {...register('rcNumber', {
                                        required: 'Rc Number is Required'
                                        // pattern: {
                                        //     // eslint-disable-next-line
                                        //     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        //     message: 'Invalid email address'
                                        // }
                                    })}
                                    type="text"
                                />
                            </div>
                            <div className={styles.inps}>
                                <label>
                                    Enter TIN <i>(optional)</i>{' '}
                                </label>
                                <br />

                                <input
                                    placeholder="Enter Tin"
                                    className={styles.textInput}
                                    required
                                    {...register('tin', {
                                        required: 'Tin is Required'
                                        // pattern: {
                                        //     // eslint-disable-next-line
                                        //     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        //     message: 'Invalid email address'
                                        // }
                                    })}
                                />
                            </div>

                            <div className={styles.inps}>
                                <label>Select Your Business Type </label>

                                <br />

                                <select>
                                    <option>Search Your Business Type</option>
                                </select>
                            </div>
                            <p className={styles.ent}>Enter Business Address</p>
                            <div className={styles.busAdd}>
                                <div className={styles.inps}>
                                    <label>Street Name </label>

                                    <br />

                                    <select className={styles.busInp}>
                                        <option>Enter Street Name</option>
                                    </select>
                                </div>
                                <div className={styles.inps}>
                                    <label>State </label>

                                    <br />

                                    <select
                                        className={styles.busInp}
                                        onChange={(event) => {
                                            setLocalState(event.target.value);
                                        }}
                                    >
                                        <option>Enter State</option>
                                        {location?.map((item, index) => {
                                            return (
                                                <option
                                                    value={item.state}
                                                    key={index}
                                                >
                                                    {item.state}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className={styles.inps}>
                                    <label>Select Your Local Government </label>
                                    {errors.email?.message}
                                    <br />

                                    <select className={styles.busInp}>
                                        <option value="">
                                            Select Local Government
                                        </option>
                                        {localGovernment
                                            ? localGovernment?.map(
                                                  (item, index) => {
                                                      return (
                                                          <option
                                                              value={item}
                                                              key={index}
                                                          >
                                                              {item}
                                                          </option>
                                                      );
                                                  }
                                              )
                                            : null}
                                    </select>
                                </div>
                                <div className={styles.inps}>
                                    <label>City </label>

                                    <br />

                                    <select className={styles.busInp}>
                                        <option>Enter City</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={styles.inps}>
                            <label>
                                Enter Referal Code <i>(optional)</i>{' '}
                            </label>

                            <br />

                            <input
                                placeholder="Enter Referal Code"
                                className={styles.textInput}
                                required
                                // {...register('email', {
                                //     required: 'Business Address is Required',
                                //     pattern: {
                                //         // eslint-disable-next-line
                                //         value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                //         message: 'Invalid email address'
                                //     }
                                // })}
                            />
                        </div>
                        <div>
                            <div className={styles.terms}>
                                <input type="checkbox" />
                                <label>
                                    I agree with Ellevate App{' '}
                                    <span>Terms and Conditions</span>
                                </label>
                            </div>
                        </div>
                        {loading ? (
                            <Loader />
                        ) : (
                            <ButtonComp
                                disabled={activeBtn}
                                active={activeBtn ? 'active' : 'inactive'}
                                text="Update Profile"
                                type="submit"
                                // onClick={handleShowSuccessStep}
                                // onClick={handleShowFourthStep}
                            />
                        )}
                    </form>
                </div>
            )}
        </div>
    );
};

export default StepFour;
