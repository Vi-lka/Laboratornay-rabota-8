(async () => {
    let source = [];
    let url = 'https://api.nasa.gov/planetary/apod?api_key=togmBoTVzgZcg6M2AFL68pVxWOWibyI5uVYcxrWg';
    let response = await fetch(url);
    let result = await response.json();

    source.push (result['title']);
    source.push (result['explanation']);
    source.push (result['url']);

    document.getElementById('title').innerHTML = source[0];
    document.getElementById('explanation').innerHTML = source[1];
    document.getElementById('url').src = source[2];

})();