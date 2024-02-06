import { Sidebar } from 'flowbite-react';
import { RxDashboard } from "react-icons/rx";
import {BiSolidDetail } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";
import { IoIosSettings ,IoMdNotifications } from "react-icons/io";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Upload from './Upload';
// ... (your import statements)
// ... (your import statements)

export default function Dashboard() {
  const location = useLocation();

  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
    <div className='md:w-56'>
    {tab === 'upload' && (
        <h2 className='sm:hidden'>Upload Csv</h2>
      )}
    <Sidebar className='w-full md:w-56 '>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-4 ml-4'>
          <Link to='/home?tab=dash '>
            <Sidebar.Item 
              active={tab === 'dash' || !tab}
              icon={RxDashboard}
              as='div'
              style={{ color: tab === 'dash' || !tab ? '#615EE6' : ''  }}
            >
              Dashboard
            </Sidebar.Item>
          </Link>
          <Link to='/home?tab=upload'>
            <Sidebar.Item
              active={tab === 'upload'}
              icon={BsFillFileBarGraphFill}
              labelColor='dark'
              as='div'
              style={{ color: tab === 'upload' ? '#615EE6' : '' }}
            >
              Upload
            </Sidebar.Item>
          </Link>
          <Link to='/home?tab=invoice'>
            <Sidebar.Item
              active={tab === 'invoice'}
              icon={FaFileInvoice}
              labelColor='dark'
              as='div'
              style={{ color: tab === 'invoice' ? '#615EE6' : '' }}
            >
              Invoice
            </Sidebar.Item>
          </Link>
          
          <Link to='/home?tab=schedule'>
            <Sidebar.Item
              active={tab === 'schedule'}
              icon={BiSolidDetail}
              as='div'
              style={{ color: tab === 'schedule' ? '#615EE6' : '' }}
            >
              Schedule
            </Sidebar.Item>
          </Link>
         
          <Link to='/home?tab=calender'>
            <Sidebar.Item
              active={tab === 'calender'}
              icon={MdCalendarMonth}
              as='div'
              style={{ color: tab === 'calender' ? '#615EE6' : '' }}
            >
              Calendar
            </Sidebar.Item>
          </Link>
          <Link to='/home?tab=notification'>
            <Sidebar.Item
              active={tab === 'notification'}
              icon={IoMdNotifications}
              as='div'
              style={{ color: tab === 'notification' ? '#615EE6' : '' }}
            >
              Notification
            </Sidebar.Item>
          </Link>
          <Link to='/home?tab=setting'>
            <Sidebar.Item
              active={tab === 'setting'}
              icon={IoIosSettings}
              as='div'
              style={{ color: tab === 'setting' ? '#615EE6' : '' }}
            >
              Setting
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
     {/* profile... */}
     {tab === 'dash' && " "}
     {tab === 'upload' && (
    <>
        <Upload/>
    </>
)}

      {tab === 'invoice' && " " }
      {tab === 'schedule' && " "}
      {tab === 'calender' && " "}
      {tab === 'notification' && " "}
      {tab === 'setting' && " "}

    </div>
  );
}
