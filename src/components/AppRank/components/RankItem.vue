<script>
/**
 * @overview 排名展示单项
 *
 * @author huojinzhao
 */

export default {
  name: 'AppRankItem',

  props: {
    avatar: {
      type: String,
      default: '',
    },

    data: {
      type: Object,
      required: true,
    },

    groove: {
      type: String,
      default: '',
    },

    mode: {
      type: Number,
      required: true,
    },
  },

  computed: {
    theme() {
      return this.$store.theme;
    },

    style() {
      return {
        'background-image': `url(${this.groove})`,
      };
    },

    avatarDisplay() {
      return this.data.student_head_url || this.theme.student.avatar;
    },
  },
};
</script>

<template>
  <div
    :style="style"
    class="app-rank-item"
  >
    <img
      :src="avatarDisplay"
      class="app-rank-item__avatar"
    >
    <div
      class="app-rank-item__info"
    >
      <span class="app-rank-item__name">
        {{ data.student_name }}
      </span>
      <span class="app-rank-item__score">
        {{ data.score }}分
      </span>
    </div>
  </div>
</template>

<style lang="postcss">
.app-rank-item {
  background-size: contain;
  background-repeat: no-repeat;
}

.app-rank--mode1 {
  .app-rank-item {
    --height: 70px;
  }

  .app-rank-item {
    display: flex;
    align-items: center;
    margin: 0 68px 28px 0;
    padding-right: 25px;
    width: 354px;
    height: var(--height);
    font-size: 24px;
    color: white;
  }

  .app-rank-item__avatar {
    margin-right: 10px;
    height: var(--height);
    width: var(--height);
    border: 3px solid transparent;
    border-radius: 50%;
  }

  .app-rank-item__info {
    flex: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--height);
  }

  .app-rank-item__name {
    width: 8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.app-rank--mode2 {
  .app-rank-item {
    --height: 100px;
  }

  .app-rank-item {
    display: flex;
    align-items: center;
    height: var(--height);
    font-size: 30px;
    margin: 0 100px 10px 0;
    /*
    padding-right: 25px;
    width: 354px;
    font-size: 24px;
    color: white;
    */
  }

  .app-rank-item__avatar {
    margin: 0 32px 0 10px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  .app-rank-item__info {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .app-rank-item__name {
    width: 5em;
    color: #8B5320;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .app-rank-item__score {
    color: #FEE181;
  }
}
</style>
