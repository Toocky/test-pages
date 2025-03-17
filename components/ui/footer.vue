<script setup lang="ts">
const mainSiteUrl = 'https://apipie.ai'

// Define the static sections
const items = [

  [
    'Product',
    [
      {
        name: 'Dashboard',
        to: '/',
        external: false,
      },
      {
        name: 'Documentation',
        to: `${mainSiteUrl}/docs`,
        external: true,
      },
      {
        name: 'Subscribe',
        to: `${mainSiteUrl}/profile/subscribe`,
        external: true,
      },
      {
        name: 'Blog',
        to: `${mainSiteUrl}/docs/blog`,
        external: true,
      },
    ],
  ],  
  [
    'Profile',
    [
      {
        name: 'Login',
        to: `${mainSiteUrl}/profile/auth/login`,
        external: true,
      },
      {
        name: 'Sign Up',
        to: `${mainSiteUrl}/profile/auth/register`,
        external: true,
      },
    ],
  ],
  [
    'Support',
    [
      {
        name: 'Discord',
        to: 'https://discord.gg/hs82THc9Tw',
        external: true,
      },
      {
        name: 'Email',
        to: 'mailto:support@neuronicai.com',
        external: true,
      },
    ],
  ],
  [
    'Legal',
    [
      {
        name: 'Privacy Policy',
        to: `${mainSiteUrl}/docs/Terms/privacy`,
        external: true,
      },
      {
        name: 'User Agreement',
        to: `${mainSiteUrl}/docs/Terms/user-agreement`,
        external: true,
      },
      {
        name: 'API Agreement',
        to: `${mainSiteUrl}/docs/Terms/api-agree`,
        external: true,
      },
    ],
  ],
]
</script>

<template>
  <div
    class="w-full pt-8 pb-10 flex shadow border-t border-gray-800 justify-center"
  >
    <div
      class="flex flex-col md:flex-row gap-10 md:justify-between px-10 w-full xl:px-0 xl:w-[1150px]"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-[26px]">
          <u-link
            :to="mainSiteUrl"
            class="flex gap-2 font-bold font-primary text-2xl md:text-[30px]"
            external
          >
            <img class="h-8" src="~/assets/img/logo-drk.png" alt="logo" />
            APIpie.ai
          </u-link>
          <div class="flex gap-6">
            <u-link to="https://discord.gg/hs82THc9Tw" external>
              <u-icon
                class="h-6 w-6 text-slate-500"
                name="i-simple-icons-discord"
              ></u-icon>
            </u-link>
            <u-link to="https://x.com/APIpie_ai" external>
              <u-icon
                class="h-6 w-6 text-slate-500"
                name="i-simple-icons-twitter"
              ></u-icon>
            </u-link>
            <u-link
              to="https://www.linkedin.com/company/neuronicaiinc"
              external
            >
              <u-icon
                class="h-6 w-6 text-slate-500"
                name="i-simple-icons-linkedin"
              ></u-icon>
            </u-link>
          </div>
        </div>
        <div class="text-slate-500 text-sm font-normal font-secondary">
          Copyright © {{ new Date().getFullYear() }} Neuronic AI.
        </div>
      </div>
      <div class="grid grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
        <div v-for="(item, i) in items" :key="i" class="flex flex-col gap-4">
          <div class="text-slate-500 text-sm font-normal font-secondary">
            {{ item[0] }}
          </div>
          <div class="flex flex-col gap-3.5 items-start">
            <u-link
              v-for="(link, i2) in item[1]"
              :key="i2"
              :to="link.to"
              :external="link.external"
              class="text-slate-200 text-sm font-medium"
            >
              {{ link.name }}
            </u-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
