<template>
    <button
        role="button"
        aria-label="Toggle dark/light"
        @click.prevent="toggleTheme"
        class="toggle-theme"
    >
        <IconBase v-if="darkTheme" height="32" width="32" icon-name="flip-theme-bright" icon-color="var(--link-color)">
            <IconBright />
        </IconBase>
        <IconBase v-else height="32" width="32" icon-name="flip-theme-dark" icon-color="var(--link-color)">
            <IconDark />
        </IconBase>
    </button>
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconBright from "~/components/icons/IconBright.vue";
import IconDark from "~/components/icons/IconDark.vue";

export default {
    components: {
        IconBase,
        IconBright,
        IconDark
    },
    data() {
        return {
            darkTheme: false
        };
    },
    methods: {
        toggleTheme() {
            this.darkTheme = !this.darkTheme;
            // This is using a script that is added in index.html
            window.__setPreferredTheme(this.darkTheme ? "dark" : "light");
        }
    },
    mounted() {
        if (window.__theme == "dark") this.darkTheme = true;
    }
};
</script>

<style lang="scss">
.toggle-theme {
    background-color: transparent;
    border: 0;
    color: var(--body-color);
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:focus {
        outline: none;
    }
}
</style>