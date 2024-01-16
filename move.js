export function moveObject(x, y, Body, bodyC) {
    Body.setPosition(bodyC, {
        x: bodyC.position.y + x,
        y: bodyC.position.y + y
    });

    Render.run(render); 
}