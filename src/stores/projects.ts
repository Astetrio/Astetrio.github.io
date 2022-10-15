import crazyStack from './crazy-stack.md';

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
    SmallDescription: {
      'en-US':
        '# Crazy Stack\nStacking mechanics to quickly bring your hyper-casual games to life',
    },
    Description: {
      'en-US': crazyStack,
    },
    Thumbnail: 'images/crazy-stack/preview.jpg',
  },
  /*/
  {
    Guid: '68dfcad1-5624-4929-9fbd-49de3f21b97c',
    SmallDescription: {
      'en-US':
        '# Crazy Stack\nStacking mechanics to quickly bring your hyper-casual games to life',
    },
    Description: {
      'en-US': `
Use this incredible pack to make games with stack mechanics quickly and easily

+ Make different factories and food stands 🏭
+ Make runners with a stickman carrying pallets of eggs 🥚
+ Do whatever you want with your imagination!!! 🤩

If something went wrong or you want to suggest some idea, you can write to me astetrio.dev.supp@gmail.com`,
    },
    Thumbnail: 'images/crazy-stack.jpg',
  },
  {
    Guid: '0af7fd61-4024-49d2-84bf-7332d7513d6f',
    SmallDescription: {
      'en-US': `
<br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.

Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.`,
    },
    Description: {
      'en-US': '{{SmallDescription}}',
    },
    Thumbnail: 'images/test.jpg',
  },
  {
    Guid: '0af7fd61-4024-49d2-84bf-7332d7513d6e',
    SmallDescription: {
      'en-US': `
<br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.

Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.

![img](/images/test.jpg)`,
    },
    Description: {
      'en-US': '{{SmallDescription}}',
    },
    Thumbnail: 'images/test.jpg',
  },
  {
    Guid: '0af7fd61-4024-49d2-84bf-7332d7513d6a',
    SmallDescription: {
      'en-US': `
<br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.

Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.`,
    },
    Description: {
      'en-US': '{{SmallDescription}}',
    },
    Thumbnail: 'images/test.jpg',
  },
  //*/
];

const mappedProjects = new Map(
  projects.map((project) => [project.Guid, project]),
);
//const mappedProjects = Object.fromEntries(projects.map(({ Guid, ...rest }) => [Guid, rest]));

export { projects, mappedProjects };
