import { Blog } from './blog-type';
export const blogs: Blog[] = [
  {
    id: 0,
    image: 'assets/images/blog/101.jpg',
    category: 'Lenguaje',
    heading: 'Typescript',
    subHeading: 'El orden en el mundo del caos',
    blogPosts: '1 Sección',
    isActive: true,
  },
  {
    id: 1,
    image: 'assets/images/blog/101.jpg',
    category: 'Front-End',
    heading: 'Angular',
    subHeading:
      'La mejor plataforma de la historia para desarrollo de aplicaciones web.',
    blogPosts: 'En desarrollo',
    isActive: false,
  },
  {
    id: 2,
    image: 'assets/images/blog/202.jpg',
    category: 'Back-End',
    heading: 'Nestjs',
    subHeading:
      'Framework para uso en Back-End inspirado en Angular, simplemente genial.',
    blogPosts: 'En desarrollo',
    isActive: false,
  },
  {
    id: 3,
    image: 'assets/images/blog/303.jpg',
    category: 'Database',
    heading: 'MySQL',
    subHeading:
      'Gestor de base de datos muy conocido, y por muy buenas razones.',
    blogPosts: 'En desarrollo',
    isActive: false,
  },
];
