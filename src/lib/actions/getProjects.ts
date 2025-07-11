import api from "../axios";
import { Project } from "@/Infrastructure/Interfaces/Project";

export default async function getProjects(token: string) {
  const response = await api.get<Project>(
    "http://localhost:4000/api/projects/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
