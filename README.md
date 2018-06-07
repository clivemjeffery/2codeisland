# 2Code Island

## A way to make an adventure game in 2Code.

Start by designing a map in a graphics tool. Imported graphics work best when they are kept in the stretch format applied when they are added to the background. A size of 800x600 seems to work well so the original map should be some multiples of these sizes and have a 4:3 aspect ratio. Cut the map up into 800x600 tiles and preload at the beginning of the code to get the ':capture_xx' name for that resource. Add to the maps[] arrays according to position.

The scroller and moves tabs hold code that manages the player's position and reacts when their object appears to go off screen. The code uses the fact that a 2Code object configured to disallow off screen positions will be automatically moved back to the opposite edge if code moves it beyond an edge.

'See code' backed up to code.js when remembered.

## Things to do

* The map should be exactly as wanted before cutting up and setting up in the setup code. At least if lots of rework is to be avoided. So... finish the map for the demo.
* Prototype how to show, hide and react to hazzards on particular map sections. Try to make this part of the code sufficiently atomic that the children can easily use it.
* Prototype an inventory of items collected or tasks accomplished so that overall success can be checked. 
