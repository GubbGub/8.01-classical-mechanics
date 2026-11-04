/* Formula sheet, symbol key, and each week's key ideas. Math is written in LaTeX and drawn by KaTeX.
   LEARN: in JavaScript strings a backslash must be doubled, so LaTeX's \frac is written "\\frac".
   In the key ideas, anything between $ signs is math; the rest is plain text. */

window.KEY_IDEAS = [
  /* 0 Vectors */
  ["Components: $\\vec A = A_x\\,\\hat\\imath + A_y\\,\\hat\\jmath$, with $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$",
   "Magnitude: $A = \\sqrt{A_x^2 + A_y^2}$",
   "Vectors add component by component: $(\\vec A + \\vec B)_x = A_x + B_x$"],
  /* 1 Kinematics */
  ["Definitions: $v = \\dfrac{dx}{dt}$, $\\; a = \\dfrac{dv}{dt} = \\dfrac{d^2x}{dt^2}$",
   "Constant acceleration: $x(t) = x_0 + v_0 t + \\tfrac12 a t^2$, $\\; v(t) = v_0 + a t$",
   "Going backwards with integrals: $v(t) = v_0 + \\int_0^t a\\,dt'$, $\\; x(t) = x_0 + \\int_0^t v\\,dt'$",
   "Projectiles: $x$ and $y$ are independent; only $y$ accelerates, with $a_y = -g$"],
  /* 2 Newton's laws */
  ["Second law, one equation per direction: $\\vec F_{\\text{net}} = m\\vec a$",
   "Third law: $\\vec F_{1\\,\\text{on}\\,2} = -\\vec F_{2\\,\\text{on}\\,1}$",
   "Gravity: $F = \\dfrac{G m_1 m_2}{r^2}$, so at Earth's surface $g = \\dfrac{G M_E}{R_E^2}$",
   "Friction $f_s \\le \\mu_s N$, $\\; f_k = \\mu_k N$. Spring: $F = -kx$"],
  /* 3 Circular motion */
  ["Arc length and speed: $s = R\\theta$, $\\; v = R\\omega$, $\\; T = \\dfrac{2\\pi}{\\omega}$",
   "Centripetal (toward the center): $a_r = \\dfrac{v^2}{R} = R\\omega^2$",
   "Tangential: $a_t = R\\alpha$",
   "The net inward force must equal $m v^2/R$. It is never a separate, extra force"],
  /* 4 Drag, constraints, continuous systems */
  ["Constraint conditions: a fixed rope length links the accelerations, e.g. $a_1 = -a_2$",
   "Massive rope: tension changes along it; analyze a small element $dm$ and let it shrink",
   "Drag: $F = -bv$ at low speed, $\\; F = -\\tfrac12 C\\rho A v^2$ at high speed",
   "Terminal velocity where drag balances weight: $v_t = \\dfrac{mg}{b}$ (low-speed case)"],
  /* 5 Momentum and impulse */
  ["Momentum $\\vec p = m\\vec v$; impulse $\\vec J = \\int \\vec F\\,dt = \\Delta\\vec p$",
   "Systems: $\\vec F_{\\text{ext}} = \\dfrac{d\\vec P_{\\text{sys}}}{dt}$; internal forces cancel in pairs",
   "No external force in a direction means momentum is conserved in that direction",
   "Center of mass: $\\vec R_{\\text{cm}} = \\dfrac{1}{M}\\sum m_i \\vec r_i$, and $\\vec F_{\\text{ext}} = M\\vec A_{\\text{cm}}$"],
  /* 6 Continuous mass transfer */
  ["Relative velocity: $\\vec v_{\\text{ground}} = \\vec v_{\\text{rel}} + \\vec v_{\\text{frame}}$",
   "Recoil: total momentum before equals total momentum after",
   "Variable mass: $m\\dfrac{d\\vec v}{dt} = \\vec F_{\\text{ext}} + \\vec u\\,\\dfrac{dm}{dt}$, where $\\vec u$ is the ejected mass's velocity relative to the rocket",
   "No external force: $\\Delta v = u\\ln\\dfrac{m_i}{m_f}$"],
  /* 7 Kinetic energy and work */
  ["Kinetic energy: $K = \\tfrac12 m v^2$",
   "Work: $W = \\int \\vec F\\cdot d\\vec r$. Only the component of force along the motion counts",
   "Work–energy theorem: $W_{\\text{net}} = \\Delta K$",
   "Power: $P = \\dfrac{dW}{dt} = \\vec F\\cdot\\vec v$"],
  /* 8 Potential energy */
  ["For a conservative force: $\\Delta U = -\\int \\vec F\\cdot d\\vec r$",
   "$U_g = mgy$, $\\; U_s = \\tfrac12 k x^2$, $\\; U_G = -\\dfrac{G m_1 m_2}{r}$",
   "$E = K + U$ stays constant with only conservative forces; otherwise $W_{\\text{nc}} = \\Delta E$",
   "Force from potential: $F_x = -\\dfrac{dU}{dx}$. Equilibrium where $dU/dx = 0$, stable at a minimum"],
  /* 9 Collisions */
  ["Momentum is conserved in a collision: $\\sum \\vec p_{\\text{before}} = \\sum \\vec p_{\\text{after}}$",
   "Elastic: kinetic energy is also conserved",
   "1D elastic shortcut: $v_1 - v_2 = -(v_1' - v_2')$",
   "Totally inelastic (they stick): $v_f = \\dfrac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$"],
  /* 10 Rotational motion */
  ["Rotational kinetic energy: $K = \\tfrac12 I\\omega^2$",
   "Moment of inertia: $I = \\sum m_i r_i^2 = \\int r^2\\,dm$",
   "Parallel axis theorem: $I = I_{\\text{cm}} + M d^2$",
   "Torque: $\\vec\\tau = \\vec r\\times\\vec F$, and $\\tau = I\\alpha$ about a fixed axis"],
  /* 11 Angular momentum */
  ["Point particle: $\\vec L = \\vec r\\times\\vec p$",
   "Rigid body about a fixed symmetry axis: $L = I\\omega$",
   "$\\vec\\tau_{\\text{ext}} = \\dfrac{d\\vec L}{dt}$. No external torque means $\\vec L$ is conserved",
   "Angular impulse: $\\int \\vec\\tau\\,dt = \\Delta\\vec L$"],
  /* 12 Rolling */
  ["Rolling without slipping: $v_{\\text{cm}} = R\\omega$, $\\; a_{\\text{cm}} = R\\alpha$; the contact point is momentarily at rest",
   "Energy: $K = \\tfrac12 M v_{\\text{cm}}^2 + \\tfrac12 I_{\\text{cm}}\\,\\omega^2$",
   "Use both $\\vec F_{\\text{ext}} = M\\vec a_{\\text{cm}}$ and $\\tau_{\\text{cm}} = I_{\\text{cm}}\\,\\alpha$",
   "Angular momentum = orbital + spin: $\\vec L = \\vec R_{\\text{cm}}\\times M\\vec V_{\\text{cm}} + I_{\\text{cm}}\\vec\\omega$"]
];

