import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';

const App = () => {
  const [activePage, setActivePage] = useState({
    main: 'dashboard',
    approval: '',
    other: '',
  });

  // Function to handle sidebar item clicks
  const handleNavigation = (pageType, pageId) => {
    setActivePage((prev) => ({
      ...prev,
      [pageType]: pageId,
    }));
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar activePage={activePage} onNavigate={handleNavigation} />

      {/* Main Content Area */}
      <div style={{ flex: 1 }}>
        <Header activePage={activePage} />

        <div style={{ marginTop: '97px', padding: '20px' }}>
          {/* Dynamic content based on active page */}
          {activePage.main === 'dashboard' && (
            <div>
              <h1>Dashboard</h1>
              <p>Welcome to the Dashboard!</p>
            </div>
          )}
          {activePage.main === 'employee' && (
            <div>
              <h1>Employee Management</h1>
              <p>Manage employees here.</p>
            </div>
          )}
          {activePage.main === 'payruns' && (
            <div>
              <h1>Pay Runs</h1>
              <p>Manage pay runs here.</p>
            </div>
          )}
          {activePage.main === 'approval' && (
            <div>
              <h1>Approval - {activePage.approval}</h1>
              <p>Approval section for {activePage.approval}.</p>
            </div>
          )}
          {activePage.main === 'benefit' && (
            <div>
              <h1>Benefit</h1>
              <p>Manage benefits here.</p>
            </div>
          )}
          {activePage.main === 'document' && (
            <div>
              <h1>Document</h1>
              <p>Manage documents here.</p>
            </div>
          )}
          {activePage.main === 'reports' && (
            <div>
              <h1>Reports</h1>
              <p>View reports here.</p>
            </div>
          )}
          {activePage.main === 'settings' && (
            <div>
              <h1>Settings</h1>
              <p>Configure settings here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
