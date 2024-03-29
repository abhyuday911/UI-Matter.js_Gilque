const canvas = document.querySelector("#canvas"),
  shootbtn = document.querySelector(".shootbtn"),
  main = document.getElementById("main");
let intervalRunning = !1,
  intervalRunning2 = !1;
var intervalId1,
  intervalId2,
  Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Constraint = Matter.Constraint,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;
shootbtn.addEventListener("mouseenter", (n) => {
  intervalRunning
    ? (clearInterval(intervalId1), (intervalRunning = !1))
    : ((intervalId1 = setInterval(shoot, 60)), (intervalRunning = !0));
}),
  shootbtn.addEventListener("mouseleave", (n) => {
    intervalRunning
      ? (clearInterval(intervalId1), (intervalRunning = !1))
      : ((intervalId1 = setInterval(shoot, 60)), (intervalRunning = !0));
  }),
  shootbtn.addEventListener("touchend", (n) => {
    intervalRunning
      ? (clearInterval(intervalId1), (intervalRunning = !1))
      : ((intervalId1 = setInterval(shoot, 60)), (intervalRunning = !0));
  }),
  document.addEventListener("visibilitychange", function () {
    document.hidden
      ? (clearInterval(intervalId1),
        (intervalRunning = !1),
        clearInterval(intervalId2),
        (intervalRunning2 = !1),
        console.log("if chala"))
      : (clearInterval(intervalId2),
        (intervalId2 = setInterval(createobj, 800)),
        (intervalRunning2 = !0),
        console.log("elsechala"));
  }),
  (intervalId2 = setInterval(createobj, 800)),
  (intervalRunning2 = !0);
let innerh = window.innerHeight,
  innerw = window.innerWidth - 7;
var rockOptions = { density: 0.004 },
  anchor = { x: 170, y: 450 };
let varheight,
  engine = Engine.create(),
  bottombondfig = 0,
  radiusconfig = 1;
innerw + 7 < 500
  ? ((varheight = 6 * innerh - innerh / 2),
    (bottombondfig = innerh / 2),
    (radiusconfig = 2))
  : (varheight = 6 * innerh);
let render = Render.create({
  canvas: canvas,
  engine: engine,
  options: {
    background: "transparent",
    wireframes: !1,
    width: innerw,
    height: varheight,
  },
});
function createobj() {
  let n = Bodies.circle(
    Math.random() * (innerw - innerw / 3) + innerw / 5 - 40,
    0,
    40,
    {
      render: { sprite: { texture: "../Assets/dark_insta.png" } },
      restitution: 1,
      density: 0.02,
    }
  );
  Composite.add(engine.world, [n]);
}
Composite.add(engine.world, [
  Bodies.rectangle(
    innerw / 2,
    5 * innerh + innerh / 4 + (innerh - innerh / 4) / 2 + 10 - bottombondfig,
    innerw,
    innerh - innerh / 4,
    {
      isStatic: !0,
      chamfer: { radius: [150 / radiusconfig, 150 / radiusconfig, 0, 0] },
      render: { fillStyle: "transparent" },
    }
  ),
  Bodies.rectangle(
    innerw,
    (5 * innerh) / 2 - 1.7 * (innerh - innerh / 2),
    5,
    6 * innerh - 500,
    { isStatic: !0 }
  ),
  Bodies.rectangle(
    0,
    (5 * innerh) / 2 - 1.5 * (innerh - innerh / 2),
    5,
    6 * innerh - 500,
    { isStatic: !0 }
  ),
]);
const functionName = () => {
  var n = Bodies.circle(280, 100, 3, 30),
    e = Constraint.create({
      pointA: { x: 280, y: 120 },
      bodyB: n,
      pointB: { x: -10, y: -7 },
      stiffness: 0.001,
    });
  Composite.add(engine.world, [e]);
};
var rock = Bodies.polygon(innerw / 10, innerh / 2 + 120, 3, 30, {
    density: 0.05,
  }),
  constraint = Constraint.create({
    pointA: { x: innerw / 10, y: innerh - 200 },
    bodyB: rock,
    pointB: { x: -10, y: -10 },
    length: 0.06,
    damping: 0.01,
    stiffness: 0.05,
  });
