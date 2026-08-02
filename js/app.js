'use strict';

const CLAVE = 'm1-vectores-2026-v1';
const TOTAL_ACTIVIDADES = 8;

const datos = {
  conceptos: [
    { id: 'c1', texto: 'Una temperatura de \\(18\\,^\\circ\\mathrm C\\) es una…', correcta: 'Magnitud escalar', opciones: ['Magnitud escalar', 'Magnitud vectorial', 'Dirección', 'Sentido'], explicacion: 'Queda determinada por un número y una unidad.' },
    { id: 'c2', texto: 'La velocidad del viento “20 km/h hacia el este” es una…', correcta: 'Magnitud vectorial', opciones: ['Magnitud escalar', 'Magnitud vectorial', 'Norma nula', 'Recta de acción'], explicacion: 'Incluye magnitud, dirección y sentido.' },
    { id: 'c3', texto: 'Dos vectores con las mismas componentes son…', correcta: 'Equivalentes', opciones: ['Opuestos siempre', 'Equivalentes', 'Perpendiculares', 'Nulos'], explicacion: 'Tienen el mismo módulo, dirección y sentido.' },
    { id: 'c4', texto: 'La flecha de un vector indica principalmente su…', correcta: 'Sentido', opciones: ['Módulo', 'Sentido', 'Componente horizontal', 'Unidad'], explicacion: 'La orientación de la flecha muestra desde dónde parte y hacia dónde se dirige.' }
  ],
  componentes: [
    { id: 'co1', texto: 'Si \\(A=(3,0)\\) y \\(B=(5,2)\\), entonces \\(\\overrightarrow{AB}=\\)', correcta: '\\((2,2)\\)', opciones: ['\\((2,2)\\)', '\\((8,2)\\)', '\\((-2,-2)\\)', '\\((5,2)\\)'], explicacion: 'Punto final menos punto inicial: \\((5-3,2-0)=(2,2)\\).' },
    { id: 'co2', texto: 'El módulo de \\(\\vec a=(3,4)\\) es…', correcta: '\\(5\\)', opciones: ['\\(5\\)', '\\(7\\)', '\\(\\sqrt7\\)', '\\(25\\)'], explicacion: '\\(\\sqrt{3^2+4^2}=\\sqrt{25}=5\\).' },
    { id: 'co3', texto: 'El vector \\(\\vec w=(5,-1)\\) parte de \\(A=(-2,3)\\). Su extremo es…', correcta: '\\(B=(3,2)\\)', opciones: ['\\(B=(3,2)\\)', '\\(B=(7,-4)\\)', '\\(B=(-7,4)\\)', '\\(B=(5,-1)\\)'], explicacion: 'Se suma el vector al punto inicial: \\((-2,3)+(5,-1)=(3,2)\\).' },
    { id: 'co4', texto: 'La distancia entre \\(A=(-4,1)\\) y \\(B=(0,-2)\\) es…', correcta: '\\(5\\)', opciones: ['\\(5\\)', '\\(7\\)', '\\(\\sqrt{13}\\)', '\\(25\\)'], explicacion: '\\(\\sqrt{4^2+(-3)^2}=5\\).' }
  ],
  operaciones: [
    { id: 'op1', texto: 'Con \\(\\vec u=(-2,-1)\\) y \\(\\vec w=(4,-1)\\), \\(\\vec u+\\vec w=\\)', correcta: '\\((2,-2)\\)', opciones: ['\\((2,-2)\\)', '\\((-6,0)\\)', '\\((6,0)\\)', '\\((2,0)\\)'], explicacion: 'Se suman las componentes correspondientes.' },
    { id: 'op2', texto: 'Con \\(\\vec v=(3,-2)\\) y \\(\\vec u=(-2,-1)\\), \\(-3\\vec v+2\\vec v+\\vec u=\\)', correcta: '\\((-5,1)\\)', opciones: ['\\((-5,1)\\)', '\\((1,-3)\\)', '\\((-1,3)\\)', '\\((5,-1)\\)'], explicacion: '\\(-3\\vec v+2\\vec v=-\\vec v=(-3,2)\\); luego se suma \\((-2,-1)\\).' },
    { id: 'op3', texto: 'Si \\(k=-2\\) y \\(\\vec v=(1,3)\\), entonces \\(k\\vec v\\)…', correcta: 'Tiene sentido contrario y doble módulo', opciones: ['Tiene igual sentido y doble módulo', 'Tiene sentido contrario y doble módulo', 'Es perpendicular a \\(\\vec v\\)', 'Tiene la mitad del módulo'], explicacion: 'El signo negativo invierte el sentido y \\(|k|=2\\) duplica el módulo.' },
    { id: 'op4', texto: 'El método del triángulo representa \\(\\vec u+\\vec v\\) colocando…', correcta: 'El origen de \\(\\vec v\\) en el extremo de \\(\\vec u\\)', opciones: ['Los extremos en el origen', 'El origen de \\(\\vec v\\) en el extremo de \\(\\vec u\\)', 'Los vectores sobre rectas perpendiculares', 'Las componentes en orden inverso'], explicacion: 'Luego se une el origen del primero con el extremo del segundo.' }
  ],
  paralelismo: [
    { id: 'pa1', texto: 'Un vector paralelo a \\(\\vec b=(0,3)\\), de sentido contrario y módulo 5 es…', correcta: '\\((0,-5)\\)', opciones: ['\\((0,-5)\\)', '\\((0,5)\\)', '\\((-5,0)\\)', '\\((5,0)\\)'], explicacion: 'Debe conservar la dirección vertical, invertir el sentido y tener longitud 5.' },
    { id: 'pa2', texto: 'El versor con el mismo sentido que \\(\\vec v=(3,4)\\) es…', correcta: '\\(\\left(\\frac35,\\frac45\\right)\\)', opciones: ['\\(\\left(\\frac35,\\frac45\\right)\\)', '\\((3,4)\\)', '\\(\\left(-\\frac35,-\\frac45\\right)\\)', '\\((5,5)\\)'], explicacion: 'Se divide por \\(\\|\\vec v\\|=5\\).' },
    { id: 'pa3', texto: 'Si \\(\\vec u=k\\vec v\\) con \\(k\\lt0\\), los vectores tienen…', correcta: 'Misma dirección y sentido contrario', opciones: ['Misma dirección y sentido contrario', 'Direcciones perpendiculares', 'Mismo sentido siempre', 'Módulo igual a 1'], explicacion: 'Un múltiplo negativo invierte el sentido.' },
    { id: 'pa4', texto: 'Los versores canónicos del plano son…', correcta: '\\(\\hat\\imath=(1,0)\\) y \\(\\hat\\jmath=(0,1)\\)', opciones: ['\\(\\hat\\imath=(1,0)\\) y \\(\\hat\\jmath=(0,1)\\)', '\\((1,1)\\) y \\((-1,-1)\\)', '\\((0,0)\\) y \\((1,1)\\)', '\\((2,0)\\) y \\((0,2)\\)'], explicacion: 'Son los vectores unitarios sobre los ejes positivos.' }
  ],
  producto: [
    { id: 'pr1', texto: 'Si \\(\\vec a=(-2,5)\\) y \\(\\vec b=(4,0)\\), entonces \\(\\vec a\\cdot\\vec b=\\)', correcta: '\\(-8\\)', opciones: ['\\(-8\\)', '\\(8\\)', '\\(( -8,0)\\)', '\\(20\\)'], explicacion: '\\((-2)4+5\\cdot0=-8\\).' },
    { id: 'pr2', texto: 'El producto escalar de dos vectores es…', correcta: 'Un número real', opciones: ['Un número real', 'Un vector del plano', 'Una recta', 'Siempre positivo'], explicacion: 'El resultado combina productos de componentes y es escalar.' },
    { id: 'pr3', texto: 'Si \\(\\vec u\\cdot\\vec v\\lt0\\), el ángulo entre vectores no nulos es…', correcta: 'Obtuso', opciones: ['Agudo', 'Recto', 'Obtuso', 'Nulo'], explicacion: 'El coseno es negativo en los ángulos obtusos.' },
    { id: 'pr4', texto: 'Para \\(\\vec u=(3,-2)\\) y \\(\\vec v=(4,6)\\), el producto escalar es…', correcta: '\\(0\\)', opciones: ['\\(0\\)', '\\(24\\)', '\\(-24\\)', '\\(\\sqrt{52}\\)'], explicacion: '\\(3\\cdot4+(-2)\\cdot6=12-12=0\\).' }
  ],
  ortogonalidad: [
    { id: 'or1', texto: 'Los vectores \\((0,-7)\\) y \\((-1,0)\\) son…', correcta: 'Ortogonales', opciones: ['Ortogonales', 'Paralelos', 'Equivalentes', 'Opuestos'], explicacion: 'Su producto escalar es cero.' },
    { id: 'or2', texto: 'Para que \\(\\vec a=(1,-3)\\) y \\(\\vec b=(3,2x+1)\\) sean perpendiculares, \\(x=\\)', correcta: '\\(0\\)', opciones: ['\\(0\\)', '\\(1\\)', '\\(-1\\)', '\\(\\frac32\\)'], explicacion: '\\(3-3(2x+1)=0\\Rightarrow -6x=0\\Rightarrow x=0\\).' },
    { id: 'or3', texto: 'La fórmula correcta para el ángulo es…', correcta: '\\(\\theta=\\arccos\\left(\\frac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\|\\vec v\\|}\\right)\\)', opciones: ['\\(\\theta=\\arccos\\left(\\frac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\|\\vec v\\|}\\right)\\)', '\\(\\theta=\\frac{\\|\\vec u\\|+\\|\\vec v\\|}{2}\\)', '\\(\\theta=\\vec u+\\vec v\\)', '\\(\\theta=\\frac{\\vec u\\cdot\\vec v}{2}\\)'], explicacion: 'Se despeja el coseno de la identidad geométrica del producto escalar.' },
    { id: 'or4', texto: '¿Puede el vector nulo formar un ángulo de \\(90^\\circ\\) con otro vector?', correcta: 'No, porque no tiene dirección', opciones: ['Sí, con todos', 'No, porque no tiene dirección', 'Sí, si el producto es cero', 'Solo con otro vector nulo'], explicacion: 'Aunque su producto escalar sea cero, el ángulo no está definido para el vector nulo.' }
  ],
  descomposicion: [
    { id: 'de1', texto: 'Si \\((-2,1)=k_1(4,2)+k_2(1,-2)\\), entonces…', correcta: '\\(k_1=-\\frac{3}{10},\\ k_2=-\\frac45\\)', opciones: ['\\(k_1=-\\frac{3}{10},\\ k_2=-\\frac45\\)', '\\(k_1=1,\\ k_2=-2\\)', '\\(k_1=-1,\\ k_2=2\\)', 'No existe solución'], explicacion: 'El sistema es \\(4k_1+k_2=-2\\), \\(2k_1-2k_2=1\\).' },
    { id: 'de2', texto: 'La descomposición en dos direcciones se obtiene al…', correcta: 'Igualar las componentes y resolver un sistema', opciones: ['Sumar los módulos', 'Igualar las componentes y resolver un sistema', 'Calcular solo el producto escalar', 'Hacer siempre \\(k_1=k_2\\)'], explicacion: 'La igualdad de vectores equivale a la igualdad de sus componentes.' },
    { id: 'de3', texto: 'Si los vectores directores son paralelos, entonces…', correcta: 'Pueden no generar todos los vectores del plano', opciones: ['Siempre forman una base', 'Pueden no generar todos los vectores del plano', 'Son necesariamente ortogonales', 'La descomposición siempre es única'], explicacion: 'Dos direcciones paralelas generan solamente una recta de vectores.' },
    { id: 'de4', texto: 'En \\(\\vec q=k_1\\vec a+k_2\\vec b\\), los números \\(k_1,k_2\\) son…', correcta: 'Escalares', opciones: ['Escalares', 'Puntos', 'Vectores unitarios', 'Ángulos'], explicacion: 'Multiplican a los vectores directores.' }
  ],
  aplicaciones: [
    { id: 'ap1', texto: 'En la planta, \\(\\vec F=(12,-4)\\) y \\(\\vec V=(-3,6)\\). La resultante es…', correcta: '\\((9,2)\\)', opciones: ['\\((9,2)\\)', '\\((15,-10)\\)', '\\((9,-10)\\)', '\\((-15,2)\\)'], explicacion: 'Se suman las componentes: \\((12-3,-4+6)=(9,2)\\).' },
    { id: 'ap2', texto: 'El módulo de la resultante \\((9,2)\\) es…', correcta: '\\(\\sqrt{85}\\)', opciones: ['\\(\\sqrt{85}\\)', '\\(11\\)', '\\(85\\)', '\\(7\\)'], explicacion: '\\(\\sqrt{9^2+2^2}=\\sqrt{85}\\).' },
    { id: 'ap3', texto: 'Desde el faro \\(F=(5,0)\\) hacia el barco \\(A=(1,5)\\), el vector es…', correcta: '\\(\\overrightarrow{FA}=(-4,5)\\)', opciones: ['\\(\\overrightarrow{FA}=(-4,5)\\)', '\\(\\overrightarrow{FA}=(4,-5)\\)', '\\(\\overrightarrow{FA}=(6,5)\\)', '\\(\\overrightarrow{FA}=(1,5)\\)'], explicacion: 'Se calcula \\(A-F=(1-5,5-0)=(-4,5)\\).' },
    { id: 'ap4', texto: 'El vector \\((-2,1)\\) representa un desplazamiento de…', correcta: '2 a la izquierda y 1 hacia arriba', opciones: ['2 a la izquierda y 1 hacia arriba', '2 a la derecha y 1 hacia abajo', '2 hacia arriba y 1 a la izquierda', 'Módulo 3 en dirección vertical'], explicacion: 'La primera componente negativa indica oeste/izquierda; la segunda positiva, norte/arriba.' }
  ]
};