/* Each group: title, the course weeks it covers, and rows of [LaTeX, short note]. */
window.FORMULAS = [
  { t: "Vectors", w: "Review", rows: [
    ["\\vec A = A_x\\hat\\imath + A_y\\hat\\jmath + A_z\\hat k", "components"],
    ["A = \\sqrt{A_x^2 + A_y^2 + A_z^2}", "magnitude"],
    ["A_x = A\\cos\\theta,\\quad A_y = A\\sin\\theta", "from angle"],
    ["\\vec A\\cdot\\vec B = AB\\cos\\theta = A_xB_x + A_yB_y + A_zB_z", "dot product"],
    ["|\\vec A\\times\\vec B| = AB\\sin\\theta", "cross product, right-hand rule"]
  ]},
  { t: "Kinematics", w: "Week 1", rows: [
    ["v = \\dfrac{dx}{dt},\\qquad a = \\dfrac{dv}{dt} = \\dfrac{d^2x}{dt^2}", "definitions"],
    ["x = x_0 + v_0 t + \\tfrac12 a t^2", "constant a"],
    ["v = v_0 + a t", "constant a"],
    ["v^2 = v_0^2 + 2a(x - x_0)", "constant a, no t"],
    ["v(t) = v_0 + \\int_0^t a\\,dt'", "any a(t)"]
  ]},
  { t: "Forces", w: "Weeks 2 & 4", rows: [
    ["\\vec F_{\\text{net}} = m\\vec a", "Newton's 2nd law"],
    ["\\vec F_{1\\,\\text{on}\\,2} = -\\vec F_{2\\,\\text{on}\\,1}", "Newton's 3rd law"],
    ["F_G = \\dfrac{G m_1 m_2}{r^2},\\qquad g = \\dfrac{G M_E}{R_E^2}", "gravitation"],
    ["f_s \\le \\mu_s N,\\qquad f_k = \\mu_k N", "friction"],
    ["F_s = -kx", "Hooke's law"],
    ["F_D = -bv \\quad\\text{or}\\quad F_D = -\\tfrac12 C\\rho A v^2", "drag, low / high speed"]
  ]},
  { t: "Circular motion", w: "Week 3", rows: [
    ["s = R\\theta,\\quad v = R\\omega,\\quad \\omega = \\dfrac{d\\theta}{dt}", "arc, speed"],
    ["a_r = \\dfrac{v^2}{R} = R\\omega^2", "centripetal, inward"],
    ["a_t = R\\alpha,\\quad \\alpha = \\dfrac{d\\omega}{dt}", "tangential"],
    ["T = \\dfrac{2\\pi}{\\omega} = \\dfrac{1}{f}", "period"]
  ]},
  { t: "Momentum", w: "Weeks 5, 6 & 9", rows: [
    ["\\vec p = m\\vec v,\\qquad \\vec J = \\int \\vec F\\,dt = \\Delta\\vec p", "impulse"],
    ["\\vec F_{\\text{ext}} = \\dfrac{d\\vec P}{dt} = M\\vec A_{\\text{cm}}", "systems"],
    ["\\vec R_{\\text{cm}} = \\dfrac{1}{M}\\sum m_i\\vec r_i = \\dfrac{1}{M}\\int \\vec r\\,dm", "center of mass"],
    ["m\\dfrac{d\\vec v}{dt} = \\vec F_{\\text{ext}} + \\vec u\\,\\dfrac{dm}{dt}", "variable mass"],
    ["\\Delta v = u\\ln\\dfrac{m_i}{m_f}", "rocket, no external force"],
    ["v_1 - v_2 = -(v_1' - v_2')", "1D elastic collision"]
  ]},
  { t: "Work and energy", w: "Weeks 7 & 8", rows: [
    ["K = \\tfrac12 m v^2", "kinetic energy"],
    ["W = \\int \\vec F\\cdot d\\vec r,\\qquad W_{\\text{net}} = \\Delta K", "work–energy theorem"],
    ["P = \\dfrac{dW}{dt} = \\vec F\\cdot\\vec v", "power"],
    ["\\Delta U = -\\int \\vec F_c\\cdot d\\vec r,\\qquad F_x = -\\dfrac{dU}{dx}", "potential energy"],
    ["U_g = mgy,\\quad U_s = \\tfrac12 kx^2,\\quad U_G = -\\dfrac{Gm_1m_2}{r}", "common potentials"],
    ["W_{\\text{nc}} = \\Delta E = \\Delta K + \\Delta U", "mechanical energy"]
  ]},
  { t: "Rotation", w: "Weeks 10–12", rows: [
    ["K = \\tfrac12 I\\omega^2,\\qquad I = \\int r^2\\,dm", "rotational energy"],
    ["I = I_{\\text{cm}} + M d^2", "parallel axis"],
    ["\\vec\\tau = \\vec r\\times\\vec F,\\qquad \\tau = rF\\sin\\theta", "torque"],
    ["\\tau_{\\text{net}} = I\\alpha,\\qquad P = \\tau\\omega", "fixed axis"],
    ["\\vec L = \\vec r\\times\\vec p,\\qquad L = I\\omega", "angular momentum"],
    ["\\vec\\tau_{\\text{ext}} = \\dfrac{d\\vec L}{dt}", "change in L"],
    ["v_{\\text{cm}} = R\\omega,\\quad K = \\tfrac12 M v_{\\text{cm}}^2 + \\tfrac12 I_{\\text{cm}}\\omega^2", "rolling without slipping"]
  ]},
  { t: "Moments of inertia", w: "Week 10", rows: [
    ["I = \\tfrac{1}{12} M L^2", "rod, about center"],
    ["I = \\tfrac13 M L^2", "rod, about one end"],
    ["I = M R^2", "hoop or thin cylinder"],
    ["I = \\tfrac12 M R^2", "solid disc or cylinder"],
    ["I = \\tfrac25 M R^2", "solid sphere"],
    ["I = \\tfrac23 M R^2", "thin spherical shell"]
  ]}
];

