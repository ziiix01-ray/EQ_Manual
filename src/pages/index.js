import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            進入三菱 PLC 說明書 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="首頁" description="BML 設備說明書網站">
      <HomepageHeader />
      <main>
        <div style={{padding: '50px', textAlign: 'center'}}>
           <h2>歡迎來到 Ray 文庫</h2>
           <p>請點擊上方按鈕開始查閱 PLC 相關技術文件。</p>
        </div>
      </main>
    </Layout>
  );
}