Composite.add(engine.world, [constraint, rock]);
var body = Bodies.polygon(innerw / 3, 100, 4, 30, {
    chamfer: { radius: [5, 2, 4, 2] },
  }),
  constraint1 = Constraint.create({
    pointA: { x: innerw / 3, y: 120 },
    bodyB: body,
    pointB: { x: -10, y: -10 },
    stiffness: 0.01,
    damping: 0.05,
  });
function shoot() {
  Body.setSpeed(rock, Math.floor(25 * (Math.random() + Math.random()))),
    (rock = Bodies.polygon(innerw / 12, innerh / 2 + 140, 3, 30, {
      density: 0.02,
      friction: 0,
    })),
    Composite.add(engine.world, rock),
    (constraint.bodyB = rock);
}
Composite.add(engine.world, [body, constraint1]);
let ground = Bodies.rectangle(innerw / 2, innerh - 15, innerw, 30, {
  isStatic: !0,
  angle: 0 * Math.PI,
  render: { fillStyle: "#222" },
});
(body = Bodies.polygon(innerw / 1.2, innerh / 1.5, 4, 40, {
  density: 1,
  chamfer: { radius: 5 },
})),
  (constraint1 = Constraint.create({
    pointA: { x: innerw / 1.25, y: innerh / 1.9 },
    bodyB: body,
    pointB: { x: -10, y: -10 },
    stiffness: 0.01,
    damping: 0.05,
  }));
Composite.add(engine.world, [body, constraint1]);
body = Bodies.rectangle(innerw / 3.5 + 5, innerh + 150 + 50, 350, 20, {
  restitution: 0.5,
  density: 0.2,
  chamfer: { radius: 5 },
});
var body1 = Bodies.rectangle(innerw / 3.5 + 10, innerh + 150, 205, 20, {
  restitution: 0.5,
  density: 0.2,
  chamfer: { radius: 5 },
});
Composite.add(engine.world, [body, body1]);
(body = Bodies.rectangle(
  innerw / 3.5,
  innerh + 150 + innerh / 2.5 - 40,
  355,
  405,
  {
    density: 0.03,
    chamfer: { radius: 15 },
    render: { sprite: { texture: "../Assets/c1.png" } },
  }
)),
  (constraint1 = Constraint.create({
    pointA: { x: innerw / 3.5 - 177.5, y: innerh + innerh / 9 },
    bodyB: body,
    pointB: { x: -147.5, y: -182.5 },
    stiffness: 0.001,
    damping: 0.05,
  }));
var constraint2 = Constraint.create({
  pointA: { x: innerw / 3.5 + 177.5, y: innerh + innerh / 9 },
  bodyB: body,
  pointB: { x: 147.5, y: -182.5 },
  stiffness: 0.001,
  damping: 0.05,
});
Composite.add(engine.world, [body, constraint1, constraint2]);
(body = Bodies.rectangle(
  innerw - innerw / 3.5,
  innerh + 150 + innerh / 2.5 - 40 + innerh / 4,
  355,
  405,
  {
    density: 0.03,
    chamfer: { radius: 15 },
    render: { sprite: { texture: "../Assets/c2.png" } },
  }
)),
  (constraint1 = Constraint.create({
    pointA: {
      x: innerw - innerw / 3.5 - 177.5,
      y: innerh + innerh / 9 + innerh / 4,
    },
    bodyB: body,
    pointB: { x: -147.5, y: -182.5 },
    stiffness: 0.001,
    damping: 0.05,
  })),
  (constraint2 = Constraint.create({
    pointA: {
      x: innerw - innerw / 3.5 + 177.5,
      y: innerh + innerh / 9 + innerh / 4,
    },
    bodyB: body,
    pointB: { x: 147.5, y: -182.5 },
    stiffness: 0.001,
    damping: 0.05,
  }));
Composite.add(engine.world, [body, constraint1, constraint2]);
body = Bodies.rectangle(
  innerw / 3.5,
  innerh + 150 + innerh / 2.5 - 40 + 405 + 150,
  355,
  405,
  {
    density: 0.03,
    chamfer: { radius: 15 },
    render: { sprite: { texture: "../Assets/c3.png" } },
  }
);
var c3constraint1 = Constraint.create({
    pointA: { x: innerw / 3.5 - 177.5, y: innerh + innerh / 9 + 405 + 150 },
    bodyB: body,
    pointB: { x: -147.5, y: -182.5 },
    stiffness: 0.001,
    damping: 0.05,
  }),
  c3constraint2 = Constraint.create({
    pointA: { x: innerw / 3.5 + 177.5, y: innerh + innerh / 9 + 405 + 150 },
    bodyB: body,
    pointB: { x: 147.5, y: -182.5 },
    stiffness: 0.001,
    damping: 0.05,
  });
