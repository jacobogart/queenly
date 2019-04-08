#bugs | notes

#1
What: App -> method: displayAllResults() [formerly toggleResults()]
Where: NavBar || SplashPage -> SearchBar -> form onSubmit{this.findResults} -> findResults

- renamed to displayAllResults from toggleResults, because it is used only when a search bar query is submitted (currently only with enter keypress) and it displays all the current results of the user input.

#2 show icons are not sized correctly
examples:

- Friday with Kenzi Couluee
- XYZ
