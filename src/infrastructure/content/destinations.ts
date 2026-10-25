import type { Destination } from '../../domain/destination.ts';

// Contenido de demostración. Reemplaza los textos y las canciones por el material real.
// Pega las URLs definitivas de cada playlist en links. null muestra «Próximamente».
export const destinations: readonly Destination[] = [
  {
    slug: 'florecer', symbol: 'flower', name: 'La flor', number: '01', color: '#00d395',
    mood: 'PARA VOLVER A EMPEZAR', title: 'Algo en ti todavía florece.', scene: 'garden',
    introduction: 'Hay cosas que crecen incluso cuando nadie las está mirando. Quizá llegaste hasta aquí para recordar que tú también puedes empezar otra vez. Sin prisa. Sin tener todas las respuestas.',
    revelation: 'Elegiste la flor. Tal vez no fue casualidad: a veces, lo que necesitas no es encontrar un camino nuevo, sino darte permiso para recorrerlo.',
    catharsis: 'Si hoy toca llorar, que sea como llueve sobre un jardín. Aquí puedes quedarte un rato. Todo lo que sientes tiene un lugar.',
    tracks: [
      { title: 'Donde empieza la luz', artist: 'Génesis · demo', duration: '3:42' },
      { title: 'Jardín interior', artist: 'Artista local · demo', duration: '4:08' },
      { title: 'Otra primavera', artist: 'Génesis · demo', duration: '3:26' },
    ],
    links: { bandcamp: null, appleMusic: null, youtubeMusic: null, spotify: null },
  },
  {
    slug: 'brillar', symbol: 'star', name: 'La estrella', number: '02', color: '#479bd3',
    mood: 'PARA PERDER EL MIEDO', title: 'No apagues lo que te hace brillar.', scene: 'rooftop',
    introduction: 'Hay una ciudad entera al otro lado de tu ventana y una versión de ti que todavía no conoces. Esta es una pequeña señal para salir a buscarla. Sube el volumen. Confía en ese impulso.',
    revelation: 'Elegiste la estrella. No hace falta saber exactamente a dónde vas para dar el primer paso. A veces, la dirección aparece cuando empiezas a moverte.',
    catharsis: 'Incluso las estrellas parpadean. Puedes tener miedo y seguir brillando. Respira: esta noche el cielo también está de tu lado.',
    tracks: [
      { title: 'Señales en el cielo', artist: 'Génesis · demo', duration: '3:18' },
      { title: 'Fuera de órbita', artist: 'Artista local · demo', duration: '4:21' },
      { title: 'Hasta el amanecer', artist: 'Génesis · demo', duration: '3:55' },
    ],
    links: { bandcamp: null, appleMusic: null, youtubeMusic: null, spotify: null },
  },
  {
    slug: 'sentir', symbol: 'eye', name: 'El ojo', number: '03', color: '#ff98cf',
    mood: 'PARA MIRAR HACIA DENTRO', title: 'Lo que buscas también te busca.', scene: 'room',
    introduction: 'Afuera todo hace ruido. Aquí, por un momento, puedes bajar la guardia. Hay canciones que funcionan como espejos: no te dicen quién ser, solo te devuelven algo que habías olvidado.',
    revelation: 'Elegiste el ojo. Mira un poco más despacio. Tal vez la respuesta que esperabas no llegue como una certeza, sino como una canción que se queda contigo.',
    catharsis: 'No tienes que explicarlo todo. Hay emociones que solo necesitan una habitación en silencio y una canción que las entienda. Esta puede ser la tuya.',
    tracks: [
      { title: 'Detrás de los párpados', artist: 'Génesis · demo', duration: '4:02' },
      { title: 'Reflejos', artist: 'Artista local · demo', duration: '3:37' },
      { title: 'Lo que no dije', artist: 'Génesis · demo', duration: '4:16' },
    ],
    links: { bandcamp: null, appleMusic: null, youtubeMusic: null, spotify: null },
  },
  {
    slug: 'soltar', symbol: 'moon', name: 'La luna', number: '04', color: '#ff424f',
    mood: 'PARA ABRAZAR LA NOCHE', title: 'También se vale desaparecer un rato.', scene: 'night',
    introduction: 'Son esas horas en las que el mundo parece haberse quedado dormido y tú sigues aquí. Esta selección es para acompañarte en lo que pesa, en lo que termina, en lo que todavía no sabes soltar.',
    revelation: 'Elegiste la luna. No estás llegando tarde. Hay procesos que solo suceden en la oscuridad, y hay despedidas que también son una forma de volver a ti.',
    catharsis: 'Llora si hace falta. Nadie está contando los minutos. Deja que una canción termine y que empiece la siguiente. La noche no dura para siempre.',
    tracks: [
      { title: 'Las 3:00 a. m.', artist: 'Génesis · demo', duration: '4:32' },
      { title: 'Ciudad dormida', artist: 'Artista local · demo', duration: '3:48' },
      { title: 'Cuando todo pase', artist: 'Génesis · demo', duration: '4:05' },
    ],
    links: { bandcamp: null, appleMusic: null, youtubeMusic: null, spotify: null },
  },
];
