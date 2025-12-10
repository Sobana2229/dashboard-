import React from "react";

// Assets
import arrowLeft from "../assets/Chevron.svg";
import searchIcon from "../assets/search.svg";
import calendarIcon from "../assets/calendar.svg";
import notifIcon from "../assets/bell.svg";
import companyArrow from "../assets/double.svg";

const Header = ({ activePage }) => {
  // Generate breadcrumb based on active page
  const getBreadcrumb = () => {
    if (activePage?.main === 'dashboard') {
      return 'Main / Dashboard';
    } else if (activePage?.main === 'employee') {
      return 'Main / Employee';
    } else if (activePage?.main === 'payruns') {
      return 'Main / Pay Runs';
    } else if (activePage?.main === 'approval') {
      const approvalLabels = {
        attendance: 'Attendance',
        leave: 'Leave',
        reimburse: 'Reimbursements',
        salary: 'Salary Revision',
      };
      if (!activePage.approval) return 'Main / Approval';
      return `Main / Approval / ${approvalLabels[activePage.approval] || activePage.approval}`;
    } else if (activePage?.main === 'benefit') {
      return 'Main / Benefit';
    } else if (activePage?.main === 'document') {
      return 'Main / Document';
    } else if (activePage?.main === 'reports') {
      return 'Main / Reports';
    } else if (activePage?.main === 'settings') {
      return 'Main / Settings';
    }
    return 'Main / Dashboard';
  };

  const breadcrumb = getBreadcrumb();
  const parts = breadcrumb.split(' / ');
  const lastPart = parts[parts.length - 1];
  const breadcrumbPrefix = parts.slice(0, -1).join(' / ');

return (
<div
style={{
position: "fixed",
left: "278px", // Sidebar width
right: 0,
top: 0,
height: "97px",
background: "#FFFFFF",
borderBottom: "2px solid #F3F4F6",
display: "flex",
alignItems: "center",
padding: "0 24px",
zIndex: 9999,
boxSizing: "border-box",
}}
>
{/* LEFT SECTION */}
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
<img
src={arrowLeft}
alt="back"
style={{ width: "32px", height: "32px", transform: "rotate(-90deg)" }}
/>
<span
style={{
fontFamily: "sans-serif",
fontWeight: 500,
fontSize: "16px",
color: "rgba(28, 28, 28, 0.6)",
letterSpacing: "-0.3px",
}}
>
{breadcrumbPrefix} / <span style={{ fontWeight: 500, color: "black" }}>{lastPart}</span>
</span>
</div>

  {/* SEARCH BAR */}
  <div
    style={{
      flex: 1,                   // take available space
      maxWidth: "400px",          // prevent too wide on large screens
      height: "45px",
      marginLeft: "60px",
      background: "rgba(247,247,248,0.4)",
      border: "1px solid #F7F7F8",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: "16px",
    }}
  >
    <img src={searchIcon} alt="search" style={{ width: "16px", height: "16px", opacity: 0.7 }} />
    <input
      type="text"
      placeholder="Search employees, documents..."
      style={{
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "sans-serif",
        fontSize: "16px",
        fontWeight: 500,
        color: "#75757580",
      }}
    />
  </div>

  {/* RIGHT SIDE ICONS */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginLeft: "auto",   // pushes the icons to the far right
    }}
  >
    {/* Calendar */}
    <div
      style={{
        width: "45px",
        height: "45px",
        border: "1px solid rgba(28,28,28,0.05)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <img src={calendarIcon} alt="calendar" style={{ width: "45px" }} />
    </div>

    {/* Notification */}
    <div
      style={{
        width: "45px",
        height: "45px",
        border: "1px solid rgba(28,28,28,0.05)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <img src={notifIcon} alt="notif" style={{ width: "20px" }} />
    </div>

    {/* Company Box */}
    <div
      style={{
        width: "225px",
        height: "45px",
        border: "1px solid rgba(28,28,28,0.05)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          color: "#1C1C1C80",
          width: "165px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Elite Solutions Pvt Ltd
      </span>
      <img src={companyArrow} alt="arrow" style={{ width: "24px" }} />
    </div>
  </div>
</div>

);
};

export default Header;
