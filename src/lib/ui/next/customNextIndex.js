module.exports = `
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import type { Add } from '../../../contracts/src/';
import {
  Mina,
  isReady,
  PublicKey,
  fetchAccount,
} from 'snarkyjs';

export default function Home() {
  useEffect(() => {
    (async () => {
      await isReady;
      const { Add } = await import('../../../contracts/build/src/');

      // Update this to use the address (public key) for your zkApp account
      // To try it out, you can try this address for an example "Add" smart contract that we've deployed to 
      // Berkeley Testnet B62qisn669bZqsh8yMWkNyCA7RvjrL6gfdr3TQxymDHNhTc97xE5kNV
      const zkAppAddress = '';
      // This should be removed once the zkAppAddress is updated.
      if (!zkAppAddress) {
        console.error(
          'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4'
        );
      }

      const zkApp = new Add(PublicKey.fromBase58(zkAppAddress));
      
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/assets/HeroMinaLogo_gray.svg"
            alt="Mina Logo"
            width={191}
            height={174}
            style={{
              minWidth: '100%',
              height: 'auto'
            }}
            priority
          />
          <p style={{ width: '100%' }}>
            built with&nbsp;
            <code className={styles.code}>SnarkyJS</code>
          </p>
        </div>  
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        <div className={styles.grid}>
          <a
            href="https://docs.minaprotocol.com/zkapps"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Docs</h2>
            <p>Explore zkApps, how to build one & in-depth references</p>
          </a>
          <a
            href="https://docs.minaprotocol.com/zkapps/tutorials/hello-world"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Tutorials</h2>
            <p>Learn with step-by-step SnarkyJS tutorials</p>
          </a>
         
        </div> 
      </main>
     </>
  );
}

`;
