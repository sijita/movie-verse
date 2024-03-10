
# BeMaster Test

Proyecto resultado de la realización del test para BeMaster donde aplico al puesto FrontEnd Developer el cual está inspirado en la app de Disney+.

### 🚀 Despliegue:  [BeMaster Movies](https://bemaster-test.vercel.app/)



## Instrucciones de instalación 🛠️

### 1 - Clonar proyecto
```bash
  git clone https://github.com/sijita/bemaster-test
```

### 2 - Ubicarse en el directorio principal

```bash
  cd bemaster-test
```

### 3 - Instalar dependencias

```bash
  npm install
```

### 4 - Iniciar el servidor

```bash
  npm run dev
```


## Variables de entorno y 

Las variables de entorno las subí junto con el repositorio para facilidad de uso.
## Tecnologías usadas en el proyecto 💻 

* **Next.js v14.1.3:**  Uso de componentes del lado del cliente y del servidor

* **Tailwindcss**

* **NextUI:** Componentes hechos con Tailwindcss y React

* **Axios**

* **Valibot:** Validación de datos

* **Next-auth:** Autenticación de usuarios

* **Tabler icons:** Iconos

* **React Hot Toast:** Notificaciones

* **TMDB API:** API utilizada para traer los datos e información de las peliculas y series. [The Movie Database](https://www.themoviedb.org/?language=es)
## Justificaciones

#### Justificaciones con respecto a las tecnologías sugeridas para la realización del reto:

**React JS:**

Utilicé Nextjs en su ultima version ya que ofrece un rendimiento superior a React (vite o create-react-app) gracias a la renderización del lado del servidor (SSR) y la generación de sitios web estáticos.

El uso de Next.js permite crear componentes del lado del servidor que se ejecutan en el servidor y se envían al cliente como HTML estático. Esto da más control a la experiencia del usuario y permite optimizar el rendimiento del sitio web. Además incluye los server actions, enrutamiento automático, la creación de APIs y una serie de características de optimización automática, como la división de código y la carga diferida de imágenes.

Gracias a Nextjs pude incluir al proyecto las siguientes caracteristicas demostrando un poco más de mis conocimientos como:
- Realizar la API para el login de usuarios con dummy data ya que no se requirio manejo de base de datos.
- Uso de componentes del lado del servidor y también los componentes del lado del cliente
- Uso de los servers actions
- Evitar el uso de manejo de estados


**Context API o Redux:**

No fue necesario el uso de Context API o Redux ya que no necesité guardar estados y utilicé componentes en el servidor (que no permiten esto). Para algunas acciones en especifico como filtrar las peliculas y series por día o semana utilicé los server actions de Nextjs.

**Axios (en caso de requerirlo)** ✅

Utilicé Axios para hacer solicitudes HTTP a la API de [The Movie Database](https://www.themoviedb.org/?language=es) y crear una instancia global que me permitiera en cada solicitud enviar el API_KEY proporcionado por la API.

**Plus: Typescript** ✅
