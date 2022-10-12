<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="q-py-md row justify-center bg-grey-2 header">
      <div class="container">
        <q-toolbar class="justify-center">
          <!-- <q-btn class="drawer-btn" rounded @click="toggleDrawer">
            <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
              <q-icon class="absolute-center" key="closed" v-if="!isDrawerOpened" name="mdi-menu" />
              <q-icon class="absolute-center" key="opened" v-else name="mdi-close" />
            </transition-group>
          </q-btn> -->
          <q-toolbar-title class="col-12 col-sm logo">
            <!-- <svg class="svg-defs" width="600px" height="92px">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="110%" y2="0%">
                  <stop stop-color="#fff" offset="0"></stop>
                  <stop stop-color="#fff" offset="10%"></stop>
                  <stop stop-color="#AAA" offset="10%"></stop>
                  <stop stop-color="#AAA" offset="20%"></stop>
                  <stop stop-color="#777" offset="20%"></stop>
                  <stop stop-color="#777" offset="30%"></stop>
                  <stop stop-color="#333" offset="30%"></stop>
                  <stop stop-color="#333" offset="40%"></stop>
                  <stop stop-color="#000" offset="40%"></stop>
                  <stop stop-color="#000" offset="50%"></stop>
                  <stop stop-color="#fff" offset="50%"></stop>
                  <stop stop-color="#fff" offset="60%"></stop>
                  <stop stop-color="#AAA" offset="60%"></stop>
                  <stop stop-color="#AAA" offset="70%"></stop>
                  <stop stop-color="#777" offset="70%"></stop>
                  <stop stop-color="#777" offset="80%"></stop>
                  <stop stop-color="#333" offset="80%"></stop>
                  <stop stop-color="#333" offset="90%"></stop>
                  <stop stop-color="#000" offset="90%"></stop>
                  <stop stop-color="#000" offset="100%"></stop>
                </linearGradient>

                <mask id="masking" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                  <rect y="0" width="1" height="1" fill="url(#gradient)"></rect>
                  <circle cx=".5" cy=".5" r=".42" fill="black"></circle>

                  <circle cx="0" cy=".5" r=".32" fill="black"></circle>
                  <circle cx="1" cy=".5" r=".32" fill="black"></circle>

                  <circle cx="0" cy=".5" r=".3" fill="gray"></circle>
                  <circle cx=".5" cy=".5" r=".4" fill="gray"></circle>
                  <circle cx="1" cy=".5" r=".3" fill="gray"></circle>

                  <circle cx="0" cy=".5" r=".25" fill="white"></circle>
                  <circle cx=".5" cy=".5" r=".35" fill="white"></circle>
                  <circle cx="1" cy=".5" r=".25" fill="white"></circle>
                </mask>
              </defs>
              <text class="logo-text text-yellow" style="mask: url(#masking)" x="0" y="95%">GOLDSEMI</text>
            </svg> -->

            <router-link class="row items-center justify-start" to="/">
              <q-img no-spinner class="logo-icon" src="~assets/icon.svg" />
              <h1 class="logo-text text-black">Astetrio</h1>
              <!-- <q-img height="92px" :src="logoImage"></q-img> -->
            </router-link>
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </q-header>

    <!-- <q-drawer :value="isDrawerOpened">
      <q-list>
        <q-item class="q-pa-none">
          <q-btn flat class="col">1</q-btn>
        </q-item>
        <q-item class="q-pa-none">
          <q-btn flat class="col">2</q-btn>
        </q-item>
        <q-item class="q-pa-none">
          <q-btn flat class="col">3</q-btn>
        </q-item>
      </q-list>
    </q-drawer><q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="isDrawerOpened = !isDrawerOpened"
        />

        <q-toolbar-title class="text-yellow">
          GOLDSEMI
        </q-toolbar-title>

				<q-btn to="cart" dense round flat icon="mdi-cart" class="q-ml-md">
					<q-badge color="blue-10" floating>
						0
					</q-badge>
				</q-btn>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <div class="relative-position">
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300" @before-leave="beforeLeave" @after-leave="afterLeave">
            <keep-alive>
              <component :key="$route.fullPath" :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </q-page-container>

    <q-footer class="row q-py-lg justify-center bg-grey-2 footer">
      <div class="row container q-px-sm-lg">
        <div class="column col-12 col-sm-offset-3 items-center">
          <!-- <h4 class="q-px-xl text-center afterline full-width">{{ $i18n.t('contacts') }}</h4> -->
          <div>
            <div class="column contacts">
              <a class="text-black" href="mailto:astetrio.dev.supp@gmail.com">astetrio.dev.supp@gmail.com</a>
              <!-- <a href="tg://resolve?domain=kley_goldsemi">@kley_goldsemi</a> -->
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mdiEarth } from '@quasar/extras/mdi-v6';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
    toggleDrawer() {
      this.isDrawerOpened = !this.isDrawerOpened;
    },
    localeChanged() {
      this.$i18n.locale = this.$i18n.availableLocales[this.currentLocaleIndex];

      localStorage.setItem('locale', this.currentLocaleIndex.toString());
    },
    beforeLeave(el: HTMLElement) {
      const { top } = el.getBoundingClientRect();
      el.style.position = 'fixed';
      el.style.top = `${top}px`;
      el.style.left = '0px';
      el.style.right = '0px';
      el.style.zIndex = '-1';
    },
    afterLeave(el: HTMLElement) {
      el.style.position = '';
      el.style.top = '';
      el.style.left = '';
      el.style.right = '';
      el.style.zIndex = '';
    },
  },

  mounted() {
    const storedLocale = localStorage.getItem('locale');

    //this.$q.addressbarColor.set('#e2e35a');

    if (storedLocale === null) {
      this.currentLocaleIndex = this.$i18n.availableLocales.findIndex((x) => x === 'uz');
    } else {
      this.currentLocaleIndex = Number(storedLocale);
    }
    this.$i18n.locale = this.$i18n.availableLocales[this.currentLocaleIndex];

    this.languages = this.$i18n.availableLocales.map((x, i) => {
      return { label: x.toUpperCase(), value: i };
    });

    /*const menu = (this.$refs.languagesDropdown as Vue).$refs.menu as Vue;
    menu.$props.transitionHide = 'jump-up';
    menu.$props.transitionShow = 'jump-down';*/
  },

  setup() {
    const isDrawerOpened = ref<boolean>(false);
    const currentLocaleIndex = ref<number>(0);
    const languages = ref<{ label: string; value: number }[]>();
    // const logoImage = ref<string>(
    //   tti.generateSync('GOLDSEMI', {
    //     fontFamily: 'Dela Gothic One',
    //     textColor: '#FFEB3B',
    //     bgColor: 'transparent',
    //     fontSize: 40,
    //     //maxWidth: ,
    //     customHeight: 92,
    //     maxWidth: 586,
    //     lineHeight: 1.1,
    //     fontWeight: 500,
    //     textAlign: 'center',
    //     verticalAlign: 'center',
    //     margin: 0,
    //   }),
    // );

    return { isDrawerOpened, currentLocaleIndex, languages, mdiEarth };
    //, logoImage };
  },
});
</script>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=New+Tegomin&family=Permanent+Marker&family=Train+One&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');

