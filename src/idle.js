const MAX_IDLE = 5000;
let last_active = {};
let idle_check;

function reset_idle(event) {
  last_active[event.type] = performance.now();
}

function detect_idle() {
  clear_idle();
  for (const type of ["mousemove", "keydown"]) {
    if (last_active[type] + MAX_IDLE < performance.now()) {
      window.dispatch("WARN_IDLE", type);
      break;
    }
  }
}

export function setup_idle(reason) {
  window.addEventListener("mousemove", reset_idle);
  window.addEventListener("keydown", reset_idle);
  idle_check = setTimeout(detect_idle, 5000);

  const now = performance.now();
  last_active = {mousemove: now, keydown: now};
}

export function clear_idle(reason) {
  window.removeEventListener("mousemove", reset_idle);
  window.removeEventListener("keydown", reset_idle);
  clearTimeout(idle_check);
}