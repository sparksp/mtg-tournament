# Tournament Flows
Source: [Tournament Flows on Google Docs](https://docs.google.com/document/d/13yMRQv2FChbhES158n7BA3Z7GUSlLCzFeruHWbFwj7A/edit?usp=sharing)
Updated: 2017-04-20T09:17

## Application Flow
Main Menu ⇨ Deck Construction ⇨ Generate Pairings ⇨ Matches ⇨ Scoring

## Main Menu
1. Select Format: Draft/Constructed/Sealed (Ignoring other formats for now)
2. Select Tournament Type:  Single Elimination/Swiss/Round Robin
3. If drafting/sealed, select deck building time limit (10-30 minutes for draft, 20-50 minutes for sealed, or unlimited)
4. Select round timer (30-50 minutes or Unlimited)
5. Enter player names.  Option: Enter seed (for Single Elimination)
6. Go!

## Drafting
1. Click “Generate Seating Plan”:  Display seating plan - randomise entrants.  Assume single pod for now.
2. Click "Start Draft": Display "Pack 1" and "Pass to the Left" graphic.
3. Click "Next Pack": Display "Pack 2" and "Pass to the Right" graphic.
4. Click "Next Pack": Display "Pack 3" and "Pass to the Left" graphic.

## Deck Construction (Draft & Sealed)
1. Click "Start Deck Building”:  Display "Deck Building" and timer.
2. When 5 minutes left:  Change colour of timer and display "Add Lands"

## Generate First Round Pairings
### Draft
Click "Generate Pairings": For a pod with an even number of draft players, each player starts playing the player opposite them - for example, in an 8 player draft, matches will be 1v5, 2v6, 3v7 and 4v8.  Seat numbers are in sequential order.  Seat 1 is selected randomly.  If an odd number of players, a Bye is afforded to whomever would be playing the vacant space - for example, in a 7 player draft, the pairings are as for an 8 player draft, bar player 4 who gets a Bye (automatic 2-0 win).

### Constructed/Sealed
Click "Generate Pairings": Randomly pair players and assign tables.  If an odd number of players, one player gets a Buy

### Single Elimination
Click "Generate Pairings": If seeded, for an 8-player playoff the 1st place player plays the 8th place player, the 2nd place player plays the 7th place player, the 3rd place player plays the 6th place player, and the 4th place player plays the 5th place player.  Assign tables randomly.  Tournament tree can be displayed at all times, but should only be updated at the end of the round

```
1____
8       \
         -----
4____   /     \
5              \
                -----
3____          /
6       \     /
         -----
2____   /
7
```

Consider drawing inverse pairings for ranking losers.

## Generate Subsequent Pairings
### Swiss
Click "Generate Pairings":  Generate Swiss pairings.  Table numbers are assigned based on the ranking of the highest ranked player in a match.  If an odd number of players, the lowest ranked player who has not yet had a bye is given a bye.

See: [Numbers of rounds in swiss pairings](http://magic.wizards.com/en/game-info/products/magic-online/swiss-pairings)

### Round Robin
Click "Generate Pairings":  Generate Round Robin pairings.  Table numbers are assigned randomly.

### Single Elimination
Click "Generate Pairings":  In the Second round, the winners of the 1st/8th place and 4th/5th place matches play each other, and the winners of the 2nd/7th place and 3rd/6th place matches play each other. The remaining players play in the last round of the playoff.  Table numbers are assigned randomly.
 
## Matches
Click "Start Round 1": Display countdown timer.  Change colour of timer at the 5 minute mark.  Once timer expires, display "TURNS:  Take 5 additional turns."

## Scoring
Once all scores are recorded, the round timer ends and rankings are displayed.

### Swiss/Round Robin
2-0, 2-1, 1-1-1, 0-2, 1-2, 1-0-1, 0-1-1, 0-0-1.  0-0-3 is recorded for an Intentional Draw, but don't bother with this.
There is a fringe situation with 2HG where matches are best-of-one, and games that end in a draw (i.e. a forced loop board state)

### Single Elimination
2-0, 2-1, 0-2, 1-2, 1-0-1, 0-1-1.  There are no draws in single elimination.

#### Running out of time
In single-elimination rounds, matches may not end in a draw. If all players have equal game wins, the player with the highest life total wins the current game. In the event all players have equal life totals (or are between games and the game wins are tied), the game/match continues until the first life total change that results in one player having a lower life total than the other. https://blogs.magicjudges.org/rules/mtr2-5/

### Tiebreakers
See: [Tournament Rules: Appendix C](https://blogs.magicjudges.org/rules/mtr-appendix-c/)

## Displaying Results
Final results showing various stats should be generated at the conclusion of the tournament:
- Final Ranking
- Player Name
- Score
- Game Win Percentage
- Other Stuff?

## Dropping
I haven't worked out an easy way of doing this yet.

## References
1. [Magic: The Gathering Tournament Rules](https://blogs.magicjudges.org/rules/mtr/)