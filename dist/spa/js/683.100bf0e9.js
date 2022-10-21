'use strict';
(globalThis['webpackChunkastetrio_site'] =
  globalThis['webpackChunkastetrio_site'] || []).push([
  [683],
  {
    2018: (e, t, n) => {
      n.d(t, { _: () => s, q: () => r });
      const o =
          '</br>Use this incredible pack to make games with stack mechanics quickly and easily\r\n\r\n- Make different factories and food stands 🏭\r\n- Make runners with a stickman carrying pallets of eggs 🥚\r\n- Do whatever you want with your imagination!!! 🤩\r\n\r\nIf something went wrong or you want to suggest some idea, you can write to me astetrio.dev.supp@gmail.com\r\n\r\nUnity asset store link: Coming soon\r\n',
        r = [
          {
            Guid: '68dfcad1-5624-4929-9fbd-49de3f21b97f',
            SmallDescription: {
              'en-US':
                '# Crazy Stack\nStacking mechanics to quickly bring your hyper-casual games to life',
            },
            Description: { 'en-US': o },
            Thumbnail: 'images/crazy-stack/preview.webp',
          },
        ],
        s = new Map(r.map((e) => [e.Guid, e]));
    },
    5642: (e, t, n) => {
      n.d(t, { Z: () => p });
      var o = n(9835);
      const r = { class: 'col full-width full-height custom-image' },
        s = { class: 'inter relative-position' },
        c = ['src', 'alt'];
      function a(e, t, n, a, i, l) {
        const u = (0, o.Q2)('shared-element');
        return (
          (0, o.wg)(),
          (0, o.iD)('div', r, [
            (0, o._)('div', s, [
              (0, o.wy)(
                (0, o._)(
                  'img',
                  { ref: 'img', src: e.src, alt: e.alt },
                  null,
                  8,
                  c,
                ),
                [
                  [
                    u,
                    { restrictToRoutes: ['/', `/project/${e.guid}`] },
                    `preview-${e.guid}`,
                  ],
                ],
              ),
            ]),
          ])
        );
      }
      const i = (0, o.aZ)({
        name: 'CustomImage',
        props: { src: String, alt: String, guid: String },
      });
      var l = n(1639);
      const u = (0, l.Z)(i, [
          ['render', a],
          ['__scopeId', 'data-v-36cbcd50'],
        ]),
        p = u;
    },
    4683: (e, t, n) => {
      n.r(t), n.d(t, { default: () => b });
      var o = n(9835),
        r = n(6970);
      const s = { class: 'column text-black items-center projects' };
      function c(e, t, n, c, a, i) {
        const l = (0, o.up)('project-item'),
          u = (0, o.up)('q-page');
        return (
          (0, o.wg)(),
          (0, o.j4)(
            u,
            { class: 'main' },
            {
              default: (0, o.w5)(() => [
                (0, o._)('section', s, [
                  (0, o._)(
                    'div',
                    {
                      class:
                        'col q-px-lg justify-center container projects_content',
                      style: (0, r.j5)({
                        'column-count':
                          e.projects.length < 3 ? e.projects.length : void 0,
                      }),
                    },
                    [
                      ((0, o.wg)(!0),
                      (0, o.iD)(
                        o.HY,
                        null,
                        (0, o.Ko)(
                          e.projects,
                          (e) => (
                            (0, o.wg)(),
                            (0, o.j4)(
                              l,
                              {
                                class: 'q-mb-lg q-mx-auto',
                                key: e.Guid,
                                project: e,
                              },
                              null,
                              8,
                              ['project'],
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    4,
                  ),
                ]),
              ]),
              _: 1,
            },
          )
        );
      }
      var a = n(499);
      const i = { class: 'column overflow-hidden justify-between project' };
      function l(e, t, n, r, s, c) {
        const a = (0, o.up)('custom-image'),
          l = (0, o.up)('router-link'),
          u = (0, o.up)('q-markdown');
        return (
          (0, o.wg)(),
          (0, o.iD)('div', i, [
            (0, o.Wm)(
              l,
              { class: 'link', to: `/project/${e.project.Guid}` },
              {
                default: (0, o.w5)(() => [
                  (0, o.Wm)(
                    a,
                    {
                      src: e.project.Thumbnail,
                      alt: e.project.Guid,
                      guid: e.project.Guid,
                    },
                    null,
                    8,
                    ['src', 'alt', 'guid'],
                  ),
                ]),
                _: 1,
              },
              8,
              ['to'],
            ),
            (0, o.Wm)(
              u,
              {
                'no-heading-anchor-links': '',
                class: 'col-auto q-px-lg q-pb-md',
                src: e.$mt(e.project.SmallDescription),
              },
              null,
              8,
              ['src'],
            ),
          ])
        );
      }
      var u = n(5642);
      const p = (0, o.aZ)({
        name: 'ProjectItem',
        components: { CustomImage: u.Z },
        props: { project: { required: !0, type: Object } },
      });
      var d = n(1639);
      const m = (0, d.Z)(p, [
          ['render', l],
          ['__scopeId', 'data-v-34280171'],
        ]),
        g = m;
      var w = n(2018);
      const j = (0, o.aZ)({
        name: 'IndexPage',
        components: { ProjectItem: g },
        setup() {
          const e = (0, a.iH)(w.q);
          return { projects: e };
        },
      });
      var h = n(5404),
        f = n(9984),
        k = n.n(f);
      const v = (0, d.Z)(j, [
          ['render', c],
          ['__scopeId', 'data-v-e42facb6'],
        ]),
        b = v;
      k()(j, 'components', { QPage: h.Z });
    },
  },
]);
