## Getting Started

Cómo iniciar el proyecto:

```bash
npm run dev
# or
yarn dev
```

## Variables de entorno

En el archivo .env.local se deben agregar las siguientes variables de entorno según el proyecto de wordpress:

```bash
NEXT_PUBLIC_WORDPRESS_GRAPHQL=https://po-proyecto.tk/graphql
NEXT_PUBLIC_WORDPRESS_API_URL=https://admin.prensaobrera.com/
NEXT_PUBLIC_WORDPRESS_API_POSTS=/wp-json/wp/v2/posts
```

## Colores

Los colores del sitio se encuentran en el archivo `src/styles/colors.scss`

## Cosas utiles

Filtrar los autores dentro del \_embedded:

```bash
const filterAutor = _embedded["wp:term"].filter(
  (item) => item[0].taxonomy === "autor"
);
const autores = filterAutor[0].map((autor) => autor.name);
```

## Flujo de trabajo

```bash
Antes de empezar un branch nuevo hacer un “git pull origin NOMBRE”

para crear un branch:
git checkout -b NOMBRE

para moverse a un branch:
git checkout NOMBRE

para traer un branch:
git fetch

para traer cambios:
git pull origin NOMBRE

para guardar cambios:
git status
git add .
git commit -m “asdsahd”
git push origin NOMBRE


para pasar cambios a un branch general: (pullrequest)
ir a github pullrequest
apretamos botón Compare Pullrequest
(elegimos los branchs a comparar)
Le damos enter
```
