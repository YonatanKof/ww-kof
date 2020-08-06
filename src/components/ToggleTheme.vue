<template>
    <button
        role="button"
        aria-label="Toggle dark/light"
        @click.prevent="toggleTheme"
        class="toggle-theme"
    >
        <IconBase
            class="toggle-theme__icon"
            v-if="darkTheme"
            icon-name="flip-theme-to-bright"
            icon-color="none"
            stroke="var(--link-color)"
            stroke-width="2"
        >
            <IconBright />
        </IconBase>
        <IconBase
            class="toggle-theme__icon"
            v-else
            icon-name="flip-theme-to-dark"
            icon-color="none"
            stroke="var(--link-color)"
            stroke-width="2"
        >
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
.toggle-theme, .toggle-theme__icon {
    width: var(--space-xl);
    height: var(--space-xl);
    transition: stroke-width, transform 0.35s;
    &:hover {
        stroke-width: 3;
        transform: scale(1.08);
    }
}

.toggle-theme {
    background-color: transparent;
    border: 0;
    color: var(--body-color);
    cursor: pointer;
    &:focus {
        outline: none;
    }
}
</style>