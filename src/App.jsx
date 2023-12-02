import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import LoginModal from './components/LoginModal';
import './index.css'


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

    return (
        <div>
            <Header onLoginClick={toggleModal} />
            <LoginModal isOpen={isModalOpen} onClose={toggleModal} />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;