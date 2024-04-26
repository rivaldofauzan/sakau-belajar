// App.tsx

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import DashboardLearner from "./components/custom/DashboardLearnerCourse";
import Discussion from "./components/custom/Discussion";
import ThreadList from "./components/custom/ThreadList";
import { DiscussionProvider } from "./DiscussionContext";
import ReportList from "./components/custom/ReportList";
import Sidebar from "./components/custom/Sidebar";
import Badge from "./components/custom/Badge";
import Capaian from "./components/custom/Capaian";

// Define a specific layout for forum discussion with its own heading
const DashboardLearnerLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <div className="flex-1 text-left mx-auto p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold mt-12 mr-3">Selamat Datang, Aini!</h1>
          <img
            src={handIcon}
            alt="Hand Icon"
            className="h-9 mt-9"
          />
        </div>
        <h3 className="font-semibold mb-3 text-gray-500">Selamat Belajar!</h3> 
        <Outlet />
      </div> */}
      <DashboardLearner />
    </div>
  );
};

// Define a specific layout for forum discussion with its own heading
const ForumLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 text-left mx-auto p-4">
        <h1 className="text-4xl font-semibold mb-5">Forum Diskusi</h1>
        <Outlet />
      </div>
    </div>
  );
};

const TimelineLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 text-left mx-auto p-4">
        <h1 className="text-4xl font-semibold mb-5">Timeline</h1>
        <Badge
          nama="John Doe"
          tanggalPenyelesaian="April 20, 2024"
          namaBadge="Badge Name"
          fotoSrc="url/to/image.jpg"
        />
        <Capaian
          nama="John Doe"
          tanggalPenyelesaian="20 April 2024"
          namaCourse="Belajar React"
          fotoSrc="https://example.com/foto.jpg"
        />
      </div>
    </div>
  );
};

// The App component with routing configuration
const App = () => {
  return (
    <BrowserRouter>
      <DiscussionProvider>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<div>Dashboard Component</div>} /> */}
          <Route path="/" element={<DashboardLearnerLayout />}>
            <Route path="quiz" element={<div>Quiz Component</div>} />
            <Route
              path="studynotes"
              element={<div>Study Notes Component</div>}
            />
            <Route path="reports" element={<div>Reports Component</div>} />
            <Route path="inbox" element={<div>Inbox Component</div>} />
            <Route path="findfriends" element={<TimelineLayout />}></Route>
            <Route path="settings" element={<div>Settings Component</div>} />
          </Route>
          <Route path="discussion" element={<ForumLayout />}>
            <Route index element={<ThreadList />} />{" "}
            <Route path=":threadId" element={<Discussion />} />
            <Route path="report-list" element={<ReportList />} />
          </Route>
        </Routes>
      </DiscussionProvider>
    </BrowserRouter>
  );
};

export default App;