Composite.add(engine.world, [body, c3constraint1, c3constraint2]);
(body = Bodies.rectangle(
  innerw / 3.5 + 5,
  innerh + 150 + 50 + 405 + 150,
  350,
  20,
  { restitution: 0.5, density: 0.2, chamfer: { radius: 5 } }
)),
  (body1 = Bodies.rectangle(
    innerw / 3.5 + 50,
    innerh + 150 + 405 + 150,
    205,
    20,
    { restitution: 0.5, density: 0.2, chamfer: { radius: 5 } }
  ));
Composite.add(engine.world, [body, body1]);
var body4 = Bodies.rectangle(
  innerw - innerw / 3.5,
  innerh + 150 + innerh / 2.5 - 40 + innerh / 4 + 405 + 150,
  355,
  405,
  {
    density: 0.03,
    chamfer: { radius: 15 },
    render: { sprite: { texture: "../Assets/c4.png" } },
  }
);
(constraint1 = Constraint.create({
  pointA: {
    x: innerw - innerw / 3.5 - 177.5,
    y: innerh + innerh / 9 + innerh / 4 + 405 + 150,
  },
  bodyB: body4,
  pointB: { x: -147.5, y: -182.5 },
  stiffness: 0.001,
  damping: 0.05,
})),
  (constraint2 = Constraint.create({
    pointA: {
      x: innerw - innerw / 3.5 + 177.5,
      y: innerh + innerh / 9 + innerh / 4 + 405 + 150,
    },
    bodyB: body4,
    pointB: { x: 147.5, y: -182.5 },
    stiffness: 0.001,
    damping: 0.05,
  }));
Composite.add(engine.world, [body4, constraint1, constraint2]);
(body4 = Bodies.rectangle(
  (innerw - innerw / 2.5) / 2,
  2 * innerh + innerh / 9 + innerh / 4 + 405 + 150 + innerh / 4 - innerh / 7,
  innerw - innerw / 2.5,
  innerw / 8,
  {
    density: 0.055,
    chamfer: { radius: 15 },
    render: { sprite: { texture: "../Assets/d1.png" } },
  }
)),
  (constraint2 = Constraint.create({
    pointA: {
      x: innerw - innerw / 5 - (innerw - innerw / 5) / 2 - innerw / 30,
      y: 2 * innerh + innerh / 9 + innerh / 4 + 405 + 150,
    },
    bodyB: body4,
    pointB: { x: -20, y: -innerw / 16 },
    stiffness: 0.001,
    damping: 0.05,
  }));
Composite.add(engine.world, [body4, constraint2]);
(body4 = Bodies.rectangle(
  innerw - innerw / 10,
  2 * innerh + innerh / 9 + innerh / 4 + 405 + 80 + innerh / 4,
  innerw - innerw / 1.5,
  innerh / 6,
  {
    density: 0.025,
    chamfer: { radius: 15 },
    render: { sprite: { texture: "../Assets/d2.png" } },
  }
)),
  (constraint2 = Constraint.create({
    pointA: {
      x: innerw - (innerw - innerw / 2.5) / 2,
      y: 2 * innerh + innerh / 9 + innerh / 2 + 405 + 150,
    },
    bodyB: body4,
    pointB: { x: 40, y: -40 },
    stiffness: 0.001,
    damping: 0.05,
  }));
Composite.add(engine.world, [body4, constraint2]), Render.run(render);
let runner = Runner.create();
Runner.run(runner, engine);
let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: { stiffness: 0.01, render: { visible: !1 } },
  });
mouseConstraint.mouse.element.removeEventListener(
  "mousewheel",
  mouseConstraint.mouse.mousewheel
),
  mouseConstraint.mouse.element.removeEventListener(
    "DOMMouseScroll",
    mouseConstraint.mouse.mousewheel
  ),
  Composite.add(engine.world, mouseConstraint);