const practicaBanco = Object.values(datos).flat().map(q => ({ pregunta: q.texto, opciones: q.opciones, correcta: q.correcta, explicacion: q.explicacion }));
let estado = cargarEstado();
let practicaActual = null;
let racha = estado.racha || 0;
let mejorRacha = estado.mejorRacha || 0;

function estadoInicial() { return { nombre: '', completadas: {}, respuestas: {}, racha: 0, mejorRacha: 0 }; }
function cargarEstado() { try { const guardado = JSON.parse(localStorage.getItem(CLAVE)); return { ...estadoInicial(), ...(guardado || {}) }; } catch { return estadoInicial(); } }
function guardarEstado() { estado.racha = racha; estado.mejorRacha = mejorRacha; localStorage.setItem(CLAVE, JSON.stringify(estado)); actualizarProgreso(); }
function typeset(elemento) { if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise(elemento ? [elemento] : undefined).catch(() => {}); }
function escapar(texto) { return String(texto).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }
function mostrarToast(mensaje) { const toast = document.getElementById('toast'); toast.textContent = mensaje; toast.classList.add('visible'); clearTimeout(mostrarToast.timer); mostrarToast.timer = setTimeout(() => toast.classList.remove('visible'), 2500); }
function fmt(n, dec = 2) { if (!Number.isFinite(n)) return '—'; const r = Math.abs(n - Math.round(n)) < 1e-10 ? String(Math.round(n)) : n.toFixed(dec).replace(/\.00$/,'').replace('.',','); return r.replace('-', '−'); }
function mezcla(array) { return [...array].sort(() => Math.random() - .5); }

