
import { Outlet } from 'react-router-dom';
import './App.css';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <div className='basis-[15%] h-[135vh]'>
      <Sidebar/>
      </div>
      <div className='basis-[85%] bg-white shadow-md'>
        <Dashboardview/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
