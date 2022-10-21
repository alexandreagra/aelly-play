//https://image.tmdb.org/t/p/original/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg

fetch ("https://api.themoviedb.org/3/trending/all/day?api_key=bc212c7fd1b1d2c5bf84e70a32cfd6e2&language=pt-BR")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const randomNumber = Math.floor(Math.random() * 19);

        document.querySelector("#full-page").style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + data.results[randomNumber].backdrop_path +')';

        const lancamento = new Date('jan 1, 2024 09:00:00').getTime();
        const hoje = new Date().getTime();

        const diferenca = lancamento - hoje;

        let days = diferenca / (1000 * 60 * 60 * 24);

        let hours = (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
        console.log(hours);
    })

   
