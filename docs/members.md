---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'

const publishers = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
]

const maintainers = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>メンバー</template>
    <template #lead>このドキュメントを管理しているメンバーです。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>寄稿者</template>
    <template #lead>ドキュメントの寄稿者一覧です。</template>
    <template #members>
      <VPTeamMembers :size="medium" :members="publishers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>管理者</template>
    <template #lead>このサイトの管理者です。</template>
    <template #members>
      <VPTeamMembers :size="small" :members="maintainers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
