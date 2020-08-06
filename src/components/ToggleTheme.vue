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
            height="28"
            width="28"
            icon-name="flip-theme-bright"
            icon-color="none"
            stroke="var(--link-color)"
            stroke-width="3"
        >
            <IconBright />
        </IconBase>
        <IconBase
            class="toggle-theme__icon"
            v-else
            height="28"
            width="28"
            icon-name="flip-theme-dark"
            icon-color="none"
            stroke="var(--link-color)"
            stroke-width="3"
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
        stroke-width: 2;
        transform: scale(1.15);
    }
}

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