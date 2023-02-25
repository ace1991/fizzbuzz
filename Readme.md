# Kata Fizzbuzz - Testing Sostenible con TypeScript

El enunciado típico de la kata dice: escribe un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra "fizz" y, a su vez, los múltiplos de 5 por "buzz". Para los números que a su vez son múltiplos de 3 y 5, utilizaremos la cadena "fizzbuzz".


## Instrucciones
* `npm install`
* `npm test`

## Actualización dependencias
Al compilar el proyecto original obtenia fallos de compilación en las dependencias por lo que decidí actualizarlas a la última versión:
* `npx npm-upgrade` -> Decir Sí a todo

* `npm i`
* `npm run tsc` -> Sigue dando el mismo error ya que se siguen utilizando las dependencias anteriores aún.

Para asegurar que usa las nuevas dependencias del package.json actualizado en el primer paso elimino el package-lock y los node_modules anteriores.
* `rm package-lock.json`
* `rm -Rf node_modules/`

Y se regeneran actualziados acorde al nuevo package.json con:
* `npm i`

Finalmente:
* `npm run tsc` -> no error!


Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
