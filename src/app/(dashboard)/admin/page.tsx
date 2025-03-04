import Announcements from "@/components/Announcements";
import AttendaceChart from "@/components/AttendaceChart";
import CountChart from "@/components/CountChart";
import EventsCalendar from "@/components/EventsCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";


const AdminPage = () => {
  return <div className="p-4 flex gap-4 flex-col md:flex-row">

    <div className="w-full lg:w-2/3 flex flex-col gap-8">
      <div className=" flex gap-4 justify-between flex-wrap">
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parents" />
        <UserCard type="staff" />
      </div>
      <div className="flex gap-4 flec-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-[450px]">
        <CountChart />
        </div>
        <div className="w-full lg:w-2/3 h-[450px]">
        <AttendaceChart />
        </div>
      </div>
      <div className="w-full h-[500px]">
        <FinanceChart />
      </div> 
    </div>

    <div className="w-full lg:w-1/3 flex flex-col gap-8">
    
      <EventsCalendar />
      <Announcements />
    </div>

  </div>;
}

export default AdminPage