function renderQuiz(tipo) {
  const contenedor = document.getElementById(`quiz-${tipo}`);
  const preguntas = datos[tipo];
  contenedor.innerHTML = preguntas.map((q, i) => {
    const guardada = estado.respuestas[q.id] || '';
    return `<article class="pregunta" data-pregunta="${q.id}"><p class="pregunta__enunciado"><span>${i+1}.</span> ${q.texto}</p><div class="opciones">${q.opciones.map(o => `<label class="opcion opcion--tarjeta"><input type="radio" name="${q.id}" value="${escapar(o)}" ${guardada===o?'checked':''}><span class="opcion__contenido">${o}</span></label>`).join('')}</div><p class="explicacion" hidden></p></article>`;
  }).join('');
  typeset(contenedor);
}
function renderTodo() { Object.keys(datos).forEach(renderQuiz); restaurarEstadosVisuales(); actualizarProgreso(); }
function comprobarActividad(tipo) {
  const preguntas = datos[tipo]; let correctas = 0; let respondidas = 0;
  preguntas.forEach(q => {
    const respuesta = document.querySelector(`input[name="${q.id}"]:checked`)?.value || '';
    estado.respuestas[q.id] = respuesta;
    const tarjeta = document.querySelector(`[data-pregunta="${q.id}"]`);
    tarjeta.classList.remove('correcta','incorrecta');
    tarjeta.querySelectorAll('.opcion').forEach(op => op.classList.remove('correcta-marcada','incorrecta-marcada'));
    if (respuesta) respondidas += 1;
    const seleccionada = [...tarjeta.querySelectorAll('input')].find(input => input.checked)?.closest('.opcion');
    if (respuesta === q.correcta) { correctas += 1; tarjeta.classList.add('correcta'); seleccionada?.classList.add('correcta-marcada'); }
    else { tarjeta.classList.add('incorrecta'); seleccionada?.classList.add('incorrecta-marcada'); [...tarjeta.querySelectorAll('input')].find(input => input.value === q.correcta)?.closest('.opcion')?.classList.add('correcta-marcada'); }
    const exp = tarjeta.querySelector('.explicacion'); exp.hidden = false; exp.innerHTML = respuesta === q.correcta ? `✓ Correcto. ${q.explicacion}` : `Respuesta esperada: <strong>${q.correcta}</strong>. ${q.explicacion}`;
  });
  const completa = correctas === preguntas.length; estado.completadas[tipo] = completa; guardarEstado(); marcarActividad(tipo, completa);
  const feedback = document.getElementById(`feedback-${tipo}`); feedback.className = `retroalimentacion ${completa?'ok':'error'}`; feedback.innerHTML = completa ? `<strong>¡Actividad completa!</strong> Resolviste correctamente las ${preguntas.length} preguntas.` : `<strong>Resultado: ${correctas} de ${preguntas.length}.</strong> Respondidas: ${respondidas}. Revisá las devoluciones y volvé a intentar.`; typeset(feedback);
}
function borrarActividad(tipo) { datos[tipo].forEach(q => delete estado.respuestas[q.id]); delete estado.completadas[tipo]; guardarEstado(); renderQuiz(tipo); marcarActividad(tipo,false); document.getElementById(`feedback-${tipo}`).textContent=''; }
function marcarActividad(tipo, completa) { document.querySelector(`[data-actividad="${tipo}"]`)?.classList.toggle('resuelta',completa); const e=document.getElementById(`estado-${tipo}`); if(e){e.textContent=completa?'Completada':'Pendiente';e.classList.toggle('ok',completa);} }
function restaurarEstadosVisuales() { Object.entries(estado.completadas).forEach(([tipo,completa])=>marcarActividad(tipo,Boolean(completa))); }
function actualizarProgreso() { const logradas=Object.values(estado.completadas).filter(Boolean).length; const porcentaje=Math.round(logradas/TOTAL_ACTIVIDADES*100); document.getElementById('progreso-texto').textContent=`${porcentaje}%`; document.getElementById('progreso-barra').style.width=`${porcentaje}%`; document.getElementById('aciertos-total').textContent=logradas; document.getElementById('resumen-progreso').textContent=`${porcentaje}%`; document.getElementById('resumen-logradas').textContent=`${logradas} de ${TOTAL_ACTIVIDADES}`; document.getElementById('resumen-racha').textContent=mejorRacha; document.getElementById('resumen-nombre').textContent=estado.nombre?.trim()||'Sin completar'; }

