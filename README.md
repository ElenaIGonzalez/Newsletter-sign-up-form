# Newsletter Sign-Up With Success Message

Este proyecto es una implementación de un formulario de suscripción a un newsletter, inspirado en un reto de [Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). El usuario puede ingresar su correo electrónico y, tras enviarlo, verá un mensaje de éxito personalizado.

## Descripción

Este proyecto es un formulario interactivo que permite a los usuarios suscribirse a un boletín de noticias ingresando su correo electrónico. El formulario valida el correo electrónico en tiempo real y, tras una suscripción exitosa, muestra un modal de confirmación accesible utilizando la etiqueta `<dialog>`. El diseño es responsivo y moderno gracias a Tailwind CSS.

## Características

- **Validación de correo electrónico:** Verifica que el email ingresado tenga el formato correcto antes de permitir la suscripción.
- **Modal de confirmación accesible:** Utiliza la etiqueta `<dialog>` para mostrar un mensaje de éxito tras la suscripción.
- **Interfaz moderna y responsiva:** Estilizada con Tailwind CSS para adaptarse a diferentes dispositivos.
- **Desarrollado con TypeScript:** Código más seguro y mantenible.
- **Manipulación dinámica del DOM:** Alterna entre la vista principal y el mensaje de éxito sin recargar la página.

## Tecnologías utilizadas

- **HTML**: Estructura semántica del contenido.
- **TypeScript**: Lógica de interacción y validación del formulario.
- **Tailwind CSS**: Utilizado para el diseño responsivo y estilos utilitarios.
- **Dialog HTML**: Para mostrar el mensaje de éxito como un modal.

## Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu-usuario/Newsletter-sign-up-form.git
   ```
2. Instala las dependencias (si aplica):
   ```sh
   npm install
   ```
3. Ejecuta el proyecto (si aplica):
   ```sh
   npm run dev
   ```

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa un correo electrónico válido en el formulario.
3. Haz clic en "Suscribirse" para ver el modal de confirmación.

## Estructura del proyecto

```
newsletter-sign-up-with-success-message/
│
├── assets/                # Imágenes y fuentes
├── dist/                  # Archivos compilados de TypeScript
├── src/
│   ├── input.css          # Archivo fuente de Tailwind
│   ├── output.css         # CSS generado por Tailwind
│   └── main.ts            # Lógica principal en TypeScript
├── index.html             # Página principal
├── README.md              # Documentación y notas del proyecto
└── package.json           # Configuración de scripts y dependencias
```

## Créditos

- **Reto original**: [Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv)
- **Desarrolladora**: [Elena Gonzalez](https://github.com/ElenaIGonzalez)

---