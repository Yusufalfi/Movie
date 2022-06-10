import { useState } from 'react';
import './App.css';
import Genre from './components/genre/Genre';
import Main from './components/main/Main';
import Movie from './components/movie/Movie';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App= () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

  return (
    <div className="container">
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
     
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;