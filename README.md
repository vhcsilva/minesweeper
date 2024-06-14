# Local-multi-player minesweeper

- [ ] Implement the minesweeper game, as playable in classic windows.
- [ ] Must use custom HTML elements (Using "Autonomous custom elements" and/or "Customized built-in elements" is valid)
- [ ] Each game is its own HTML element
- [ ] User must have the ability to create multiple concurrent games of different grid sizes
- [ ] Each game must have a name accessible by an HTML attribute (not data-*) which can be set by the user
- [ ] Other attributes representing partial game state may be used as well if needed.
- [ ] If any attribute value changes through external means, the games must react accordingly, or otherwise correct themselves to be in a valid state.
- [ ] There should be a central high-score value which shows the high-score along with the name of the game which won the high score, also its own HTML element
- [ ] The game which accomplished the highscore should be highlighted somehow
- [ ] Keybord navigation must be possible


# Nice-to-haves (not requirements)

- [ ] Being able to play the game blindfolded with narrator on (i.e., good screen-reader compatibility)
- [ ] Having means to prevent external code from chaging the DOM elements within the game. For example, using the Shadow-DOM
- [ ] Some way to display multiple high-score ranks, e.g. top 5
- [ ] Having the games able to be moved around or re-arranged on screen