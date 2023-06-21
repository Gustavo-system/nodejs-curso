# Curso de Node Js

- Iniciando proyecto, aceptando la configuración por default
```
npm init --y
```

- Inciando proyecto con pasos personalizados
```
npm init
```

- Intalar dependencias en el proyecto
- Se intalan las dependencias dentro del archivo package.json en el apartado de dependecies
```
npm install paquete
npm install paquete --save

// forma corta

npm i paquete paquete
npm i paquete paquete -S

```

- Se crean comandos para ejecutar el proyecto
```
"start": "node ./app.js",
"dev": "nodemon ./app.js"

npm run start
npm run dev
```