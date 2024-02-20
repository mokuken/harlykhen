import FetchGithubRepo from "../components/FetchGithubRepo"

function Projects() {
  return (
    <div className="project-container">
      <h1>Some Projects I've Made</h1>
      <div className="repo-container">
        <FetchGithubRepo repoOwner="mokuken" repoName="harlykhen" />
        <FetchGithubRepo repoOwner="mokuken" repoName="harlykhen-vite" />
        <FetchGithubRepo repoOwner="mokuken" repoName="librarysystem" />
        <FetchGithubRepo repoOwner="mokuken" repoName="linux-setup" />
        <FetchGithubRepo repoOwner="mokuken" repoName="mdwm" />
        <FetchGithubRepo repoOwner="mokuken" repoName="upmenu" />
      </div>
    </div>
  )
}

export default Projects
