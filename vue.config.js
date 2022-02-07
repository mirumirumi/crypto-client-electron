module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_css.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "prd"
    ? "/"
    : "/",
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "crypto-client",
        appId: "com.crypto.client",
        win: {
          target: [{
            target: "portable",
            arch: ["x64"]
          }],
        }
      }
    }
  },
}
