
import Home from "./views/Home.jsx";
import Package from "./views/Package.jsx";
import Share from "./views/Share.jsx";
import Profile from "./views/Profile.jsx";


var routes = [
  {
    path: "/home",
    name: 'HOME',
    icon: "tim-icons icon-world",
    component: Home,
    layout: "/user"
  },
  {
    path: "/package",
    name: 'PACKAGE',
    icon: "tim-icons icon-world",
    component: Package,
    layout: "/user"
  },
  {
    path: "/share",
    name: 'SHARE',
    icon: "tim-icons icon-world",
    component: Share,
    layout: "/user"
  },
  {
    path: "/profile",
    name: 'View Profile',
    icon: "tim-icons icon-world",
    component: Profile,
    layout: "/user"
  }
];
export default routes;
