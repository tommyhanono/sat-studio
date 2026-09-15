#!/bin/bash
# verificar.sh — la batería completa, en un comando.
#
#     tools/verificar.sh
#
# Corre las cuatro verificaciones en orden de costo: el banco (datos), el humo
# (la app se juega), la integridad (los datos del estudiante no se pierden) y el
# plan de mejora. Sale con código 1 si algo falla, así que sirve antes de
# publicar y dentro de cualquier hook.
#
# La auditoría de lanzamiento NO va aquí porque tarda más y necesita Chrome con
# red; se corre aparte:  ~/.claude/scripts/web-launch-audit/run.sh .
set -u
cd "$(dirname "$0")/.." || exit 1
export PATH="$HOME/.local/node-v20.19.2-darwin-arm64/bin:$PATH"   # el npm/node bueno de esta Mac

fallos=0
corre() {
  printf '\n\033[1m── %s\033[0m\n' "$1"
  shift
  if "$@"; then :; else fallos=$((fallos + 1)); fi
}

corre "Banco de preguntas (contenido e integridad)" node tools/auditar-banco.js
corre "Humo (la app se juega de verdad)"            node tools/test-humo.js
corre "Integridad de datos del estudiante"          node tools/test-datos.js
corre "Mi plan de mejora"                           node tools/test-plan.js

printf '\n'
if [ "$fallos" -eq 0 ]; then
  printf '\033[32m✓ Todo en verde.\033[0m Antes de publicar falta la auditoría de lanzamiento:\n'
  printf '  ~/.claude/scripts/web-launch-audit/run.sh .\n'
  exit 0
fi
printf '\033[31m✗ %s verificación(es) en rojo.\033[0m No publicar así.\n' "$fallos"
exit 1
