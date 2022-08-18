interface VideoPlayerData extends WechatMiniprogram.Component.DataOption {
  video: WechatMiniprogram.VideoContext | null
}
interface VideoPlayerProperty extends WechatMiniprogram.Component.PropertyOption {
  src: WechatMiniprogram.Component.FullProperty<StringConstructor>,
  title: WechatMiniprogram.Component.FullProperty<StringConstructor>,
}
interface VideoPlayerMethod extends WechatMiniprogram.Component.MethodOption {}

Component<VideoPlayerData, VideoPlayerProperty, VideoPlayerMethod>({

  properties: {
    src: {
      type: String,
      value: 'https://v.jiemian.com/d4/95/d4952f9be1b4731488339b7efb524010_3072.mp4',
    },
    title: {
      type: String,
      value: ''
    }
  },

  data: {
    video: null,
  },

  methods: {},

  lifetimes: {
    created: function () {},
    attached: function () {
      this.createSelectorQuery().select('.video-player-context').context(node => this.setData({
        video: node as unknown as WechatMiniprogram.VideoContext,
      })).exec();
    },
  },

});
