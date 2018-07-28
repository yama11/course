/**
 * @overview  websocket事务
 *
 * @author  huojinzhao
 */

export default {

  computed: {
    selfSymbol() {
      const { role, id } = this.appInfo;

      const label = `${role}_H5_${id}`;

      return this.appInfo.scene === 'bacground'
        ? `background-${label}`
        : label;
    },

    curriculumGroupSymbol() {
      return `curriculum_${this.appInfo.curriculum_detail_id}`;
    },

    teachGroupSymbol() {
      return `teach_${this.appInfo.curriculum_detail_id}`;
    },
  },

  created() {
    // 重新配置ws
    this.$ws.boot({ success: this.wsRegister });
  },

  methods: {
    /**
     * @overview ws心跳
     */
    wsPulse() {
      this.$ws.emit('pulse', {
        sender: this.selfSymbol,
        receiver: 'server',
        data: 'ping',
      });

      setTimeout(this.wsPulse, 10 ** 4);
    },

    /**
     * @overview  标识自身
     *
     * @param   {Array|String}  tags    -   标签
     *
     * @return  void
     */
    wsLabelUnit(tags = this.selfSymbol) {
      const data = Array.isArray(tags)
        ? tags.join(',')
        : tags;

      this.$ws.emit('symbol', {
        sender: this.selfSymbol,
        receiver: 'server.symbol',
        data,
      });
    },

    /**
     * @overview  加入分组
     *
     * @param   {string}    groupName     -   想要键入分组的标识
     *
     * @return  void
     */
    wsLabelGroup(groupName) {
      this.$ws.emit('join_group', {
        sender: this.selfSymbol,
        receiver: 'server.group',
        data: groupName,
      });
    },

    /**
     * @overview  一对一通信
     *
     * @param   {String}  eventType   -   事件名称
     * @param   {String}  receiver    -   接收者
     * @param   {Any}     data        -   发送数据
     *
     * @return  void
     */
    wsCall(eventType, receiver, data) {
      this.$ws.emit(eventType, {
        sender: this.selfSymbol,
        receiver: `symbol.${receiver}`,
        data,
      });
    },

    /**
     * @overview  一对多通信
     *
     * @param   {String}  eventType   -   事件名称
     * @param   {String}  groupName   -   接收组
     * @param   {Any}     data        -   发送数据
     *
     * @return  void
     */
    wsBroadcast(
      data,
      groupName = this.curriculumGroupSymbol,
      eventType = 'syncState',
    ) {
      this.$ws.emit(eventType, {
        sender: this.selfSymbol,
        receiver: `group.${groupName}`,
        data,
      });
    },

    wsRegister() {
      // 标识自身
      this.wsLabelUnit();
      // 加入课程分组
      this.wsLabelGroup(this.curriculumGroupSymbol);
      // 加入教学分组
      this.wsLabelGroup(this.teachGroupSymbol);
      // 排名分数按相同ID分组取得
      this.wsLabelGroup(`${this.appInfo.role}_group_${this.appInfo.id}`);
      // 启动心跳
      this.wsPulse();
    },
  },
};
