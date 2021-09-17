<template>
  <div>
    <section>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div
          v-if="banners && banners[0].data[6]"
          class="
            col-span-1
            md:col-span-2
            relative
            border-t
            md:border-t-2 md:border-r-2
            border-white
            flex-1
          "
        >
          <img
            v-lazy="banners[0].data[6].img"
            alt=""
            class="
              object-cover object-top
              w-full
              my-auto
              overflow-hidden
              bg-white
              focus:outline-none
              md:object-cover
              h-rem
            "
          />

          <nuxt-link
            :to="banners[0].data[6].link"
            class="absolute inset-y-0 left-0 w-1/2 flex items-end justify-end"
          >
            <div
              class="
                mb-10
                mr-20
                md:mb-20
                bg-white
                py-2
                px-4
                rounded-md
                text-gray-800
                font-bold
                text-sm
              "
            >
              {{ banners[0].data[6].heading }}
            </div>
          </nuxt-link>

          <nuxt-link
            :to="banners[0].data[6].link"
            class="
              absolute
              inset-y-0
              right-0
              w-1/2
              flex
              items-end
              justify-start
            "
          >
            <div
              class="
                mb-10
                ml-20
                md:mb-20
                bg-white
                py-2
                px-4
                rounded-md
                text-gray-800
                font-bold
                text-sm
              "
            >
              {{ banners[0].data[6].heading }}
            </div>
          </nuxt-link>
        </div>

        <div
          v-if="banners && banners[0].data[7]"
          class="col-span-1 relative border-t md:border-t-2 border-white flex-1"
        >
          <img
            v-lazy="banners[0].data[7].img"
            alt=""
            class="
              object-cover object-top
              w-full
              my-auto
              overflow-hidden
              bg-white
              focus:outline-none
              md:object-cover
              h-rem
            "
          />

          <nuxt-link
            :to="banners[0].data[7].link"
            class="absolute inset-0 flex items-end justify-center"
          >
            <div
              class="
                mb-10
                md:mb-20
                bg-white
                py-2
                px-4
                rounded-md
                text-gray-800
                font-bold
                text-sm
              "
            >
              {{ banners[0].data[7].heading }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-if="banners && banners[0].data[8]"
        class="
          relative
          border-t
          md:border-t-2 md:border-r-2
          border-white
          flex-1
        "
      >
        <img
          v-lazy="banners[0].data[8].img"
          alt="Girls"
          class="
            object-cover object-top
            w-full
            my-auto
            overflow-hidden
            bg-white
            focus:outline-none
            md:object-cover
            h-rem
          "
        />

        <nuxt-link
          :to="banners[0].data[8].link"
          class="absolute inset-0 flex items-end justify-center"
        >
          <div
            class="
              mb-10
              md:mb-20
              bg-white
              py-2
              px-4
              rounded-md
              text-gray-800
              font-bold
              text-sm
            "
          >
            {{ banners[0].data[8].heading }}
          </div>
        </nuxt-link>
      </div>

      <div
        v-if="banners && banners[0].data[9]"
        class="
          relative
          border-t
          md:border-t-2 md:border-r-2
          border-white
          flex-1
        "
      >
        <img
          v-lazy="banners[0].data[9].img"
          alt="Boys"
          class="
            object-cover object-top
            w-full
            my-auto
            overflow-hidden
            bg-white
            focus:outline-none
            md:object-cover
            h-rem
          "
        />

        <nuxt-link
          :to="banners[0].data[9].link"
          class="absolute inset-0 flex items-end justify-center"
        >
          <div
            class="
              mb-10
              md:mb-20
              bg-white
              py-2
              px-4
              rounded-md
              text-gray-800
              font-bold
              text-sm
            "
          >
            {{ banners[0].data[9].heading }}
          </div>
        </nuxt-link>
      </div>

      <div
        v-if="banners && banners[0].data[10]"
        class="relative border-t md:border-t-2 border-white flex-1"
      >
        0000 {{ banners && banners[0].data[10] }}
        <img
          v-lazy="banners[0].data[10].img"
          alt="Mens"
          class="
            object-cover object-top
            w-full
            my-auto
            overflow-hidden
            bg-white
            focus:outline-none
            md:object-cover
            h-rem
          "
        />

        <nuxt-link
          :to="banners[0].data[10].link"
          class="absolute inset-0 flex items-end justify-center"
        >
          <div
            class="
              mb-10
              md:mb-20
              bg-white
              py-2
              px-4
              rounded-md
              text-gray-800
              font-bold
              text-sm
            "
          >
            {{ banners[0].data[10].heading }}
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import NuxtLink from '~/components/NuxtLink.vue'
export default {
  components: { NuxtLink },
  props: { banners: { type: Array, default: null } },
}
</script>

<style scoped>
@media (max-width: 768px) {
  .h-rem {
    height: 20rem;
  }
}
@media (min-width: 768px) {
  .h-rem {
    height: 40rem;
  }
}
</style>
