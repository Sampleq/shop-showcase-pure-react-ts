import styles from './App.module.scss';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Showcase } from './components/Showcase';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
