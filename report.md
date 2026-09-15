# Auditoria de lanzamiento web

**Objetivo:** `/Users/tommyhanono/sat-studio  (sirviendo ./)`  
**Fecha:** 2026-09-15  
**Paginas analizadas:** 1 · **Links revisados:** 2  
**Framework detectado:** static  

**Resultado:** 35 PASS · 1 FAIL · 1 WARN · 9 no aplica · 8 de revision manual

> [!danger] No lanzar todavia
> Hay 1 punto(s) en FAIL. Estan detallados abajo con archivo o selector.

## Bloque 1 — QA de interfaz y movil (20 puntos, todos obligatorios)

| id | Punto | Estado | Detalle |
|---|---|---|---|
| `B1-01` | Cero scroll horizontal (320/375/414) | PASS | 1 pagina(s) x 3 anchos limpias |
| `B1-02` | Cero links rotos (internos y externos) | PASS | 2 links revisados, todos responden |
| `B1-03` | Menu movil abre, cierra y navega | n/a | el sitio no tiene una navegacion de varios destinos: no hay menu que probar |
| `B1-04` | Favicon propio (no el del framework) | PASS | favicon: icon.svg |
| `B1-05` | Titulo de pagina correcto y especifico | PASS | todas las paginas con titulo propio |
| `B1-06` | Meta description en cada pagina | PASS | 1 pagina(s) con description |
| `B1-07` | Links del footer funcionando | PASS | 2 link(s) de footer, todos responden |
| `B1-08` | Pagina 404 propia con salida al home | PASS | 404 propia con salida al home |
| `B1-09` | Año de copyright correcto (calculado) | PASS | año 2026 correcto |
| `B1-10` | Imagenes comprimidas y en formato moderno | PASS | sin imagenes pesadas |
| `B1-11` | Cero botones rotos o sin handler | PASS | todos los botones tienen handler, submit o delegacion de framework |
| `B1-12` | Estados de exito visibles en toda accion | **FAIL** | 1 archivo(s) con accion que escribe y sin estado de carga/exito/error |
| `B1-13` | Estados de error visibles y con mensaje util | PASS | no hay formularios ni catch mudos; queda la revision manual M-02 |
| `B1-14` | Cero texto placeholder | PASS | sin lorem ipsum ni relleno |
| `B1-15` | Cero items de navegacion que no llevan a nada | PASS | todos los items de navegacion tienen destino |
| `B1-16` | Cero overflow de elementos en movil | PASS | ningun elemento se sale del viewport |
| `B1-17` | Logo clickeable que vuelve al home | PASS | el logo vuelve al home |
| `B1-18` | Telefono clickeable (tel:) | n/a | el sitio no publica telefono |
| `B1-19` | Email clickeable (mailto:) | n/a | el sitio no publica correo |
| `B1-20` | Optimizado para movil de verdad | PASS | viewport, objetivos tactiles y tipografia de inputs correctos |

## Bloque 2 — SEO y produccion

| id | Punto | Estado | Detalle |
|---|---|---|---|
| `B2-01` | Sin titulo/favicon default del framework | PASS | sin 'Vite + React' ni iconos de plantilla |
| `B2-02` | Sin source maps en produccion | PASS | el build no publica source maps |
| `B2-03` | Cero errores en consola | PASS | consola limpia |
| `B2-04` | Bundles de JS razonables | WARN | mayor carga JS por pagina: 1.72 MB; total en build: 1.77 MB |
| `B2-05` | Titulos unicos por pagina | n/a | una sola pagina: no aplica |
| `B2-06` | Un solo h1 por pagina, unico por pagina | PASS | un h1 por pagina, todos distintos |
| `B2-07` | Meta descriptions unicas | n/a | una sola pagina: no aplica |
| `B2-08` | Canonical tags | PASS | canonical correcto en todas |
| `B2-09` | robots.txt | PASS | presente |
| `B2-10` | sitemap.xml | PASS | presente |
| `B2-11` | llms.txt | PASS | presente |
| `B2-12` | Alt text en todas las imagenes | PASS | 0 imagen(es), todas con alt |
| `B2-13` | Links internos entre paginas | n/a | sitio de una sola pagina |
| `B2-14` | Breadcrumbs y jerarquia de paginas | n/a | sin paginas de segundo nivel: no hacen falta |
| `B2-15` | Structured data (JSON-LD) valido | PASS | valido y coherente con la pagina · tipos: WebApplication |
| `B2-16` | LocalBusiness schema (si es negocio local) | SKIP | no se declaro negocio local (correr con --local si lo es) — revision manual M-05 |
| `B2-17` | Imagenes de social share (OG + Twitter) | PASS | og completo y og:image de 1200x630 (17 KB) |
| `B2-18` | Dominio propio conectado | SKIP | auditoria local: el dominio se verifica en produccion (revision manual M-06) |
| `B2-19` | Atributo lang en <html> | PASS | lang="en" |

