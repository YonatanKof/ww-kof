<template>
  <Layout :show-logo="true" :show-posts="true">
    <section class="about">
      <h1 class="about__title-1">
        Yonatan <span class="grab-word">Ben Knaan</span>
      </h1>
      <h2 class="about__title-2">
        A design system manager and an alright dude from TLV 🇮🇱
      </h2>
      <div class="about__bio-text">
        <div id="the-text">
          <p>
            Proficient in brand crafting, design management and hands-on UX/UI.
            With more then 10 years of experience.
          </p>
          <p>
            My passion is merging <em>ideas</em> with <em>business</em>, and
            <em>people</em> with <em>technology</em> -> where the goal is to
            create products that are valuable, beautiful and maintainable.
          </p>
          <p>
            I design digital products for a living and build websites, like this
            one, for fun, to explore design in code and to tell short stories.
          </p>
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

export default {
  components: {
    Author,
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
          mess: "My management style is questioning without answering",
        },
        {
          icon: "💼",
          mess: "My DesignOps is simple or complex - where accuracy is the aim",
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
  max-width: var(--content-width-sm);
  display: flex;
  flex-direction: column;

  &__title-1 {
    font-size: var(--font-size-9xl);
  }
  &__title-2 {
    border-left: var(--spacem-xs) double var(--link-color-highlight);
    padding: var(--spacem-2xs) 0 var(--spacem-2xs) var(--spacem-xs);
    font-weight: var(--font-wight--bold);
    font-family: var(--font-family--body);
  }

  &__bio-text {
    font-size: var(--font-size-2xl);
    display: flex;
    @include mQ-max($display-size-sm) {
      flex-direction: column;
    }
    #the-text {
      margin-inline-end: var(--spacem-sm);
      @include mQ-max($display-size-sm) {
        margin-bottom: var(--spacem-lg);
      }
    }
    #meta-list {
      list-style: none;
      margin-left: 0;
      // max-width: calc(var(--spacem-8xl) * 10);
      min-width: 33%;
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

  // @include mQ-max($display-size-md) {
  //   background-color: wheat;
  // }

  // @include mQ-max($display-size-sm) {
  //   background-color: salmon;
  // }

  // @include mQ-max($display-size-xs) {
  //   background-color: aliceblue;
  // }
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
}
</style>