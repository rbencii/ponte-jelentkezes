import React, { createContext, useCallback, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Listings from './Listings';
import Wizard from './Wizard';
import { Project, ProjectContext } from '../types/types';
import Projects from "./assets/data.json"
import Details from './Details';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Listings />,
      errorElement: <div>404</div>
    },
    {
      path: '/new',
      element: <Wizard />,
      errorElement: <div>404</div>

    },
    {
      path: '/projekt/:id',
      element: <Details />,
      errorElement: <div>404</div>
    }
  ]
);

export const DataContext = createContext<ProjectContext>(
  {
    data: Array(9).fill({ title: undefined, description: undefined, image: undefined }),
    setData: (((_: Project[]) => { }) as React.Dispatch<React.SetStateAction<Project[]>>)
  }
);



function App() {
  const [data, setData] = useState<Project[]>(Array(9).fill({ title: undefined, description: undefined, image: undefined }));
  const fetchExampleProjects = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 1337));
    setData(Projects.data);
  }, []);

  useEffect(() => {
    console.log('LEFUT');
    if (data?.[0]?.title == undefined)
      fetchExampleProjects();
  }, []);


  return (
    <DataContext.Provider value={{ data, setData }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  )
}

export default App
