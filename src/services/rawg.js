const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE = "https://api.rawg.io/api";

const urlBuilder = (path, param = {}) => {
    const qs = new URLSearchParams({ key: API_KEY, ...param });
    return `${BASE}${path}?${qs}`;
}

const FetchData = async (url) => {
    const data = await fetch(url);
    if (!data.ok) throw new Error(`RAWG API error : ${data.status}`);
    return data.json();
}

// Getting Games data functions object
const rawg = {
    // Trending /featured games for hero slider and new realease section
    getTrendingGames(count = 6) {
        return FetchData(
            urlBuilder("/games", {
                page_size: count,
                ordering: "-added",
                dates: "2023-01-01,2025-12-31",
                metacritic: "75,100",
            })
        );
    },

    // Paginated games list with optional filters
    getGames({ page = 1, pageSize = 20, search, genres, platforms, odering = "-rating", minRating } = {}) {
        const params = { page, page_size: odering, odering };
        if (search) params.search = search;
        if (genres?.length) params.genres = genres.json(",");
        if (platforms) params.platforms = platforms;
        if (minRating) params.minRating = minRating;
        return FetchData(urlBuilder("/gmaes", params));
    },

    // Single game details
    getGame(id) {
        return FetchData(urlBuilder(`/games/${id}`));
    },

    // Screenshots for game
    getScreenshots(id) {
        return FetchData(urlBuilder(`/games/${id}/screenshots`));
    },

    // DLC /Additions
    getAdditions(id) {
        return FetchData(urlBuilder(`/games/${id}/additions`, { page_size: 6 }));
    },

    // Get series of the game
    getSeries(id) {
        return FetchData(urlBuilder(`/games/${id}/game-series`, { page_size: 6 }));
    },

    //This year top rated games
    getTopRated(year = new Date().getFullYear()) {
        return FetchData(
            urlBuilder("/games", {
                page_size: 12,
                ordering: "-rating",
                dates: `${year}-01-01,${year}-12-31`,
            })
        );
    },

    // All genres list
    getGenres() {
        return FetchData(urlBuilder("/genres"));
    },

    // All platforms list
    getPlatforms() {
        return FetchData(urlBuilder("/platforms", { odering: "-games_count", page_size: 20 }));
    },

}

