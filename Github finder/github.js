class Github {
    constructor() {
        this.client_id = 'b8f45d7182507df2f468';
        this.client_secret = '72070f98c7b4bcea26c0bfd9644bdae3aae78c41';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}$client_secret=${this.client_secret}`);



        const profile = await  profileResponse.json();
        const repos = await  reposResponse.json();

        return {
            profile,
            repos
        }
    }
}