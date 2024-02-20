import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'

const FetchGithubRepo = ({ repoOwner, repoName }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is already in local storage
        const cachedData = localStorage.getItem(`${repoOwner}-${repoName}`);
        if (cachedData) {
          setRepoData(JSON.parse(cachedData));
        } else {
          const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
          if (response.ok) {
            const data = await response.json();
            setRepoData(data);
            // Cache the data in local storage
            localStorage.setItem(`${repoOwner}-${repoName}`, JSON.stringify(data));
          } else {
            throw new Error('Failed to fetch repository data');
          }
        }
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      setRepoData(null);
    };
  }, [repoOwner, repoName]);

  return (
    <div className="repo-box">
      {repoData ? (
        <>
          <h2><a href={repoData.html_url} target='_blank'>{repoData.name}</a></h2>
          <p>{repoData.description}</p>
          <div>
            <span><FontAwesomeIcon icon={faStar} /> {repoData.stargazers_count} stars</span>
            <span><FontAwesomeIcon icon={faCodeFork} /> {repoData.forks_count} forks</span>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchGithubRepo;
