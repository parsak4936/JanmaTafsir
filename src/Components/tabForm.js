import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from '../Assets/backgroundimage.jpg'
import MapTest from './Map/apTest'
function TabForm() {
  const [key, setKey] = useState('home','map');

  return (
   
 
<MapTest />
 
   
  );
}

export default TabForm;