<template>
    <div id="app" class="wrapper">
        <header class="header">
            <div class="header__left">
                <Logo v-if="showLogo" />
            </div>
            <div class="header__right">
                <g-link class="nav__link" to="/about/">About</g-link>
                <g-link v-if="showPosts" class="nav__link" to="/posts/">Content</g-link>
            </div>
        </header>
        <main class="main">
            <slot />
        </main>
        <footer class="footer">
            <p class="footer__links">
                <a href="//twitter.com/yonatankof" target="_blank">Twitter</a>
                <a href="//github.com/yonatankof" target="_blank">GitHub</a>
                <a href="//linkedin.com/in/yonatankof/" target="_blank">Linkedin</a>
                <a href="//dribbble.com/yonatan_kof" target="_blank">Dribbble</a>
                <ToggleTheme />
            </p>
            <span class="footer__copyright">
                Copyright © {{ $static.metadata.siteName }}・{{ new Date().getFullYear() }}
            </span>
        </footer>
    </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
    props: {
        showLogo: { default: true },
        showPosts: { default: true }
    },
    components: {
        Logo,
        ToggleTheme
    }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
.main {
    margin: 0 auto;
    padding: 0 var(--content-space);
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: var(--header-height);
    padding: 0 var(--content-space);
    top: 0;
    z-index: 10;
    &__left,
        a {
            margin: 0;
            margin-inline-end: var(--space-md);
        }
    &__right {
        a {
            margin: 0;
            margin-inline-start: var(--space-md);
        }
    }
    @media screen and (min-width: 1300px) {
        //Make header sticky for large screens
        position: sticky;
        max-width: 100%;
    }
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--content-space);
    margin-bottom: var(--spacem-md);
    text-align: center;
    &__links {
        display: flex;
        align-items: center;
        a {
            margin: 0;
            margin-inline-end: var(--spacem-sm);
        }
    }
    > span {
        font-size: 0.8em;
        margin-top: var(--spacem-xs) 0;
    }
}
</style>