/* [118] */
// @font-face {
//   font-family: 'Dela Gothic One';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(https://fonts.gstatic.com/s/delagothicone/v4/hESp6XxvMDRA-2eD0lXpDa6QkBAGQCMZQhgpMHvQclGQe7meVsqPbDrj6fo.118.woff2) format('woff2');
//   unicode-range: U+21-22, U+27-2a, U+2c-3b, U+3f, U+41-4d, U+4f-5d, U+61-7b, U+7d, U+ab, U+ae, U+b2-b3, U+b7, U+bb, U+c9, U+cd, U+d6, U+d8, U+dc, U+e0-e5, U+e7-ed, U+ef, U+f1-f4, U+f6, U+f8, U+fa, U+fc-fd, U+103, U+14d, U+1b0, U+300-301, U+1ebf, U+1ec7, U+2013-2014, U+201c-201d, U+2039-203a, U+203c, U+2048-2049, U+2113, U+2122, U+65e5, U+6708, U+70b9;
// }

.svg-defs {
  position: absolute;
  width: 0;
  height: 0;
}

.back-to-top {
  font-size: 24px;
  border-radius: 0;
}

.q-toolbar {
  flex-wrap: wrap !important;
}

.footer {
  h4 {
    color: #ffff52;
  }

  /*a {
    color: #000000;
  }*/
}

.drawer-btn {
  width: 64px;
  height: 64px;
}

//.fadeIn,
.fadeOut {
  position: absolute;
  //inset: 0%;
}

.logo {
  //font-family: 'Dela Gothic One'; //, 'New Tegomin', 'Indie Flower', 'Train One', 'Permanent Marker';

  line-height: 1;

  & > * {
    vertical-align: bottom;
  }

  /*& > a {
    display: block;
  }*/

  &-text {
    margin-left: 16px;
    font-size: 1em;
    // mask: url(#masking);
  }

  &-icon {
    width: 44px;
    font-size: 2em;
    filter: grayscale(1) brightness(0);
  }

  @media (min-width: $breakpoint-sm-max) {
    &-text {
      margin-right: 16px;
      font-size: 4em;
    }

    &-icon {
      width: 84px;
      font-size: 5em;
    }
  }
}

.contacts {
  line-height: 1.8;
}

.languages {
  &:deep(.q-field__marginal),
  &:deep(.q-field__native) {
    color: #ffeb3b;
  }
}
</style>
