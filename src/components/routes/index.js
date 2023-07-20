import MainPage from '../../pages/main';
import ArtPage from '../../pages/work';
import SkillsPage from '../../pages/skills';
import ProjectsPage from '../../pages/projects';

export const routes = [
	{path: "/", element: MainPage, exact:false},
	{path: "/skills", element: SkillsPage, exact:false},
	{path: "/projects", element: ProjectsPage, exact:false},
	{path: "/projects/main", element: ArtPage, exact:false},
]