let planoContador = 0;
function planoSVG(vectores, opciones={}) {
  const W=620,H=450,m=44;
  const extremos=vectores.flatMap(v=>{const p=v.desde||[0,0],q=v.hasta||v.vector||[0,0];return [p[0],p[1],q[0],q[1]];});
  const maxAbs=Math.max(5,...extremos.map(v=>Math.abs(Number(v)||0)));
  const limite=Math.min(24,Math.max(6,Math.ceil(maxAbs+1)));
  const min=-limite,max=limite,esc=(W-2*m)/(max-min), x=n=>m+(n-min)*esc, y=n=>H-m-(n-min)*esc;
  const paso=limite>16?4:limite>10?2:1;
  const marcas=[];
  for(let n=min;n<=max;n+=paso){
    marcas.push(`<line x1="${x(n)}" y1="${m}" x2="${x(n)}" y2="${H-m}" stroke="${n===0?'#62758a':'#e0e8f0'}" stroke-width="${n===0?2:1}"/><line x1="${m}" y1="${y(n)}" x2="${W-m}" y2="${y(n)}" stroke="${n===0?'#62758a':'#e0e8f0'}" stroke-width="${n===0?2:1}"/>${n!==0?`<text x="${x(n)}" y="${y(0)+17}" text-anchor="middle" font-size="11" fill="#65788d">${n}</text><text x="${x(0)-8}" y="${y(n)+4}" text-anchor="end" font-size="11" fill="#65788d">${n}</text>`:''}`);
  }
  const uid=++planoContador;
  const ids=[`arrAzul${uid}`,`arrVerde${uid}`,`arrNaranja${uid}`,`arrRosa${uid}`];
  const defs=`<defs><marker id="${ids[0]}" viewBox="0 0 10 10" markerWidth="9" markerHeight="9" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="#1f4e8c"/></marker><marker id="${ids[1]}" viewBox="0 0 10 10" markerWidth="9" markerHeight="9" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="#17725a"/></marker><marker id="${ids[2]}" viewBox="0 0 10 10" markerWidth="9" markerHeight="9" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="#b56b20"/></marker><marker id="${ids[3]}" viewBox="0 0 10 10" markerWidth="9" markerHeight="9" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="#963f62"/></marker></defs>`;
  const colores=['#1f4e8c','#17725a','#b56b20','#963f62'];
  const arrows=vectores.map((v,i)=>{const p=v.desde||[0,0], q=v.hasta||v.vector, c=v.color||colores[i%colores.length], marker=ids[i%ids.length]; return `<line x1="${x(p[0])}" y1="${y(p[1])}" x2="${x(q[0])}" y2="${y(q[1])}" stroke="${c}" stroke-width="5" stroke-linecap="round" marker-end="url(#${marker})"/><circle cx="${x(p[0])}" cy="${y(p[1])}" r="4" fill="${c}"/><text x="${x(q[0])+8}" y="${y(q[1])-8}" font-size="15" font-weight="800" fill="${c}">${v.etiqueta||''}</text>`;}).join('');
  const extras=opciones.extras||'';
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Plano cartesiano con vectores">${defs}<rect x="${m}" y="${m}" width="${W-2*m}" height="${H-2*m}" rx="12" fill="#fff" stroke="#b9cadb"/>${marcas.join('')}${extras}${arrows}</svg>`;
}

