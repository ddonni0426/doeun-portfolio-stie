export default {
  mode: "spa",
  target: "serve",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        "http-equiv": "X-UA-Compatible",
        content: "ie=edge"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        type: "video/mp4",
        href: "@/assets/video/Meeting.mp4",
        as: "video"
      }
    ]
  },
  css: ["~/assets/scss/default.scss"],
  plugins: [
    "@/plugins/scrollTop.js",
    "@/plugins/menuNavi.js",
    "@/plugins/skillChart.js",
    "@/plugins/fontawesome.js",
  ],
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  modules: ["nuxt-mq", "nuxt-fontawesome"],
  mq: {
    defaultBreakpoint: "mobile",
    breakpoints: {
      mobile: 640,
      tablet: 1025,
      pc: Infinity
    }
  },
  build: {}
};