## Bloque 3 — Piso de calidad y regla cero de diseno

| id | Punto | Estado | Detalle |
|---|---|---|---|
| `B3-01` | Contraste AA (WCAG 2.2) | PASS | 10 elementos de texto, todos sobre el minimo |
| `B3-02` | Foco de teclado visible | PASS | 6 controles con foco visible |
| `B3-03` | prefers-reduced-motion respetado | PASS | sin animaciones que apagar |
| `B3-04` | Campos de formulario con etiqueta | PASS | todos los campos etiquetados |
| `B3-05` | El telefono girado (812x375) | PASS | en horizontal se ve bien |
| `B3-06` | Core Web Vitals (LCP y CLS) | PASS | LCP 128 ms · CLS 0 (peor pagina, red local sin latencia) |
| `B3-07` | Regla cero de TOMMY-DESIGN | PASS | sin firmas genericas · tipografia: -apple-system |

## Evidencia

### `B1-12` Estados de exito visibles en toda accion — **FAIL**

1 archivo(s) con accion que escribe y sin estado de carga/exito/error

- tools/huella-banco.js:37 — falta estado de carga y exito · console.log('huella    : ' + crypto.createHash('md5').update(lineas.join('\n')).digest('hex'));

**Como se arregla:** Un boton que escribe necesita: deshabilitarse mientras carga, y una confirmacion visible al terminar. Cerrar con la revision manual M-01.

## Revision manual guiada

Estos puntos **no los puede verificar una maquina**. No son opcionales: son la otra mitad de la auditoria.

### `M-01` B1-12 · Estados de exito, ejecutados de verdad

> [!success] Ya verificado por maquina
> B1-12 leyo el codigo: que cada accion que escribe tenga estado de carga, exito y error, y que no se use alert() como feedback.

**Falta a mano porque:** Que el estado exista en el codigo no prueba que se vea al apretar el boton.

- [ ] Lista cada accion que cambia algo: enviar, guardar, copiar, agregar, borrar, login.
- [ ] Ejecuta cada una con datos validos, a 375 px de ancho.
- [ ] Feedback en menos de 1 s: spinner o boton en 'cargando' y deshabilitado.
- [ ] Confirmacion explicita al terminar: toast, mensaje inline o cambio de pantalla evidente.
- [ ] Doble click en el boton no puede mandar dos veces.
- [ ] Falla si la unica senal es que la pagina se recargo o que un numero cambio en silencio.

### `M-02` B1-13 · Errores que solo aparecen con la red caida

> [!success] Ya verificado por maquina
> B1-13 ya envio cada formulario vacio (con toda escritura de red bloqueada) y busco catch mudos en el codigo.

**Falta a mano porque:** El auditor prueba el formulario vacio; no puede cortar la red ni inventar un 500 del servidor.

- [ ] DevTools > Network > Offline, y repeti la accion. Tiene que aparecer un mensaje, no un silencio.
- [ ] Manda un email invalido y un campo de 500 caracteres.
- [ ] El mensaje va en espanol, junto al campo que fallo, y dice que hacer:
- [ ]   'el correo no tiene @', nunca 'Error 422' ni 'Something went wrong'.
- [ ] El foco salta al primer campo con error y el color no es la unica senal.