function actualizarVector() {
  const ids=['vp1','vp2','vq1','vq2']; const vals=ids.map(id=>Number(document.getElementById(id).value)); ids.forEach((id,i)=>document.getElementById(`${id}-out`).textContent=fmt(vals[i],0)); const [p1,p2,q1,q2]=vals; const a=q1-p1,b=q2-p2,mod=Math.hypot(a,b);
  document.getElementById('vector-datos').innerHTML=`\\(P=(${fmt(p1,0)},${fmt(p2,0)})\\), \\(Q=(${fmt(q1,0)},${fmt(q2,0)})\\)<br>\\(\\overrightarrow{PQ}=(${fmt(a,0)},${fmt(b,0)})\\), \\(\\|\\overrightarrow{PQ}\\|=${fmt(mod)}\\)`;
  document.getElementById('plano-vector').innerHTML=planoSVG([{desde:[p1,p2],hasta:[q1,q2],etiqueta:'PQ'}]); typeset(document.getElementById('vector-datos'));
}
function actualizarOperaciones() {
  const ids=['u1','u2','v1','v2','vk']; const vals=ids.map(id=>Number(document.getElementById(id).value)); ids.forEach((id,i)=>document.getElementById(`${id}-out`).textContent=fmt(vals[i],1)); const [u1,u2,v1,v2,k]=vals; const suma=[u1+v1,u2+v2], ku=[k*u1,k*u2];
  document.getElementById('operaciones-datos').innerHTML=`\\(\\vec u=(${fmt(u1)},${fmt(u2)})\\), \\(\\vec v=(${fmt(v1)},${fmt(v2)})\\)<br>\\(\\vec u+\\vec v=(${fmt(suma[0])},${fmt(suma[1])})\\), \\(${fmt(k)}\\vec u=(${fmt(ku[0])},${fmt(ku[1])})\\)`;
  const vecs=[{vector:[u1,u2],etiqueta:'u'},{vector:[v1,v2],etiqueta:'v'},{vector:suma,etiqueta:'u+v'},{vector:ku,etiqueta:'ku'}]; document.getElementById('plano-operaciones').innerHTML=planoSVG(vecs); typeset(document.getElementById('operaciones-datos'));
}
function actualizarAngulo() {
  const ids=['au1','au2','av1','av2']; const vals=ids.map(id=>Number(document.getElementById(id).value)); ids.forEach((id,i)=>document.getElementById(`${id}-out`).textContent=fmt(vals[i],0)); const [u1,u2,v1,v2]=vals; const dot=u1*v1+u2*v2, nu=Math.hypot(u1,u2), nv=Math.hypot(v1,v2); let texto;
  if(nu===0||nv===0) texto=`El ángulo no está definido porque uno de los vectores es nulo. Producto escalar: \\(${fmt(dot)}\\).`;
  else { const cos=Math.max(-1,Math.min(1,dot/(nu*nv))), ang=Math.acos(cos)*180/Math.PI; const tipo=Math.abs(dot)<1e-10?'recto':dot>0?'agudo':'obtuso'; texto=`\\(\\vec u\\cdot\\vec v=${fmt(dot)}\\), \\(\\theta\\approx${fmt(ang)}^\\circ\\): ángulo <strong>${tipo}</strong>.`; }
  document.getElementById('angulo-datos').innerHTML=texto; document.getElementById('plano-angulo').innerHTML=planoSVG([{vector:[u1,u2],etiqueta:'u'},{vector:[v1,v2],etiqueta:'v'}]); typeset(document.getElementById('angulo-datos'));
}
function resolverDescomposicion() {
  const g=id=>Number(document.getElementById(id).value); const q=[g('dq1'),g('dq2')],a=[g('da1'),g('da2')],b=[g('db1'),g('db2')]; const det=a[0]*b[1]-a[1]*b[0]; const caja=document.getElementById('descomposicion-datos');
  if(Math.abs(det)<1e-10){ caja.innerHTML='Las direcciones son paralelas. No forman una base del plano; la descomposición puede ser imposible o no única.'; document.getElementById('plano-descomposicion').innerHTML=planoSVG([{vector:a,etiqueta:'a'},{vector:b,etiqueta:'b'},{vector:q,etiqueta:'q'}]); return; }
  const k1=(q[0]*b[1]-q[1]*b[0])/det, k2=(a[0]*q[1]-a[1]*q[0])/det; const ka=[k1*a[0],k1*a[1]], kb=[k2*b[0],k2*b[1]];
  caja.innerHTML=`\\(k_1=${fmt(k1)}\\), \\(k_2=${fmt(k2)}\\)<br>\\(\\vec q=${fmt(k1)}\\vec a+${fmt(k2)}\\vec b\\).`;
  document.getElementById('plano-descomposicion').innerHTML=planoSVG([{vector:ka,etiqueta:'k₁a'},{desde:ka,hasta:q,etiqueta:'k₂b'},{vector:q,etiqueta:'q'}]); typeset(caja);
}
function actualizarFlujo() {
  const c=Number(document.getElementById('factor-flujo').value); document.getElementById('factor-flujo-out').textContent=fmt(c,1); const F=[12*c,-4*c],V=[-3,6],R=[F[0]+V[0],F[1]+V[1]],m=Math.hypot(R[0],R[1]); document.getElementById('flujo-datos').innerHTML=`\\(c\\vec F=(${fmt(F[0])},${fmt(F[1])})\\), \\(\\vec V=(-3,6)\\)<br>\\(\\vec R=(${fmt(R[0])},${fmt(R[1])})\\), \\(\\|\\vec R\\|=${fmt(m)}\\).`; document.getElementById('plano-flujo').innerHTML=planoSVG([{vector:F,etiqueta:'cF'},{vector:V,etiqueta:'V'},{vector:R,etiqueta:'R'}]); typeset(document.getElementById('flujo-datos'));
}

