Page({
  onLoad(args) {
    const exitState = this.exitState

    this.loadTime = exitState ? exitState.loadTime : new Date().toLocaleString()
    this.setData({
      rand: args.rand,
      timeStr: this.loadTime,
      exitStateLoaded: !!exitState,
    })
  },
	onSaveExitState() {

    return {
      data: {
        loadTime: this.loadTime
      }
    }
  }
})
