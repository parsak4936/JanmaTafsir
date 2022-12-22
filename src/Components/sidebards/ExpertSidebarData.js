import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const ExpertSidebarData = [
  {
    title: 'اطلاعات نقشه',
    path: '/MapView',
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های لیست انتظار ',
    path: '/WorkPending',
    icon: <FaIcons.FaCalendarWeek />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های انجام شده',
    path: '/WorkDone',
    icon: <FaIcons.FaCalendarCheck />,
    cName: 'nav-text'
  },
  {
    title: ' درخواست های  در حال اجرا  ',
    path: '/WorkInProgress',
    icon: <FaIcons.FaCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'درخواست های رد شده',
    path: '/WorkCanceled',
    icon: <FaIcons.FaCalendarTimes />,
    cName: 'nav-text'
  },
  {
    title: 'پشتیبانی',
    path: '/support',
    icon: <FaIcons.FaWrench />,
    cName: 'nav-text'
  },
  {
    title: 'سوالات متداول',
    path: '/FAQs',
    icon: <FaIcons.FaQuestionCircle />,
    cName: 'nav-text'
  }
];
