import React, { useState } from "react";

// Icons & Images
import Logo from "../assets/Logo.svg";
import DashboardIcon from "../assets/home.svg";
import EmployeeIcon from "../assets/employee.svg";
import PayRunIcon from "../assets/Frame.svg";
import ApprovalIcon from "../assets/approval.svg";
import Arrow from "../assets/arrow.svg";
import icons from "../assets/icon.svg";
import BenefitIcon from "../assets/benefit.svg";
import DocumentIcon from "../assets/Frame 2.svg";
import ReportsIcon from "../assets/Reports.svg";
import SettingsIcon from "../assets/Settings.svg";
import HelpIcon from "../assets/help-circle.svg";
import button from "../assets/Button.svg";

import UserAvatar from "../assets/Avatar.svg";

// Data
const approvalItems = [
  { id: "attendance", label: "Attendance", y: 0 },
  { id: "leave", label: "Leave", y: 50 },
  { id: "reimburse", label: "Reimbursements", y: 100 },
  { id: "salary", label: "Salary Revision", y: 150 },
];

const otherItems = [
  { id: "benefit", label: "Benefit", icon: BenefitIcon },
  { id: "document", label: "Document", icon: DocumentIcon },
  { id: "reports", label: "Reports", icon: ReportsIcon },
];

const settingsItems = [
  { id: "profile", label: "Settings", icon: SettingsIcon },
];

