const apiKey = '4c1dc6309d4d4a5696c5dedb15d3ba69';

// Función para obtener los últimos juegos
export async function getLatestGames() {
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=24`;

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  return json.results.map((item) => {
    const { name, released, rating, background_image, slug, rating_top} = item;

    return {
      title: name,
      releaseDate: released,
      score: rating,
      image: background_image,
      slug: slug, 
      rating_top: rating_top,
       // Necesario para que la lista sea única
      description: item.short_description || 'No description available',
    };
  });
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author, rating_top };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
    rating_top
  };
}