/* Also on the AP Physics C: Mechanics sheet, covered in later chapters of the 8.01 notes (Ch. 23–25). */
window.FORMULAS_EXTRA = [
  ["x(t) = A\\cos(\\omega t + \\phi)", "simple harmonic motion"],
  ["\\omega = \\sqrt{k/m},\\qquad T = 2\\pi\\sqrt{m/k}", "mass on a spring"],
  ["T = 2\\pi\\sqrt{\\ell/g}", "simple pendulum, small angles"],
  ["T^2 = \\dfrac{4\\pi^2}{G M}\\,a^3", "Kepler's third law"]
];

window.CONSTANTS = [
  ["g = 9.8\\ \\text{m/s}^2", "gravitational acceleration at Earth's surface"],
  ["G = 6.67\\times10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2", "universal gravitational constant"],
  ["M_E = 5.97\\times10^{24}\\ \\text{kg}", "mass of Earth"],
  ["R_E = 6.37\\times10^{6}\\ \\text{m}", "radius of Earth"]
];

/* Symbol key: [LaTeX symbol, meaning, SI unit] */
window.SYMBOLS = [
  ["x,\\ y,\\ \\vec r", "position", "m"],
  ["t", "time", "s"],
  ["\\vec v", "velocity", "m/s"],
  ["\\vec a", "acceleration", "m/s²"],
  ["m,\\ M", "mass", "kg"],
  ["\\vec F", "force", "N = kg·m/s²"],
  ["N", "normal force", "N"],
  ["\\mu_s,\\ \\mu_k", "static, kinetic friction coefficient", "none"],
  ["k", "spring constant", "N/m"],
  ["b,\\ C", "linear drag constant, drag coefficient", "kg/s, none"],
  ["\\rho,\\ A", "density, cross-sectional area", "kg/m³, m²"],
  ["\\theta", "angle", "rad"],
  ["\\omega", "angular velocity", "rad/s"],
  ["\\alpha", "angular acceleration", "rad/s²"],
  ["R,\\ r", "radius, distance from an axis or origin", "m"],
  ["T,\\ f", "period, frequency", "s, Hz"],
  ["\\vec p,\\ \\vec P", "momentum (one object, system)", "kg·m/s"],
  ["\\vec J", "impulse", "N·s"],
  ["\\vec u", "velocity of ejected mass, relative to the rocket", "m/s"],
  ["K,\\ U,\\ E", "kinetic, potential, mechanical energy", "J"],
  ["W", "work", "J"],
  ["P", "power", "W = J/s"],
  ["I", "moment of inertia", "kg·m²"],
  ["d", "distance between parallel axes", "m"],
  ["\\vec\\tau", "torque", "N·m"],
  ["\\vec L", "angular momentum", "kg·m²/s"],
  ["\\hat\\imath,\\ \\hat\\jmath,\\ \\hat k", "unit vectors along x, y, z", "none"],
  ["v_0,\\ v_i", "initial value (subscript 0 or i)", ""],
  ["v_f", "final value", ""],
  ["\\vec V_{\\text{cm}},\\ \\vec F_{\\text{ext}},\\ \\vec F_{\\text{net}}", "center of mass, external, total", ""],
  ["a_r,\\ a_t", "radial, tangential components", ""],
  ["\\Delta x", "change in x (final − initial)", ""]
];