const Sidebar = ({  onNavigate }) => {
  const [approvalOpen, setApprovalOpen] = useState(false);
  const [activeApproval, setActiveApproval] = useState("");
  const [activeItemId, setActiveItemId] = useState(""); // Other items
  const [activeSetting, setActiveSetting] = useState("");
  const [activeHelp, setActiveHelp] = useState(false);

  const activeApprovalItem = approvalItems.find((x) => x.id === activeApproval);

  // Handle navigation with callback
  const handleNavItem = (itemId) => {
    setActiveItemId(itemId);
    // Clear approval sub-item if navigating away from approval
    if (itemId !== "approval") {
      setActiveApproval("");
    }
    onNavigate('main', itemId);
  };

  const handleApprovalItem = (itemId) => {
    setActiveApproval(itemId);
    onNavigate('main', 'approval');
    onNavigate('approval', itemId);
  };

  const handleOtherItem = (itemId) => {
    setActiveItemId(itemId);
    onNavigate('main', itemId);
  };

  const handleSetting = (itemId) => {
    setActiveSetting(itemId);
    onNavigate('main', itemId);
  };

  // Height of approval sublist when opened (matches previous absolute layout height)
  const approvalShift = approvalOpen ? 200 : 0;

  return (
    <aside className="sidebar"
      style={{
        width: "278px",
        height: "100vh",
        background: "#FFFFFF",
        position: "relative",
        padding: "25px 0 25px 35px",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      {/* ---------- Logo Section ---------- */}
      <div style={{ width: "145px", height: "45px", display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "45px", height: "45px", borderRadius: "8px", objectFit: "cover" }}
        />
        <div style={{ marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "18px",
              color: "#1C1C1C",
              letterSpacing: "0.4px",
              textTransform: "uppercase",
            }}
          >
            TEKYDOCT
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#1C1C1C",
              marginTop: "-2px",
            }}
          >
            PAYROLL
          </div>
        </div>
      </div>

      {/* Vertical separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100vh",
          width: "0px",
          borderLeft: "1px solid rgba(28, 28, 28, 0.1)",
        }}
      />

      {/* ---------- MAIN NAVIGATION ---------- */}
      <div style={{ position: "relative", width: "208px", marginTop: "56px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* OVERLINE */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0 12px",
            gap: "8px",
            width: "208px",
            fontFamily: "sans-serif",
            height: "12px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "12px",
              fontFamily: "sans-serif",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
              letterSpacing: "0.4px",
             
              color: "rgba(28,28,28,0.5)",
            }}
          >
            MAIN
          </div>
        </div>

        {/* ---------- Dashboard ---------- */}
        <NavItem label="Dashboard" icon={DashboardIcon} isActive={activeItemId === "dashboard"} onClick={() => handleNavItem("dashboard")} />
        <NavItem label="Employee" icon={EmployeeIcon} isActive={activeItemId === "employee"} onClick={() => handleNavItem("employee")} />
        <NavItem label="Pay Runs" icon={PayRunIcon} isActive={activeItemId === "payruns"} onClick={() => handleNavItem("payruns")} />

        {/* ---------- Approval ---------- */}
        <div
          onClick={() => {
            handleNavItem("approval");
            setActiveApproval(""); // Clear sub-item selection
            setApprovalOpen(!approvalOpen);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 12px",
            gap: 12,
            width: 208,
            height: 44,
            borderRadius: 8,
            cursor: "pointer",
            background: activeItemId === "approval" ? "rgba(28,28,28,0.05)" : "transparent",
          }}
        >
          <img
            src={ApprovalIcon}
            alt="Approval"
            style={{
              width: 20,
              height: 20,
              filter: activeItemId === "approval" ? "brightness(0) saturate(100%) contrast(140%)" : "none",
              opacity: activeItemId === "approval" ? 1 : 0.6,
            }}
          />
          <div style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14, lineHeight: "20px", color: activeItemId === "approval" ? "#1C1C1C" : "#1C1C1C99" }}>Approval</div>
          <img
            src={Arrow}
            alt="Arrow"
            style={{
              width: 24,
              height: 24,
              transform: approvalOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.2s",
              marginLeft: "auto",
            }}
          />
        </div>

        {approvalOpen && (
          <div style={{ position: "relative", width: 208, marginTop: 8, paddingLeft: 16, minHeight: 200 }}>
            <div style={{ position: "absolute", left: 0, top: 0, width: 4, height: "100%", background: "#F2F2F2", borderRadius: 4 }} />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: (activeApprovalItem ? activeApprovalItem.y : 0),
                width: 4,
                height: 40,
                background: "#1C1C1C",
                borderRadius: 4,
                transition: "0.25s",
              }}
            />
            {approvalItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleApprovalItem(item.id)}
                style={{
                  position: "absolute",
                  left: 12,
                  top: item.y,
                  width: "90%",
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 8,
                  padding: "10px 12px",
                  cursor: "pointer",
                  background: activeApproval === item.id ? "rgba(28,28,28,0.05)" : "transparent",
                }}
              >
                {activeApproval === item.id && <div style={{ position: "absolute", left: -12, width: 2, height: 24, background: "#1C1C1C", borderRadius: 4 }} />}
                <span style={{ fontSize: 14, fontWeight: 500, color: activeApproval === item.id ? "#1C1C1C" : "rgba(28,28,28,0.5)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ---------- Benefit, Document, Reports ---------- */}
        {otherItems.map((item) => {
          const isActive = activeItemId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleOtherItem(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                gap: 12,
                width: 208,
                height: 44,
                borderRadius: 8,
                fontFamily: "Inter",
                cursor: "pointer",
                background: isActive ? "rgba(28,28,28,0.05)" : "transparent",
                marginTop: 8,
              }}
            >
              <img
                src={item.icon}
                alt={item.label}
                style={{
                  width: 20,
                  height: 20,
                  fontFamily: "inter",
                  filter: isActive ? "brightness(0) saturate(100%) contrast(200%)" : "none",
                  opacity: isActive ? 1 : 0.9,
                }}
              />
              <span style={{ fontFamily: "inter", 
                fontWeight: 500, 
                fontSize: 14, lineHeight: "20px", color: isActive ? "#1C1C1C" : "rgba(28,28,28,0.6)" }}>
                {item.label}
              </span>
            </div>
          );
        })}

        {/* ---------- Divider under Reports ---------- */}
        <div
          style={{
            position: "absolute",
            width: 208,
            height: 2,
            left: 0,
            // brought closer to the Reports item so the dash sits nearby
            top: 470 - 56 + approvalShift,
            background: "rgba(28,28,28,0.05)",
            borderRadius: 2,
          }}
        />

        {/* ---------- Settings ---------- */}
        <div style={{ position: "absolute", top: 505 - 56 + approvalShift, left: 0, width: 208, height: 60, display: "flex", flexDirection: "column", gap: 8 }}>
 <div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px 12px",
    gap: "8px",
    width: "208px",
    height: "12px",
    flex: "none",
    order: 0,
    alignSelf: "stretch",
    flexGrow: 0,
  }}
