import React, { useState } from 'react';
import ButtonComp from '../../../ReusableComponents/Button';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
// import {

// } from '../../RegisteredForm/styles.module';
import {
    CardContainer,
    RegistrationStatus
} from '../../../../pages/Onboarding/ProfileSetup/styles.module';
import {
    CardHeadingBVN,
    LeftHeading,
    SmallInstructionText,
    Label,
    FormInput,
    ResetOTP,
    InputWrapper
} from './styles.module';
import Progressbar from '../../../ReusableComponents/Progressbar';
import Card from '../../NotRegisteredForms/Card';

const StepTwoBVNAuthenticator = ({ handleShowThirdStep }) => {
    const [progress, setProgress] = useState('25%');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const sendOTP = (data) => {
        console.log(data);
    };
    return (
        <div className={styles.cover}>
            <Card>
                {/* <ProfileCard width="50%" height="0"> */}
                <CardHeadingBVN>
                    <LeftHeading>BVN (OTP) Authenticator</LeftHeading>
                    {/* <Imag 
                    src="/width" 
                    alt="lineImage" /> */}
                </CardHeadingBVN>
                <Progressbar
                    bgcolor="#6CCF00"
                    progressCount={progress}
                    height={14}
                />
                <SmallInstructionText>
                    An OTP has been sent to your Phone number registered with
                    BVN. Please enter the OTP below to complete your profile.
                </SmallInstructionText>
                <RegistrationStatus>
                    <form onSubmit={handleSubmit(sendOTP)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div>
                            <Label>Input OTP</Label>
                            <br />
                            <FormInput type="number" {...register('bvn')} />
                        </div>
                        <ResetOTP>
                            <p style={{ color: '#005B82', cursor: 'pointer' }}>
                                Resend OTP
                            </p>
                            <p style={{ cursor: 'pointer' }}>Clear</p>
                        </ResetOTP>

                        <ButtonComp
                            width="100%"
                            height="52px"
                            text="Proceed"
                            type="button"
                            backgroundColor="#6ccf00"
                            color="#ffffff"
                            fontWeight="900"
                            margin="20% 0 0 0"
                            onClick={handleShowThirdStep}
                        />
                    </form>
                </RegistrationStatus>{' '}
            </Card>
        </div>
    );
};

export default StepTwoBVNAuthenticator;
