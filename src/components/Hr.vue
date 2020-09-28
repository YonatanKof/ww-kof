<template>
  <hr :style="cssVars"/>
</template>

<script>
export default {
  name: "Hr",
  props: {
    hrHeight: {
      default: "1px",
      type: String,
    },
    hrMarginTop: {
      default: "1rem",
      type: String,
    },
    hrMarginBottom: {
      default: "1rem",
      type: String,
    },
    hrColor: {
      default: "var(--border-color)",
      type: String,
    },
  },
  computed: {
    cssVars() {
      return {
        "--hr-height": this.hrHeight,
        "--hr-margin-top": this.hrMarginTop,
        "--hr-margin-bottom": this.hrMarginBottom,
        "--hr-color": this.hrColor,
      };
    },
  },
};
</script>

<style>
hr {
  border: var(--hr-height) solid var(--hr-color);
  border-radius: var(--hr-height);
  margin-left: 0;
  margin-right: 0;
  margin-top: var(--hr-margin-top);
  margin-bottom: var(--hr-margin-bottom);
}
</style>