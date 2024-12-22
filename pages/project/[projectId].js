import ProjectDetail from "../../components/ProjectDetail";
import { useRouter } from "next/router"

export default function Index() {
  const router = useRouter()
    const {projectId} = router.query;
    return <ProjectDetail projectId={projectId}/>;
  }