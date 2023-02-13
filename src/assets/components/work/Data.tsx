import Work1 from '../../../images-works/Work1.png';
import Work2 from '../../../images-works/Work2.png';
import Work3 from '../../../images-works/Work3.png';
import Work4 from '../../../images-works/Work4.png';
import Work5 from '../../../images-works/Work5.png';

interface ProjectsData{
  id: number;
  image: any;
  title: string;
  category: string;
};

export const projectsData = [

  {
      id:1,
      image: Work1,
      title: 'Web design',
      category:'web'
  },
  {
      id:2,
      image: Work2,
      title: 'App movil',
      category:'app'
  },
  {
      id:3,
      image: Work3,
      title: 'Brand design',
      category:'design'
  },
  {
      id:4,
      image: Work4,
      title: 'Web design',
      category:'app'
  },
  {
      id:5,
      image: Work5,
      title: 'Web design',
      category:'web'
  },
  
  ];
  
  export const projectsNav = [
  {
      name: 'all',
  },
  {
      name: 'web',
  },
  {
      name: 'app',
  },
  {
      name: 'design',
  },
  ];

  export default projectsData;