function nuevaPractica() { practicaActual=practicaBanco[Math.floor(Math.random()*practicaBanco.length)]; document.getElementById('practica-pregunta').innerHTML=practicaActual.pregunta; const opciones=mezcla(practicaActual.opciones); document.getElementById('practica-opciones').innerHTML=opciones.map(o=>`<label class="opcion opcion--tarjeta"><input type="radio" name="practica" value="${escapar(o)}"><span class="opcion__contenido">${o}</span></label>`).join(''); document.getElementById('practica-comprobar').disabled=false; const f=document.getElementById('practica-feedback'); f.className='retroalimentacion';f.textContent=''; typeset(document.getElementById('practica-final')); }
function comprobarPractica() { if(!practicaActual)return; const respuesta=document.querySelector('input[name="practica"]:checked')?.value; const feedback=document.getElementById('practica-feedback'); document.querySelectorAll('#practica-opciones .opcion').forEach(op=>op.classList.remove('correcta-marcada','incorrecta-marcada')); if(!respuesta){feedback.className='retroalimentacion error';feedback.textContent='Elegí una opción antes de comprobar.';return;} const elegida=document.querySelector('input[name="practica"]:checked').closest('.opcion'); if(respuesta===practicaActual.correcta){racha++;mejorRacha=Math.max(mejorRacha,racha);elegida.classList.add('correcta-marcada');feedback.className='retroalimentacion ok';feedback.innerHTML=`<strong>Correcto.</strong> ${practicaActual.explicacion}`;}else{racha=0;elegida.classList.add('incorrecta-marcada');[...document.querySelectorAll('input[name="practica"]')].find(i=>i.value===practicaActual.correcta)?.closest('.opcion')?.classList.add('correcta-marcada');feedback.className='retroalimentacion error';feedback.innerHTML=`<strong>No es esa.</strong> La respuesta correcta es ${practicaActual.correcta}. ${practicaActual.explicacion}`;} document.getElementById('racha').textContent=`Racha: ${racha}`;guardarEstado();typeset(feedback); }

