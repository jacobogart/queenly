export function search(searchQuery, bars, queens) {
  let barResults = searchBars(searchQuery, bars);
  let showResults = searchShows(searchQuery, bars);
  let queenResults = (searchQuery, queens);
  const results = [barResults, showResults, queenResults].flat();
  return results;
}

export function searchBars(searchQuery, bars) {
  const results = [];
  let query = searchQuery.toLowerCase();
  let matchingBars = bars.filter(bar => bar.name.toLowerCase().includes(query));
  matchingBars.forEach(match => results.push(match));
  return results;
}

export function searchShows(searchQuery, bars) {
  const results = [];
  let query = searchQuery.toLowerCase();
  let shows = bars.flatMap(bar => bar.shows);
  let matchingShows = shows.filter(show =>
    show.name.toLowerCase().includes(query)
  );
  matchingShows.forEach(match => results.push(match));
  return results;
}

export function searchQueens(searchQuery, queens) {
  const results = [];
  let query = searchQuery.toLowerCase();
  let matchingQueens = queens.filter(queen => queen.name.toLowerCase().includes(query));
  matchingQueens.forEach(match => results.push(match));
  return results;
}

