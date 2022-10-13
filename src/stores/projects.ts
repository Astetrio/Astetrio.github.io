/*export const useProjectsStore = defineStore('projects', () => {
  const state = reactive({
    projects: [{}],
  });

  return {
    ...toRefs(readonly(state)),
  };
});*/

const projects = [
  {
    Guid: '68dfcad1-5624-4929-9fbd-49de3f21b97f',
    Title: {
    	'en-US': 'Crazy Stack'
    },
    SmallDescription: {
    	'en-US': 'Test',
    	'ru-RU': 'Тест',
    },
    Description: {
    	'en-US': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.\r\n![alt](images/test.jpg)',
    },
    Thumbnail: 'images/crazy-stack.jpg',
  },
  /*{
    Guid: '0af7fd61-4024-49d2-84bf-7332d7513d6f',
    Title: 'Test',
    SmallDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\r\n\r\nAenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n\r\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
    Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\r\n\r\nAenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n\r\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
    Thumbnail: 'images/test.jpg',
  },
  {
    Guid: '0af7fd61-4024-49d2-84bf-7332d7513d6e',
    Title: 'Test2',
    SmallDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\r\n\r\nAenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n\r\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
    Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\r\n\r\nAenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n\r\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
    Thumbnail: 'images/test.jpg',
  },*/
];

const mappedProjects = new Map(projects.map((project) => [project.Guid, project]));
//const mappedProjects = Object.fromEntries(projects.map(({ Guid, ...rest }) => [Guid, rest]));

export { projects, mappedProjects };
