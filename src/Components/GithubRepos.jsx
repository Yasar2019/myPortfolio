import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GithubWidget = styled.div`
  padding: 1rem;
  background-color: var(--bg-card);
  border-radius: 10px;
  box-shadow: 0px 4px 8px var(--shadow);
  border: 1px solid var(--border);
  text-align: left;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
  }

  .repo {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    background-color: var(--bg-muted);

    h3 {
      margin: 0;
      font-size: 1.1rem;
      color: var(--text-secondary);
    }

    p {
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Yasar2019/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data.slice(0, 5))) // Fetch latest 5 repos
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <GithubWidget>
      <h2>Latest GitHub Repos</h2>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <div key={repo.id} className="repo">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </GithubWidget>
  );
};

export default GithubRepos;
