import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
      <div>
        <Header />
        <main className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Experience />
          <Education />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
