/* Modelo didáctico 1.0. No representa datos ni resultados del SII.
   Lee primero paso(): allí se encuentran las reglas de interacción. */
class Mercado {
  constructor(p = {}) {
    // Condiciones iniciales y parámetros del experimento.
    this.p = {
      n: 20, c: 200, alpha: 0, lealtad: 0, capacidad: 200,
      inicial: 'igual', semilla: 42, ...p
    };
    const q = this.p;
    if (!Number.isInteger(q.n) || !Number.isInteger(q.c) ||
        q.n < 2 || q.c < q.n || q.capacidad < Math.ceil(q.c / q.n) ||
        q.alpha < 0 || q.lealtad < 0 || q.lealtad > 1) {
      throw Error('Configuración inválida');
    }
    this.random = rng(q.semilla);
    this.t = 0;
    this.proveedor = Array.from({length: q.c}, (_, j) =>
      q.inicial === 'concentrada'
        ? (j < q.c / 2 ? 0 : 1 + (j - Math.ceil(q.c / 2)) % (q.n - 1))
        : j % q.n
    );
    this.ventas = this.contar();
    this.historia = [this.resumen()];
    this.traza = [];
  }

  contar() {
    const a = Array(this.p.n).fill(0);
    this.proveedor.forEach(i => a[i]++);
    return a;
  }

  paso() {
    const q = this.p;
    // Las decisiones usan las ventas del período anterior.
    const prev = [...this.ventas];
    const siguiente = Array(q.n).fill(0);
    const orden = Array.from({length: q.c}, (_, i) => i);
    // Mezclar el orden de los clientes evita un orden fijo de prioridad.
    for (let j = orden.length - 1; j > 0; j--) {
      const k = Math.floor(this.random() * (j + 1));
      [orden[j], orden[k]] = [orden[k], orden[j]];
    }
    this.traza = [];
    for (const cliente of orden) {
      const anterior = this.proveedor[cliente];
      let elegido = -1;
      let motivo = 'elección ponderada';
      // Fidelidad: conservar proveedor si todavía tiene capacidad.
      if (this.random() < q.lealtad && siguiente[anterior] < q.capacidad) {
        elegido = anterior;
        motivo = 'fidelidad';
      } else {
        // REGLA PARA EXPLORAR: cambia v+1 por v+5.
        // v: ventas anteriores; alpha: 0 en A/C, 1 en B/D.
        // Una empresa sin capacidad recibe peso cero.
        const pesos = prev.map((v, i) =>
          siguiente[i] < q.capacidad ? Math.pow(v+1,q.alpha) : 0
        );
        const total = pesos.reduce((a, b) => a + b, 0);
        if (total <= 0) throw Error('Sin capacidad');
        // Sorteo: la probabilidad de cada empresa es su peso / total.
        let u = this.random() * total;
        for (let i = 0; i < q.n; i++) {
          u -= pesos[i];
          if (u < 0 && pesos[i] > 0) {
            elegido = i;
            break;
          }
        }
        if (elegido < 0) elegido = pesos.findLastIndex(w => w > 0);
      }
      siguiente[elegido]++;
      this.proveedor[cliente] = elegido;
      if (this.traza.length < 8) {
        this.traza.push({
          cliente: cliente + 1, antes: anterior + 1,
          despues: elegido + 1, motivo
        });
      }
    }
    this.ventas = siguiente;
    this.t++;
    this.historia.push(this.resumen());
    return this.resumen();
  }

  resumen() {
    // Indicadores de la distribución, no reglas de comportamiento.
    const v = this.ventas;
    const orden = [...v].sort((a, b) => a - b);
    const n = v.length;
    const total = v.reduce((a, b) => a + b, 0);
    return {
      periodo: this.t, ventas: [...v], mayor: Math.max(...v) / total,
      gini: orden.reduce((s, x, i) => s + (2 * (i + 1) - n - 1) * x, 0) / (n * total),
      activos: v.filter(x => x > 0).length
    };
  }

  exportar() {
    return {
      version: '1.0', naturaleza: 'Simulación didáctica; no son datos SII',
      parametros: this.p, historia: this.historia,
      trazaUltimoPeriodo: this.traza
    };
  }
}

// Generador seudoaleatorio: la misma semilla reproduce la misma secuencia.
// No hace falta modificar esta función para la actividad inicial.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
if (typeof module !== 'undefined') module.exports = {Mercado};
