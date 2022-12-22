import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const UserSidebarData = [
  {
    title: 'اطلاعات نقشه',
    path: '/MapView',
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: 'nav-text'
  },
  {
    title: 'ثبت درخواست',
    path: '/RequestRegister',
    icon: <FaIcons.FaRegCalendarPlus />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های انجام شده',
    path: '/WorkDone',
    icon: <FaIcons.FaRegCalendarCheck />,
    cName: 'nav-text'
  },
  {
    title: ' درخواست های  در حال اجرا  ',
    path: '/WorkInProgress',
    icon: <FaIcons.FaRegCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های رد شده',
    path: '/WorkCanceled',
    icon: <FaIcons.FaRegCalendarTimes />,
    cName: 'nav-text'
  },
  {
    title: 'فاکتورها  ',
    path: '/PaymentReports',
    icon: <FaIcons.FaFileInvoiceDollar />,
    cName: 'nav-text'
  },
  {
    title: 'پشتیبانی',
    path: '/support',
    icon: <FaIcons.FaWrench  />,
    cName: 'nav-text'
  },
  {
    title: 'سوالات متداول',
    path: '/FAQs',
    icon: <FaIcons.FaQuestionCircle />,
    cName: 'nav-text'
  }
];
