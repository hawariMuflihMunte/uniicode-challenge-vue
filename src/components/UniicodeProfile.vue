<script setup lang="ts">
import { ref } from 'vue';

const techStackIcons: Array<{
  [key: string]: { name: string, icon: string }
}> = [
  {
    vim: {
      name: 'Vim',
      icon: 'https://user-images.githubusercontent.com/25181517/192108889-232b3431-a585-4b36-a62d-9078bd3641d9.png',
    }
  },
  {
    vscode: {
      name: 'Visual Studio Code',
      icon: 'https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png'
    }
  },
  {
    html: {
      name: 'HTML',
      icon: 'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png'
    }
  },
  {
    css: {
      name: 'CSS',
      icon: 'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png'
    }
  },
  {
    sass: {
      name: 'Sass',
      icon: 'https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png'
    }
  },
  {
    bootstrap: {
      name: 'Bootstrap',
      icon: 'https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png'
    }
  },
  {
    tailwindcss: {
      name: 'Tailwind CSS',
      icon: 'https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png'
    }
  },
  {
    javascript: {
      name: 'JavaScript',
      icon: 'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'
    }
  },
  {
    react: {
      name: 'React',
      icon: 'https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
    }
  },
  {
    vue: {
      name: 'Vue',
      icon: 'https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png'
    }
  },
  {
    typescript: {
      name: 'TypeScript',
      icon: 'https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png'
    }
  },
  {
    express: {
      name: 'Express',
      icon: 'https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png'
    }
  },
  {
    c: {
      name: 'C',
      icon: 'https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png'
    }
  },
  {
    cpp: {
      name: 'C++',
      icon: 'https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png'
    }
  },
  {
    python: {
      name: 'Python',
      icon: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png'
    }
  },
  {
    php: {
      name: 'PHP',
      icon: 'https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png'
    }
  },
  {
    ruby: {
      name: 'Ruby',
      icon: 'https://user-images.githubusercontent.com/25181517/192603745-7d34df9e-7756-4756-a539-6a61badf7a80.png'
    }
  },
  {
    go: {
      name: 'Go',
      icon: 'https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png'
    }
  }
]

const getTechInfo = (techName: string): string|undefined => {
  const techIcon = techStackIcons.find((tech) => tech[techName.toLowerCase()])

  if (techIcon) {
    return techIcon[techName.toLowerCase()].icon
  }

  return undefined
}

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  slidePosition: {
    type: String,
    default: 'right'
  },
  strength: {
    type: Array as () => string[],
    required: false,
    default: ['None 😔']
  },
  weakness: {
    type: Array as () => string[],
    required: false,
    default: ['None 😔']
  },
  techStack: {
    type: Array as () => string[],
    required: false,
    default: ['None 😔']
  }
})

const profileDetailsUniicode = ref<HTMLElement|null>(null)

const isProfileDetailsOpened = ref<boolean>(false)
let lastClickTime = 0;

const showProfileDetails = (): void => {
  const currentTime = new Date().getTime()

  if (currentTime - lastClickTime < 300) {
    isProfileDetailsOpened.value = !isProfileDetailsOpened.value

    const elem = profileDetailsUniicode.value

    isProfileDetailsOpened.value
    ? elem?.classList.add(`profile-slide-${props.slidePosition}`)
    : elem?.classList.remove(`profile-slide-${props.slidePosition}`)
  } else {
    lastClickTime = currentTime
  }
}
</script>

<template>
  <article class="profile-uniicode source-code-pro">
    <section
      class="profile-image-uniicode"
      @click="showProfileDetails"
      title="Click to toggle details"
    >
      <span class="hint--bottom hint--no-arrow" :aria-label="name">
        <img
          :src="image"
          :alt="`${name} image`"
          @click="showProfileDetails"
        />
      </span>
    </section>
    <section class="profile-details-uniicode" ref="profileDetailsUniicode">
      <h2 class="profile-details-uniicode__name">{{ name }}</h2>
      <p class="profile-details-uniicode__strength">
        <details>
          <summary>Strength 💪🏼</summary>

          <ul>
            <li v-for="ability in strength" :key="ability">
              {{ ability }}
            </li>
          </ul>
        </details>
      </p>
      <p class="profile-details-uniicode__weakness">
        <details>
          <summary>Weakness 👀</summary>

          <ul>
            <li v-for="weak in weakness" :key="weak">
              {{ weak }}
            </li>
          </ul>
        </details>
      </p>
      <p class="profile-details-uniicode__tech">
        <details>
          <summary>Tech 😎</summary>
          <ul>
            <li v-for="techName in techStack" :key="techName">
              <img
                :src="getTechInfo(techName)"
                :alt="techName"
              />
            </li>
          </ul>
        </details>
      </p>
    </section>
  </article>
</template>
