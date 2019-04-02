import data from './jacobogart.js';

const {queens, bars} = data;

export default function search(searchQuery) {
  const results = [];
  let query = searchQuery.toLowerCase();

  let matchingBars = bars.filter(bar => bar.name.toLowerCase().includes(query));
  let shows = bars.flatMap(bar => bar.shows);
  let matchingShows = shows.filter(show => show.title.toLowerCase().includes(query));
  let matchingQueens = queens.filter(queen => queen.name.toLowerCase().includes(query));

  matchingBars.forEach(match => results.push(match));
  matchingShows.forEach(match => results.push(match));
  matchingQueens.forEach(match => results.push(match));

  return results;
}

