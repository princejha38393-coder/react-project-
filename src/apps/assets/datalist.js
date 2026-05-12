import userImg from "./user.png";
import adminImg from "./admin.png";
import invoiceImg from "./invoice.png";
import dashboardImg from "./dashboard.png";
import salesImg from "./sales.png";

export const myapplist = [
  {
    appname: "User Management",
    appicon: userImg,
    approuting: "usermanagement",
    appthems: "bg-primary"
  },
  {
    appname: "Admin Management",
    appicon: adminImg,
    approuting: "adminmanagement",
    appthems: "bg-success"
  },
  {
    appname: "Invoice Management",
    appicon: invoiceImg,
    approuting: "invoicemanagement",
    appthems: "bg-info"
  },
  {
    appname: "Dashboard",
    appicon: dashboardImg,
    approuting: "dashboard",
    appthems: "bg-warning"
  },
  {
    appname: "Sales Management",
    appicon: salesImg,
    approuting: "salesmanagement",
    appthems: "bg-danger"
  }
];