'use client';

import styles from '../styles/notfound.module.css';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Page Not Found, Error Code 404',
};

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add('hide-header');
    return () => {
      document.body.classList.remove('hide-header');
    };
  }, []);

  return (
    <div className={styles.pagenotfound}>
      <div className={styles.body}>
        <div className={styles.noise}></div>
        <div className={styles.overlay}></div>
        <div className={styles.terminal}>
          <h1>
            에러 발생! ERROR STATE <span className={styles.errorcode}>404</span>
          </h1>
          <p className={styles.output}>
            현재 페이지는 삭제되었거나 존재하지 않으므로 찾을 수 없습니다.
          </p>
          <p className={styles.output}>
            <a onClick={() => router.back()}>뒤로 돌아가기</a> 혹은{' '}
            <a href="/">홈으로 가기</a>를 클릭해주세요.
          </p>
          <p className={styles.output}>감사합니다.</p>
        </div>
      </div>
    </div>
  );
}
