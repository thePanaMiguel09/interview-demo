"use client";

import { Suspense, useEffect, useState } from "react";

import { Project } from "@/Infrastructure/Interfaces/Project";
import getProjcts from "@/lib/actions/getProjects";
import CustomCard from "@/components/CustomCard";

export default function SignUpPage() {
  const [projects, setProjects] = useState<Project>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    (async () => {
      try {
        const res = await getProjcts(token);
        if (res) {
          setProjects(res);
          console.log(res);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  return (
    <div className="w-dvw min-h-dvh bg-white grid grid-cols-1 place-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {
            projects &&(
                projects.data.map((i)=>(
                    <CustomCard  
                    projectTitle={i.titulo}
                    projectArea={i.area}
                    projectDescription={i.objetivos}
                    key={i._id}
                    />
                ))
            )
        }
    </div>
  );
}