### `M-03` B1-20 / B3-05 · El telefono en la mano

> [!success] Ya verificado por maquina
> Ya se midio: viewport, objetivos de 44 px, inputs de 16 px, apaisado 812x375, LCP y CLS.

**Falta a mano porque:** El pulgar y el teclado del sistema no se simulan.

- [ ] Abrilo en un telefono real, no solo en el simulador.
- [ ] Con una mano: la accion principal cae en el arco del pulgar (mitad inferior).
- [ ] El header fijo no se come mas del 15 % de la pantalla al hacer scroll.
- [ ] Los inputs de correo y telefono abren el teclado correcto (type / inputmode).
- [ ] Hay safe-area en iPhone con notch: env(safe-area-inset-bottom).

### `M-04` B2-15 · Confirmacion final del structured data

> [!success] Ya verificado por maquina
> B2-15 ya valido @context, los campos requeridos por @type, y que el telefono y el nombre coincidan con la pagina.

**Falta a mano porque:** Google tiene la ultima palabra sobre si el rich result se muestra.

- [ ] Pega la URL en el Rich Results Test de Google y en validator.schema.org.
- [ ] Exige cero errores y cero warnings de campos requeridos.
- [ ] Si el sitio ya esta indexado, revisa Search Console > Mejoras.

### `M-05` B2-16 · Decidir si es un negocio local

> [!success] Ya verificado por maquina
> Con --local, B2-16 exige LocalBusiness y el validador revisa que el PostalAddress este completo.

**Falta a mano porque:** Solo un humano sabe si el negocio atiende en una direccion fisica.

- [ ] Si atiende en una direccion o tiene zona de cobertura: hace falta LocalBusiness. Correr con --local.
- [ ] Si no lo es, dejalo escrito en el repo para no volver a preguntarlo.

### `M-06` B2-18 · Que la redireccion sea 301

> [!success] Ya verificado por maquina
> B2-18 ya detecto si el host es un subdominio del hosting y si la variante www/no-www responde.

**Falta a mano porque:** Distinguir un 301 de una copia servida en dos dominios necesita mirar la cabecera.

- [ ] curl -sI https://www.dominio.com | grep -i 'location\|HTTP/' — tiene que decir 301 y apuntar al canonico.
- [ ] El certificado https es valido en las dos variantes.
- [ ] El canonical, el og:url y el sitemap usan el dominio propio, no el de preview.

### `M-07` B2-17 · Como se ve la tarjeta en WhatsApp

> [!success] Ya verificado por maquina
> B2-17 ya midio las dimensiones reales, el peso y el formato de la og:image.

**Falta a mano porque:** Que mida 1200x630 no dice si el recorte deja el texto afuera.

- [ ] Pega el link en WhatsApp y mira la tarjeta real: es el canal que usa Tommy.
- [ ] El texto tiene que leerse en el preview chico, no solo en el grande.
- [ ] Texto dentro del 80 % central, por si el cliente recorta.

### `M-08` B3-07 · El juicio de diseno

> [!success] Ya verificado por maquina
> B3-07 ya detecta por maquina 7 de las 10 firmas: gradiente violeta, emojis como iconos, #FFF/#000 planos, sombra unica, fuente por inercia, radio 12 px en todo y titular intercambiable.

**Falta a mano porque:** Ningun script sabe si el resultado se ve bien; solo si repite un patron conocido.

- [ ] Abrir 90_Sistema/TOMMY-DESIGN.md y pasar la regla cero completa.
- [ ] Confirmar que la variante de tokens (glass / brutal / calm) es la que manda la tabla de decision.
- [ ] Las dos firmas que la maquina detecta mal: crema+serif+terracota y negro+verde acido. Mirarlas a ojo.
- [ ] El titular: solo vale uno que unicamente ese producto podria decir.

---

Generado por `~/.claude/scripts/web-launch-audit/audit.mjs`. La norma completa vive en `90_Sistema/TOMMY-WEB-LAUNCH.md` del vault.
