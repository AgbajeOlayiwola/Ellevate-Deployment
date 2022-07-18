import React, { useState } from 'react';
import ButtonComp from '../../ReusableComponents/Button';
import Card from '../NotRegisteredForms/Card';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Link from 'next/link';
import styles from './styles.module.css';
import StepTwoBVNAuthenticator from '../NotRegisteredForms/StepTwoBVNAuthenticator';

const ExistingMultiStep = () => {
    const [page, setPage] = useState(0);
    const [activeBtn, setActiveBtn] = useState(true);

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <FirstStep />;
            case 1:
                return <SecondStep />;
            case 2:
                return <StepThree />;
            case 3:
                return <StepFour />;
            default:
                return <FirstStep />;
        }
    };
    function handleSubmit() {
        setPage(page + 1);
    }
    return (
        <Card>
            {conditionalComponent()}
            {page === 3 ? null : (
                <div className={page === 2 ? styles.btns : null}>
                    {page === 2 ? (
                        <Link href="/Succes/Success">
                            <button text="Confirm" type="button">
                                Confirm
                            </button>
                        </Link>
                    ) : null}

                    <ButtonComp
                        disabled={activeBtn}
                        active={activeBtn ? 'active' : 'inactive'}
                        onClick={handleSubmit}
                        type="submit"
                        text={page === 2 ? 'Create Account' : 'Next'}
                    />
                </div>
            )}
        </Card>
    );
};

export default ExistingMultiStep;
