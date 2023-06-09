import React, { useState } from 'react';
import styles from './styles.module.css';
import { MakePayment } from '../Data';
import Link from 'next/link';
import OutsideClick from '../OutsideClick';

const MakePaymentBtn = () => {
    const [showDrop, setShowDrop] = useState(false);
    return (
        <div className={styles.body}>
            <button
                className={styles.make}
                onClick={() => setShowDrop(!showDrop)}
            >
                Make Payment
            </button>
            <OutsideClick
                onClickOutside={() => {
                    setShowDrop(false);
                }}
            >
                <div className={showDrop ? styles.dat : styles.dontshow}>
                    {MakePayment.map((item, index) => {
                        return (
                            <div className={styles.comp} key={index}>
                                <p>{item.icon}</p>
                                <Link
                                    href={{
                                        pathname: '/Admin/Payment',
                                        query: { id: item.path }
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </OutsideClick>
        </div>
    );
};
export default MakePaymentBtn;
