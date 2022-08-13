import React, { useState } from 'react';
import { ButtonComp, Messagesvg } from '../../../components';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
const Loading = () => {
    const router = useRouter();
    const [activeBtn, setActiveBtn] = useState(true);

    const handleClick = () => {
        router.push('/Auth/Login');
    };
    return (
        <div className={styles.verifyCov}>
            <div className={styles.body}>
                <Messagesvg />
                <div className={styles.veriEmaillTxt}>
                    <h3 className={styles.verifyEmail}>Verify your Email</h3>
                </div>

                <p className={styles.hi}>
                    Open your email and click on the link to verify.
                </p>
                <div onClick={handleClick}>
                    <ButtonComp
                        disabled={activeBtn}
                        active={activeBtn ? 'active' : 'inactive'}
                        type="submit"
                        text="Go To Login"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loading;