function agregarNavegacionSecuencial(enlaces) { enlaces.forEach((enlace,i)=>{const seccion=document.querySelector(enlace.getAttribute('href')); if(!seccion||seccion.querySelector(':scope > .navegacion-secuencial'))return; const c=document.createElement('nav');c.className='navegacion-secuencial';c.setAttribute('aria-label','Navegación entre secciones'); if(enlaces[i-1]){const a=document.createElement('a');a.className='boton boton--fantasma';a.href=enlaces[i-1].getAttribute('href');a.textContent=`← ${enlaces[i-1].textContent.trim()}`;c.appendChild(a);} if(enlaces[i+1]){const a=document.createElement('a');a.className='boton boton--secundario boton--siguiente';a.href=enlaces[i+1].getAttribute('href');a.textContent=`${enlaces[i+1].textContent.trim()} →`;c.appendChild(a);} seccion.appendChild(c);}); }
function configurarNavegacion() { const toggle=document.getElementById('nav-toggle'), nav=document.getElementById('lista-navegacion'), enlaces=[...nav.querySelectorAll('a[href^="#"]')], secciones=enlaces.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean); function mostrar(id,{actualizarUrl=false,desplazar=true}={}){const destino=document.getElementById(id)||document.getElementById('inicio');secciones.forEach(s=>{const activa=s===destino;s.classList.toggle('activa',activa);s.setAttribute('aria-hidden',String(!activa));if('inert'in s)s.inert=!activa;});enlaces.forEach(a=>{const act=a.getAttribute('href')===`#${destino.id}`;a.classList.toggle('activo',act);act?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current');});nav.classList.remove('abierto');toggle.setAttribute('aria-expanded','false');if(actualizarUrl&&location.hash!==`#${destino.id}`)history.pushState({seccion:destino.id},'',`#${destino.id}`);if(desplazar)destino.scrollIntoView({behavior:'smooth',block:'start'});} toggle.addEventListener('click',()=>{const a=nav.classList.toggle('abierto');toggle.setAttribute('aria-expanded',String(a));});document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href').slice(1);if(!document.getElementById(id))return;e.preventDefault();mostrar(id,{actualizarUrl:true,desplazar:true});});window.addEventListener('popstate',()=>mostrar(location.hash.slice(1)||'inicio',{desplazar:false}));window.addEventListener('hashchange',()=>mostrar(location.hash.slice(1)||'inicio',{desplazar:false}));agregarNavegacionSecuencial(enlaces);mostrar(location.hash.slice(1)||'inicio',{desplazar:false}); }
function configurarEventos() { document.querySelectorAll('[data-check]').forEach(b=>b.addEventListener('click',()=>comprobarActividad(b.dataset.check))); document.querySelectorAll('[data-reset]').forEach(b=>b.addEventListener('click',()=>borrarActividad(b.dataset.reset))); ['vp1','vp2','vq1','vq2'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarVector)); ['u1','u2','v1','v2','vk'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarOperaciones)); ['au1','au2','av1','av2'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarAngulo)); document.getElementById('resolver-descomposicion').addEventListener('click',resolverDescomposicion); document.getElementById('factor-flujo').addEventListener('input',actualizarFlujo); document.getElementById('practica-nueva').addEventListener('click',nuevaPractica); document.getElementById('practica-comprobar').addEventListener('click',comprobarPractica); const nombre=document.getElementById('nombre-estudiante');nombre.value=estado.nombre||'';nombre.addEventListener('input',()=>{estado.nombre=nombre.value;guardarEstado();});document.getElementById('imprimir').addEventListener('click',()=>window.print());document.getElementById('reiniciar').addEventListener('click',()=>{if(!confirm('¿Querés borrar todas las respuestas y el progreso guardado en este dispositivo?'))return;localStorage.removeItem(CLAVE);estado=estadoInicial();racha=0;mejorRacha=0;nombre.value='';document.getElementById('racha').textContent='Racha: 0';document.querySelectorAll('.retroalimentacion').forEach(e=>{e.textContent='';e.className='retroalimentacion';});renderTodo();mostrarToast('Progreso reiniciado.');}); }
function iniciar() { renderTodo(); configurarEventos(); configurarNavegacion(); actualizarVector(); actualizarOperaciones(); actualizarAngulo(); resolverDescomposicion(); actualizarFlujo(); document.getElementById('racha').textContent=`Racha: ${racha}`; }
document.addEventListener('DOMContentLoaded',iniciar);
