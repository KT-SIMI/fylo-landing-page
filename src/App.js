import './App.css';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Demo />
      <Testimonials />
      <SignUp />
      <Footer />
    </>

  )
}

