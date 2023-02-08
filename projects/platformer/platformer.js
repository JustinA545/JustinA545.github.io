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
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

      createPlatform(10, 610, 32,200 );

     createPlatform(100, 500, 50, 20);
       
      createPlatform(300, 400, 50, 20);

      createPlatform(500, 600, 50, 20);

      createPlatform(750, 500, 50, 20);
  
      createPlatform(975, 370, 50, 20);
    
      createPlatform(1200, 500, 50, 20);

      createPlatform(1300, 400, 50, 20);

      createPlatform(1375, 700, 200, 2000);
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
      
    createCollectable("steve", 100, 440, 0., 1.5);
      createCollectable("kennedi", 310, 350, 0, 1.5);
      createCollectable("grace", 500, 554, 0, 1.5);
      createCollectable("max", 755, 455, 0, 1.5);
      createCollectable("steve", 970, 330, 0, 1.5);
      createCollectable("kennedi", 1200, 450, 0, 1.5);
      createCollectable("grace", 1295, 350, 0, 1.5);

      createCollectable("grace", 1400, 650, 0, 1.5);
      createCollectable("steve", 1440, 650, 0, 1.5);
      createCollectable("kennedi", 1480, 650, 0, 1.5);
      createCollectable("max", 1510, 650, 0, 1.5);
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)

    createCannon("right", 300, 1000);
    createCannon("top", 600, 1000);
    createCannon("left", 300, 1000);

    

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
