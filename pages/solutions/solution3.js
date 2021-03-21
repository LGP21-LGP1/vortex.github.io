import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from '../../styles/solutions.module.css';

const solution3 = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution 3</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'solutions'} />
        <main>
          <h1 className="title">Solution 3</h1>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default solution3;
