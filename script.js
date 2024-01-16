const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

const engine = Engine.create();

const render = Render.create({
    element: document.body,
    engine: engine
});

let circle_x = 450
let circle_y = 100

let keyX = 300
let keyY = 200

function moveObject(x, y) {
    Body.setPosition(bodyC, {
        x: bodyC.position.x + x,
        y: bodyC.position.y + y
    });

    Render.run(render);
}

window.addEventListener('keypress', (event) => {
    switch (event.key) {
        case 'd':
            moveObject(5, 0)
            break
        case 'w':
            moveObject(0, -50)
            break
        case 'a':
            moveObject(-5, 0)
            break
        case 's':
            moveObject(0, 5)
            break
    }
})

const bodyA = Bodies.rectangle(100, 200, 50, 50, { isStatic: false, render: { fillStyle: '#fffff' } }),
    bodyB = Bodies.rectangle(200, 200, 50, 50),
    bodyC = Bodies.rectangle(keyX, keyY, 50, 50),
    bodyD = Bodies.rectangle(400, 200, 50, 50),
    bodyE = Bodies.rectangle(550, 200, 50, 50),
    bodyF = Bodies.rectangle(700, 200, 50, 50),
    bodyG = Bodies.circle(circle_x, circle_y, 25, { render: { fillStyle: '#FFFF00' } }),  //yellow hex

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

Mouse.create()

Render.run(render);

const runner = Runner.create();

Runner.run(runner, engine);