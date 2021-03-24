import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact/ContactForm';
import { useCallback } from 'react';
import PageTitle from '../components/pagetitle';
import styles from '../styles/contact.module.css';

export default function Contact() {

  const submit = useCallback((name, email, message) => {
    console.log(name)
    console.log(email)
    console.log(message)
  }, [])

  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={false} page={'contact'} />
        <main className={styles.pageContent}>
          <PageTitle
            title="Contact Us"
            description=""
          />
          <ContactForm submit={submit}></ContactForm>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}