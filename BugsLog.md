#bugs

#1
What: App -> method: displayAllResults() [formerly toggleResults()]
Where: NavBar || SplashPage -> SearchBar -> form onSubmit{this.findResults} -> findResults

- renamed to displayAllResults from toggleResults, because it is used only when a search bar query is submitted (currently only with enter keypress)
- displays all the current selections