>
  <div
    style={{
      width: "53px",
      height: "12px",
      fontFamily: "inter", 
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "12px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.4px",
      
      color: "rgba(28, 28, 28, 0.5)",
      flex: "none",
      order: 0,
      flexGrow: 0,
    }}
  >
    SETTINGS
  </div>
</div>


          {settingsItems.map((item) => {
            const isActive = activeSetting === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSetting(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 12px",
                  gap: 12,
                  width: 208,
                  height: 40,
                  borderRadius: 8,
                  cursor: "pointer",
                  background: isActive ? "rgba(28,28,28,0.05)" : "transparent",
                  transition: "0.2s",
                }}
              >
                <img src={item.icon} alt={item.label} style={{ width: 20, height: 20, opacity: isActive ? 1 : 0.6 }} />
                <span style={{ fontFamily: "inter", fontWeight: 500, fontSize: 14, color: isActive ? "#1C1C1C" : "rgba(28,28,28,0.6)" }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ---------- Help ---------- */}
        <div style={{ position: "absolute", top: 872 - 56 + approvalShift, left: 0, width: 208, height: 40 }}>
          <div
            onClick={() => setActiveHelp(!activeHelp)}
            style={{ display: "flex", alignItems: "center", padding: "10px 12px", gap: 12, cursor: "pointer" }}
          >
            <img src={HelpIcon} alt="Help" style={{ width: 20, height: 20 }} />
            <span style={{ fontFamily: "sans-serif", fontWeight: 500, fontSize: 14, color: "rgba(28,28,28,0.6)" }}>Help</span>
          </div>
        </div>
      </div>
 <div
          style={{
            position: "absolute",
            width: 208,
            height: 2,
            left: 25,
            top: 1050.52 - 56 + approvalShift, // move when approval opens
            background: "rgba(28,28,28,0.05)",
            borderRadius: 2,
          }}
          />
          
      {/* ---------- Last User Container (Social Button) ---------- */}
      <div
        style={{
          position: "absolute",
          top: 1092 + approvalShift,
          left: 15,
          width: 284,
          height: 50,
          background: "#FFFFFF",
          boxShadow: "0px 1px 2px rgba(10,13,18,0.05)",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px 16px",
          gap: 12,
        }}
      >
        <div style={{ width: 42, height: 32, background: `url(${UserAvatar}) center/cover no-repeat`, borderRadius: 2 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#1C1C1C" }}>Mubeen</span>
          <span style={{ fontFamily: "sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(28,28,28,0.5)" }}>UI Designer</span>
        </div>
        <img src={Arrow} alt="Arrow" style={{ width: 24, height: 24, marginLeft: "auto" }} />
        <div style={{ width: 1, height: 24, borderLeft: "1px dashed rgba(28,28,28,0.1)", marginLeft: 8 }} />
        <img src={icons} alt="Icon" style={{ width: 24, height: 24, marginLeft: 8 }} />
        <button
          type="button"
          aria-label="collapse"
          style={{
            marginLeft: 8,
            width: 36,
            height: 36,
            left:16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
          onClick={() => setApprovalOpen(!approvalOpen)}
        >
          <img src={button} alt="collapse" style={{ width: 24, height: 24 }} />
        </button>
      </div>
    </aside>
  );
};
// Floating collapse button moved inside the last-user container above


// ---------- Helper Component for Reuse ----------
const NavItem = ({ label, icon, isActive, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      padding: "10px 12px",
      gap: 12,
      width: 208,
      height: 40,
      borderRadius: 8,
      cursor: "pointer",
      background: isActive ? "rgba(28,28,28,0.05)" : "transparent",
    }}
  >
    <img src={icon} alt={label} style={{ width: 20, height: 20, filter: isActive ? "brightness(0) saturate(100%) contrast(140%)" : "none", opacity: isActive ? 1 : 0.6 }} />
    <span style={{ fontFamily: "sans-serif", fontWeight: 500, fontSize: 14, color: isActive ? "#1C1C1C" : "rgba(28,28,28,0.6)" }}>{label}</span>
  </div>
);

export default Sidebar;
