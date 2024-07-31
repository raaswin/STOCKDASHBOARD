'use client';
import { SingleTicker, SymbolOverview } from 'react-ts-tradingview-widgets';
import styles from './page.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const data = ['WMT', 'AMZN', 'AAPL', 'UNH']
  const overviewData = ['CVS', 'VOW', 'MCK', 'GOOG', 'COR', 'COST', 'JPM', 'TTE']
  // let isDarkMode = 0;
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <main className={styles.main}>
      <div className={styles.justifyBetween}>
        <div>
          <Image src="/logo.jpeg" alt="Stock Market" width={200} height={50} />
        </div>
        <div>
          <p className="dark-mode-title">Dark Mode</p>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setDarkMode(!isDarkMode)}
          />
          <label className="switch" htmlFor="checkbox"></label>
        </div>
      </div>
      <h1>Stock Dashboard</h1>
      <div>
        <SymbolOverview colorTheme="dark"
          chartType="candlesticks"
          downColor="#800080"
          borderDownColor="#800080"
          wickDownColor="#800080"
          dateFormat="dd MMM 'yy" />
      </div>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <SingleTicker colorTheme={isDarkMode ? 'dark' : 'light'} key={index} symbol={item} width={280} />
        ))}
      </div>

      <h2>Overview - Today</h2>
      <div className={styles.grid}>
        {overviewData.map((item, index) => (
          <SingleTicker colorTheme={isDarkMode ? 'dark' : 'light'} key={index} symbol={item} width={280} />
        ))}
      </div>
      <style>{`.tradingview-widget-copyright {display: none !important; }`}</style>
    </main>
  );
}
