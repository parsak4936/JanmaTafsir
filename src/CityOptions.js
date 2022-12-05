import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

fetch('https://iran-locations-api.vercel.app/api/v1/states')
    .then(response => response.json())
    .then(json => console.log(json[0].name));
export const data = {

    
        states: [
          {
            name: "A",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
          },
          { name: "B", cities: ["Barcelona"] },
          { name: "C", cities: ["Downers Grove"] } 
        ]
    
    
  };
//  const SidebarData = [
//   {
//     title: 'اطلاعات نقشه',
//     path: '/MapView',
//     icon: <AiIcons.AiFillHome />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'ثبت درخواست',
//     path: '/RequestRegister',
//     icon: <IoIcons.IoIosPaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'تنظیمات',
//     path: '/setting',
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: 'nav-text'
//   }
// ];
