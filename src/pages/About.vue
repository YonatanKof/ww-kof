<template>
    <Layout :show-logo="true" :show-posts="true">
        <section class="about">
            <p id="my-name">Hi There 👋 <br />My Name Is</p>
            <h1 class="about__title">
                Yonatan <span class="grab-word">Ben Knaan</span>
            </h1>
            <h2 class="about__subtitle">
                A design system manager, a mismatched persona and an alright
                dude from TLV 🇮🇱
            </h2>
            <Hr hr-margin-bottom="var(--space-2xl)" />
            <div class="about__bio-text">
                <div id="the-text">
                    <p>
                        Proficient in brand crafting, design management and
                        hands-on UX/UI. With more then 10 years of experience.
                    </p>
                    <p>
                        My passion is merging <em>ideas</em> with
                        <em>business</em>, and <em>people</em> with
                        <em>technology</em> -> where the goal is to create
                        products that are valuable, beautiful and maintainable.
                    </p>
                    <p>
                        I design digital products for a living and build
                        websites, like this one, for fun, to explore design in
                        code and to tell short stories.
                    </p>
                    <p id="cv-text">
                        Wanna see my full CV?
                        <g-link
                            to="https://www.notion.so/yonatankof/Yonatan-Ben-Knaan-CV-615078174644460db169c928cd409f9e"
                        >
                            Check it out on Notion</g-link
                        >.
                    </p>
                    <Hr
                        id="hidden-hr"
                        hr-margin-top="var(--space-2xl)"
                        hr-margin-bottom="var(--space-2xl)"
                    />
                </div>
                <ul id="meta-list">
                    <li v-for="meta in metas" :key="meta.mess">
                        <span>{{ meta.icon }}</span> {{ meta.mess }}
                    </li>
                </ul>
            </div>
        </section>
    </Layout>
</template>

<script>
import Author from "~/components/Author.vue";
import Hr from "~/components/Hr.vue";

export default {
    components: {
        Author,
        Hr,
    },
    metaInfo: {
        title: "About Yonatan Ben Knaan",
    },
    data() {
        return {
            infos: {
                Age: 41,
                Status: "Married +1* + Cat + Dog",
                Residence: "Tel Aviv, IL",
                Education: "Shenkar",
                Mobile: "+972-50-785-5149",
            },
            metas: [
                {
                    icon: "💪",
                    mess: "High on performance and strong on delivery",
                },
                {
                    icon: "🤹‍♂️",
                    mess:
                        "Big projects? Not so intimidating when break them down to small stuff",
                },
                {
                    icon: "👂",
                    mess:
                        "My management style is questioning without answering",
                },
                {
                    icon: "💼",
                    mess:
                        "My DesignOps is simple or complex - where accuracy is the aim",
                },
                {
                    icon: "📐",
                    mess: "Love UX engineering and designing with code",
                },
                {
                    icon: "🖋",
                    mess: "Digital craftsman and documenter",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "../assets/style/index";

.grab-word {
    white-space: nowrap;
}
.about {
    margin-top: var(--spacem-6xl);
    max-width: var(--content-width-md);
    display: flex;
    flex-direction: column;

    &__title {
        font-size: var(--font-size-9xl);
    }
    &__subtitle {
        border-left: var(--spacem-xs) double var(--link-color-HL);
        padding: var(--spacem-2xs) 0 var(--spacem-2xs) var(--spacem-xs);
        font-weight: var(--font-wight--bold);
        font-family: var(--font-family--body);
    }

    &__bio-text {
        display: flex;
        font-size: var(--font-size-2xl);
        #cv-text {
            font-size: initial;
            @include dimmed;
            margin-top: var(--space-2xl);
        }
        @include mQ-max($display-size-sm) {
            flex-direction: column;
        }
        #the-text {
            margin-inline-end: var(--space-sm);
        }
        #meta-list {
            list-style: none;
            margin-left: 0;
            min-width: 30%;
            font-size: var(--font-size-md);
            li {
                display: flex;
            }
            span {
                margin-inline-end: var(--spacem-sm);
            }
            @include mQ-max($display-size-sm) {
                font-size: var(--font-size-xl);
            }
        }
    }

    &__image-cont {
        display: flex;
        flex-direction: row-reverse;
    }
    &__image {
        filter: saturate(0.5) opacity(0.5) hue-rotate(30deg);
        max-width: 50%;
        border-radius: 50%;
        transform: scale(1.35);
        transform-origin: 80% 100%;
    }
    #hidden-hr {
        display: none;
        @include mQ-max($display-size-sm) {
            display: block;
        }
    }
    #my-name {
        font-family: "Permanent Marker";
        line-height: 1.1;
        @include dimmed;
        transform: rotateZ(-12deg);
        width: max-content;
        position: relative;
        left: calc(var(--space-md) * -1);
        top: var(--space-sm);
        z-index: -10;
    }
    // @include mQ-max($display-size-md) {
    //   background-color: wheat;
    // }

    // @include mQ-max($display-size-sm) {
    //   background-color: salmon;
    // }

    // @include mQ-max($display-size-xs) {
    //   background-color: aliceblue;
    // }
}
</style>