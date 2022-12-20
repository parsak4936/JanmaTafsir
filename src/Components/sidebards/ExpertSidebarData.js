import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const ExpertSidebarData = [
  {
    title: 'اطلاعات نقشه',
    path: '/MapView',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های لیست انتظار ',
    path: '/WorkPending',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های انجام شده',
    path: '/WorkDone',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: ' درخواست های  در حال اجرا  ',
    path: '/WorkInProgress',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های رد شده',
    path: '/WorkCanceled',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'پشتیبانی',
    path: '/support',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'سوالات متداول',
    path: '/FAQs',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
