$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     // toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatform(x,y,width,height)
    
    createPlatform(1100, 50, 100, 10)
    createPlatform(650, 450, 100, 50)
    createPlatform(220, 620, 100, 50)
    createPlatform(850, 500, 200, 30)
    createPlatform(420, 520, 220, 50)
    createPlatform(1120,420, 120, 100)

    // TODO 3 - Create Collectables

    createCollectable("steve", 1200, 100, 1, 1);
    createCollectable("diamond", 250, 170, 1, 1);
    createCollectable("steve", 950, 50, 1, 1);
    createCollectable("diamond", 700, 170, 1, 1);

    
    // TODO 4 - Create Cannons

 //createCannon("top",200,4)
  createCannon("right", 450, 2000)
  createCannon("left", 450, 2000)
  createCannon("top", 500, 2000)
  createCannon("bottom", 450, 2000)
  createCannon("top", 1000, 2000)
  createCannon("bottom", 1000, 2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
