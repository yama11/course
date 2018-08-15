<script>
/**
 * @overview 启动页 - 前景
 *
 * @author huojinzhao
 */

import { isAikaolaEnv } from '@/utils';

export default {
  name: 'BootForeground',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    director: {
      disabled: true,
    },

    isAikaolaEnv,
  }),
};
</script>

<template>
  <div
    slot="boot-foreground"
  >
    <div class="boot-foreground__title">
      <span class="boot-foreground__title--index">
        {{ src.index }}
      </span>
      <span class="boot-foreground__title--content">
        {{ src.title }}
      </span>
    </div>

    <!-- 测试使用 -->
    <ul
      v-show="!isAikaolaEnv"
      class="boot-foreground__dev-infomation"
    >
      <li>{{ typeof $store.appInfo }}</li>
      <li
        v-for="line in JSON.stringify($store.appInfo).split(',')"
        :key="line"
      >
        {{ line }}
      </li>
    </ul>

    <AppDirector
      :is-playing = "director.isPlaying"
      :disabled = "director.disabled"
      @control="directorBroadcast"
    />
  </div>

</template>

<style lang="postcss">
.boot-foreground__title {
  position: fixed;
  display: flex;
  flex-flow: column;
  top: 535px;
  left: 230px;
  width: 200px;
  height: 120px;
}

.boot-foreground__title--index {
  font-size: 40px;
  font-weight: bolder;
  color: #fff;
  font-style: italic;
}

.boot-foreground__title--content {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  font-style: italic;
}

.boot-foreground__dev-infomation > li {
  width: 15em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
