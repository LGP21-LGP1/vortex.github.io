import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const archival = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution 1</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <main>
          <h1 className="title">Solution 1</h1>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default archival;
