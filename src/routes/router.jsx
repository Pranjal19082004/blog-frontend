// import { Navigate, useRoutes } from "react-router-dom";
// import { routes } from "./routePaths";
// import { useSelector } from "react-redux";
// const getFinalRoutes = () => {
//   const isSignedIn = useSelector((state) => state.user.signedIn);
//   const finalRoutes = routes.map((route) => {
//     if (route.path == "/signUp" || route.path == "/signIn") return route;
//     if (!isSignedIn) {
//       return { ...route, element: <Navigate to={"/signIn"} /> };
//     }
//     return route;
//   });
//   const element = useRoutes(finalRoutes);
//   return element;
// };

// export { getFinalRoutes };
import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routePaths"; 

const ProtectedRoutes = () => {
  const isSignedIn = useSelector((state) => state.user.signedIn);

  const finalRoutes = routes.map((route) => {
    if (route.path === "/signUp" || route.path === "/signIn") return route;
    if (!isSignedIn) {
      return { ...route, element: <Navigate to="/signIn" /> };
    }
    return route;
  });

  const element = useRoutes(finalRoutes);

  return element; 
};

export default ProtectedRoutes;