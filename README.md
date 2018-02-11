# etch_sketch
#
This is a project assigned by the Odin Project. (https://www.theodinproject.com) 

As the title suggests, it is a sketching website where you can paint using only the mouse cursor

By default, the easel generates a 16x16 grid, but the user can set any 1:1 proportional grid

Features
----
- jQuery-less
- Gradient (pencil) painting
- <s>Generate combined to Generate / Clear. Functionality remains the same.</s> Generate and clear separated to improve performance
- Textbox for grid size.
- CSS-grid for easel.
- 90% of look complete complete

Issues
----

- <s>Safari does not render the easel properly when a grid other than default is genereated.</s> Fixed with CSS-grid
- Input lag when using pencil (high CPU usage)
