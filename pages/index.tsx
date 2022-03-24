import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Notes from '../components/Notes';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>NoteBook</title>
        <link rel="icon" href="/notebook.ico" />
      </Head>
      {/* header */}
      <Header/>

      {/* notes */}
      <Notes/>

      {/* modal */}
      <Modal/>
    </div>
  )
}

export default Home
