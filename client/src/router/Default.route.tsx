import { DefaultLayout } from "../layout";
import TestComponent from "../components/test";
const DefaultRouter = [
  {
    name: "Home",
    icon: null,
    path: "/",
    component: TestComponent,
    Layout: DefaultLayout,
  },
  {
    name: "Home",
    icon: null,
    path: "/2",
    component: TestComponent,
    Layout: DefaultLayout,
  },
];

export default DefaultRouter;
