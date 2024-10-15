import React from "react";
import { createBrowserRouter, Link, useRoutes } from "react-router-dom";
import { AddDataComponent } from "../../pages/AddUser";
import { LayoutComponent } from "../../pages/Layout";
import { MyErrorComponent } from "../../pages/Myerror";
import { PostComponent } from "../../pages/Post";
import { PostsComponent } from "../../pages/Posts";
import { UserComponent } from "../../pages/User";
import { DataComponent } from "../../pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent/>,
    children:[
        {
            path:"",
            element:<PostsComponent/>
        },
        {
            path:"users",
            element:<DataComponent/>
        },
        {
            path:"add-user",
            element:<AddDataComponent/>
        },
        {
            path:"user/:id",
            element:<UserComponent/>
        },
        {
            path:"post/:id",
            element:<PostComponent/>
        },
        {
            path:"*",
            element:<MyErrorComponent/>
        },
    ]
  },
 
]);
