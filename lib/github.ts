export interface GitHubStats {
	publicRepos: number
	totalCommits: number
	followers: number
}

export interface GitHubRepo {
	id: number
	name: string
	description: string | null
	html_url: string
	homepage: string | null
	language: string | null
	stargazers_count: number
	forks_count: number
	topics: string[]
	updated_at: string
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
	try {
		const token = process.env.GITHUB_TOKEN

		// Buscar dados do usuário
		const userResponse = await fetch(`https://api.github.com/users/${username}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/vnd.github.v3+json",
			},
			next: { revalidate: 3600 }, // Cache por 1 hora
		})

		if (!userResponse.ok) {
			throw new Error("Failed to fetch GitHub user data")
		}

		const userData = await userResponse.json()

		// Buscar repositórios para contar commits
		const reposResponse = await fetch(
			`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/vnd.github.v3+json",
				},
				next: { revalidate: 3600 },
			}
		)

		if (!reposResponse.ok) {
			throw new Error("Failed to fetch GitHub repos")
		}

		const repos = await reposResponse.json()

		// Contar commits (aproximação baseada em repos que você criou)
		let totalCommits = 0
		for (const repo of repos.slice(0, 10)) {
			// Pega os 10 repos mais recentes
			if (!repo.fork) {
				try {
					const commitsResponse = await fetch(
						`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
						{
							headers: {
								Authorization: `Bearer ${token}`,
								Accept: "application/vnd.github.v3+json",
							},
							next: { revalidate: 3600 },
						}
					)

					if (commitsResponse.ok) {
						const linkHeader = commitsResponse.headers.get("link")
						if (linkHeader) {
							const match = linkHeader.match(/page=(\d+)>; rel="last"/)
							if (match) {
								totalCommits += Number.parseInt(match[1])
							}
						} else {
							totalCommits += 1
						}
					}
				} catch (error) {
					console.error(`Error fetching commits for ${repo.name}:`, error)
				}
			}
		}

		return {
			publicRepos: userData.public_repos,
			totalCommits: totalCommits || 100, // Fallback
			followers: userData.followers,
		}
	} catch (error) {
		console.error("Error fetching GitHub stats:", error)
		return null
	}
}

export async function getGitHubRepos(username: string, limit = 6): Promise<GitHubRepo[]> {
	try {
		const token = process.env.GITHUB_TOKEN

		const response = await fetch(
			`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/vnd.github.v3+json",
				},
				next: { revalidate: 3600 }, // Cache por 1 hora
			}
		)

		if (!response.ok) {
			throw new Error("Failed to fetch GitHub repos")
		}

		const repos: GitHubRepo[] = await response.json()

		// Filtrar forks e ordenar por stars
		const filteredRepos = repos
			.filter((repo) => !repo.forks_count && repo.description) // Remove forks e repos sem descrição
			.sort((a, b) => b.stargazers_count - a.stargazers_count)
			.slice(0, limit)

		return filteredRepos
	} catch (error) {
		console.error("Error fetching GitHub repos:", error)
		return []
	}
}
