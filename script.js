var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Body = Matter.Body,
Events = Matter.Events,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Composite = Matter.Composite,
Bodies = Matter.Bodies;


// create an engine
var engine = Engine.create();


// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var bodyA = Bodies.rectangle(100, 200, 50, 50, { isStatic: true, render: { fillStyle: '#060a19' } }),
    bodyB = Bodies.rectangle(200, 200, 50, 50),
    bodyC = Bodies.rectangle(300, 200, 50, 50),
    bodyD = Bodies.rectangle(400, 200, 50, 50),
    bodyE = Bodies.rectangle(550, 200, 50, 50),
    bodyF = Bodies.rectangle(700, 200, 50, 50),
    bodyG = Bodies.circle(400, 100, 25, { render: { fillStyle: '#060a19' } }),
    partA = Bodies.rectangle(600, 200, 120, 50, { render: { fillStyle: '#060a19' } }),
    partB = Bodies.rectangle(660, 200, 50, 190, { render: { fillStyle: '#060a19' } }),
    compound = Body.create({
            parts: [partA, partB],
            isStatic: true
        });

// add all of the bodies to the world
Composite.add(engine.world, [bodyA, bodyB, bodyC, bodyD, bodyE, bodyF, bodyG, compound]);
Composite.add(engine.world, [
    // walls
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);