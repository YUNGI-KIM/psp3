import React, { useState, useEffect } from 'react';
import Button from '../component/Button.js';
const MainPage = () => {
    
    return (
      <div>
        <div className="top-nav">
          <div>Vroom</div>
          <div>
            <Button/>
          </div>
        </div>
        <div className="black-nav">
          <div style={{ display: 'flex', gap: '78px' }}>
          </div>
        </div>
      </div>
    );
    
}

export default MainPage;