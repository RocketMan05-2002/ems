import { MdDashboardCustomize } from "react-icons/md"; //dashboard
import { FaUserTie } from "react-icons/fa"; //profile
import { VscReferences } from "react-icons/vsc"; //refer
import { SlCalender } from "react-icons/sl"; //leave
import { GiReceiveMoney } from "react-icons/gi"; //salary
import { IoSettingsSharp } from "react-icons/io5"; //settings
import { FaMoneyBillTrendUp } from "react-icons/fa6"; //rewards

const sidebarIcons = [
    {
        id: 1,
        title: "Dashboard",
        icon: <MdDashboardCustomize size={25} />
    },
    {
        id: 2,
        title: "My Profile",
        icon: <FaUserTie size={25}/>
    },
    {
        id: 3,
        title: "Referrals",
        icon: <VscReferences size={25}/>
    },
    {
        id: 4,
        title: "Leave",
        icon: <SlCalender size={25}/>
    },
    {
        id: 5,
        title: "Salary",
        icon: <GiReceiveMoney size={25}/>
    },
    {
        id: 6,
        title: "Settings",
        icon: <IoSettingsSharp size={25}/>
    },
    {
        id: 7,
        title: "Rewards",
        icon: <FaMoneyBillTrendUp size={25}/>
    }
];

export default sidebarIcons;