// App.tsx

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Discussion from "./components/custom/Discussion";
import ThreadList from "./components/custom/ThreadList";
import { DiscussionProvider } from "./DiscussionContext";
import ReportList from "./components/custom/ReportList";
import Sidebar from "./components/custom/Sidebar";

// Define a generic layout structure with the sidebar and outlet
const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 text-left mx-auto p-4">
        <Outlet />
      </div>
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

// The App component with routing configuration
const App = () => {
  return (
    <BrowserRouter>
      <DiscussionProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Dashboard Component</div>} />
            <Route path="quiz" element={<div>Quiz Component</div>} />
            <Route
              path="studynotes"
              element={<div>Study Notes Component</div>}
            />
            <Route path="reports" element={<div>Reports Component</div>} />
            <Route path="inbox" element={<div>Inbox Component</div>} />
            <Route
              path="findfriends"
              element={<div>Find Friends Component</div>}
            />
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
