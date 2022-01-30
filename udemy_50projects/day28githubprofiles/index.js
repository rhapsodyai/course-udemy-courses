const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {

	try {
		const { data } = await axios(APIURL + username)
		createUserCard(data)
		getRepos(username)
	} catch(err) {
		if(err.response.status === 404) {
			createErrorCard('No profile with this username')
		}
	}

	/*
	axios(APIURL + username)
		.then(res => console.log(res))
		.catch(err -> console.log(err))
	*/
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + '/repos?sort=created')
		addReposToCard(data)
	} catch(err) {
		createErrorCard('Problem fetching repos')
	}	
}

function createUserCard(user) {
	const cardHTML = `
		<div class="card">
			<div>
				<img class="avatar" src="${user.avatar_url}" alt="${user.name}">
			</div>
			<div class="user-info">
				<h2>${user.name}</h2>
				<p>${user.bio}</p>
				<ul>
					<li>${user.followers} <strong>Followers</strong></li>
					<li>${user.following} <strong>Following</strong></li>
					<li>${user.public_repos} <strong>Repos</strong></li>
				</ul>

				<div id="repos">
				</div>
			</div>
		</div>
	`

	main.innerHTML = cardHTML
}

function createErrorCard(msg) {
	const cardHTML = `
		<div class="card">
			<h1>${msg}</h1>
		</div>
	`

	main.innerHTML = cardHTML
}

function addReposToCard(repos) {
	const reposElement = document.getElementById('repos')

	repos.slice(0, 10).forEach((r) => {
		console.log(r)
		const repoElement = document.createElement('a')
		repoElement.classList.add('repo')
		repoElement.href = r.html_url
		repoElement.target = '_blank'
		repoElement.innerText = r.name

		reposElement.appendChild(repoElement)
	})
}

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const user = search.value

	if(user) {
		getUser(user)

		search.value = ''
	}
})