<script>
/**
 * @overview 游戏 -- 前景
 *
 * @author suyanping
 */
import { equipmentInform } from '@/utils';

export default {
  name: 'GameForeground',

  components: {
    equipmentInform,
  },

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    select: ['A', 'B', 'C', 'D'],

    iframeTag: '',
  }),

  computed: {
    moduleName() {
      const { step, section } = this.$store.state;

      return `game-${section}-${step}`;
    },
  },

  mounted() {
    window.addEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );

    window.addEventListener('message', ({ data }) => {
      this.iframeTag = document.getElementById('iframe');

      const { type, playload } = data;

      if (type === 'guestAction') {
        const { gameType: { tag } } = playload;

        this.sendStart(tag);
      }

      if (type === 'gameAction') {
        const { gameStep: { index, name, tag } } = playload;

        this.player(name, index, tag);
      }
    });
  },

  beforeDestroy() {
    window.removeEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );
  },

  methods: {
    sendStart(tag) {
      if (tag === 'start') {
        this.palyerList();

        this.gameList();

        return;
      }

      setTimeout(this.forward, 6000);
    },

    forward() {
      const forwardState = this.$store.forwardState;

      this.$store.syncCurriculumState({ ...forwardState });
    },

    palyerList() {
      this.iframeTag.contentWindow.postMessage({
        type: 'getPlayers',
        playload: {
          players: this.$store.students,
        },
      }, '*');
    },

    gameList() {
      this.iframeTag.contentWindow.postMessage({
        type: 'getGame',
        playload: {
          game: {
            name: this.moduleName,
            list: this.src.list,
          },
        },
      }, '*');
    },

    player(name, index, tag) {
      const type = 'game';

      const isStart = tag === 'start' ? 1 : 0;

      const gameName = `${this.moduleName}-${index}`;

      const selectList = this.src.list[index - 1].options;

      const answerIndex = selectList.findIndex(item => item.isRightOption);

      const data = { answer: this.select[answerIndex] };

      const payload = { tag: isStart, type, name: gameName, data };

      equipmentInform(payload);
    },

    equipmentCallback({ detail: { name, student } }) {
      const nameList = name.split('-');

      const gameName = nameList.reduce((acc, item, index) => {
        if (index > 0 && index < 3) {
          acc = `${acc}-${item}`;
        }

        return acc;
      }, nameList[0]);

      if (gameName === this.moduleName) {
        const gameIndex = Number(nameList[3]);

        this.sendPlayer(gameName, gameIndex, student);
      }
    },

    sendPlayer(gameName, gameIndex, student) {
      this.iframeTag.contentWindow.postMessage({
        type: 'playerAction',
        playload: {
          player: {
            id: Number(student.id),
            answer: student.answer,
            gameName,
            gameIndex,
          },
        },
      }, '*');
    },
  },
};
</script>

<template>
  <div class="game-foreground">
    <iframe
      id="iframe"
      ref="iframe"
      :src="src.gameUrl"
      frameborder="0"
      class="game-foreground__animation"
    />
  </div>

</template>

<style lang="postcss">
.game-foreground,
.game-foreground__animation{
  width: 100%;
  height: 100%;
}
</style>
