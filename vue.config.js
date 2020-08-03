module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/variable.scss";`
        }
      }
    }
  }