'use strict';
(globalThis['webpackChunkastetrio_site'] =
  globalThis['webpackChunkastetrio_site'] || []).push([
  [275],
  {
    2018: (t, e, i) => {
      i.d(e, { _: () => r, q: () => s });
      const n =
          '</br>Use this incredible pack to make games with stack mechanics quickly and easily\r\n\r\n- Make different factories and food stands 🏭\r\n- Make runners with a stickman carrying pallets of eggs 🥚\r\n- Do whatever you want with your imagination!!! 🤩\r\n\r\nIf something went wrong or you want to suggest some idea, you can write to me astetrio.dev.supp@gmail.com\r\n\r\nUnity asset store link: Coming soon\r\n',
        s = [
          {
            Guid: '68dfcad1-5624-4929-9fbd-49de3f21b97f',
            SmallDescription: {
              'en-US':
                '# Crazy Stack\nStacking mechanics to quickly bring your hyper-casual games to life',
            },
            Description: { 'en-US': n },
            Thumbnail: 'images/crazy-stack/preview.webp',
          },
        ],
        r = new Map(s.map((t) => [t.Guid, t]));
    },
    5642: (t, e, i) => {
      i.d(e, { Z: () => d });
      var n = i(9835);
      const s = { class: 'col full-width full-height custom-image' },
        r = { class: 'inter relative-position' },
        a = ['src', 'alt'];
      function o(t, e, i, o, c, l) {
        const u = (0, n.Q2)('shared-element');
        return (
          (0, n.wg)(),
          (0, n.iD)('div', s, [
            (0, n._)('div', r, [
              (0, n.wy)(
                (0, n._)(
                  'img',
                  { ref: 'img', src: t.src, alt: t.alt },
                  null,
                  8,
                  a,
                ),
                [
                  [
                    u,
                    { restrictToRoutes: ['/', `/project/${t.guid}`] },
                    `preview-${t.guid}`,
                  ],
                ],
              ),
            ]),
          ])
        );
      }
      const c = (0, n.aZ)({
        name: 'CustomImage',
        props: { src: String, alt: String, guid: String },
      });
      var l = i(1639);
      const u = (0, l.Z)(c, [
          ['render', o],
          ['__scopeId', 'data-v-36cbcd50'],
        ]),
        d = u;
    },
    275: (t, e, i) => {
      i.r(e), i.d(e, { default: () => w });
      var n = i(9835);
      const s = { class: 'column text-black items-center' },
        r = { class: 'col q-px-lg justify-center container relative-position' },
        a = { class: 'preview' };
      function o(t, e, i, o, c, l) {
        const u = (0, n.up)('custom-image'),
          d = (0, n.up)('q-markdown'),
          g = (0, n.up)('q-page');
        return (
          (0, n.wg)(),
          (0, n.j4)(
            g,
            { class: 'project' },
            {
              default: (0, n.w5)(() => {
                var e, i, o, c;
                return [
                  (0, n._)('section', s, [
                    (0, n._)('div', r, [
                      (0, n._)('div', a, [
                        (0, n.Wm)(
                          u,
                          {
                            src:
                              null === (e = t.project) || void 0 === e
                                ? void 0
                                : e.Thumbnail,
                            alt:
                              null === (i = t.project) || void 0 === i
                                ? void 0
                                : i.Guid,
                            guid: t.guid,
                          },
                          null,
                          8,
                          ['src', 'alt', 'guid'],
                        ),
                      ]),
                      (0, n.Wm)(
                        d,
                        {
                          class: 'content',
                          src: t
                            .$mt(
                              null === (o = t.project) || void 0 === o
                                ? void 0
                                : o.Description,
                            )
                            .replace(
                              '{{SmallDescription}}',
                              t.$mt(
                                null === (c = t.project) || void 0 === c
                                  ? void 0
                                  : c.SmallDescription,
                              ),
                            ),
                        },
                        null,
                        8,
                        ['src'],
                      ),
                    ]),
                  ]),
                ];
              }),
              _: 1,
            },
          )
        );
      }
      var c = i(499),
        l = i(5642),
        u = i(2018);
      const d = (0, n.aZ)({
        name: 'ProjectPage',
        components: { CustomImage: l.Z },
        beforeMount() {
          (this.guid = this.$route.params['guid'].toString()),
            (this.project = u._.get(this.guid));
        },
        setup() {
          const t = (0, c.iH)(),
            e = (0, c.iH)();
          return { project: t, guid: e };
        },
      });
      var g = i(1639),
        m = i(5404),
        p = i(9984),
        v = i.n(p);
      const h = (0, g.Z)(d, [
          ['render', o],
          ['__scopeId', 'data-v-3b6efc52'],
        ]),
        w = h;
      v()(d, 'components', { QPage: m.Z });
    },
  },
]);
