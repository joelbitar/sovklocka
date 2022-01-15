function main() {
  applyConfig(
    getCurrentConfig()
  )

  setTimeout(
    main,
    1000
  )
}

function getCurrentConfig() {
  let currentTime = new Date(0)
  currentTime.setHours((new Date()).getHours())
  currentTime.setMinutes((new Date()).getMinutes())

  let latestConf = config[0]
  let currentConf = undefined;

  for (let i = 0; i < config.length; i += 1) {
    const conf = config[i]
    if (
      (
        conf['start']['hour'] > latestConf['start']['hour']
      )
      ||
      (
        conf['start']['hour'] >= latestConf['start']['hour'] && conf['start']['minute'] >= latestConf['start']['minute']
      )
    ) {
      latestConf = conf
    }

    if (
        conf['start']['hour'] <= currentTime.getHours() && conf['start']['minute'] <= currentTime.getMinutes()
    ) {
      currentConf = conf
    }
  }

  if(currentConf === undefined){
    return latestConf
  }

  return currentConf
}

function applyConfig(conf) {
  document.body.style.backgroundColor = conf['background']
}

let config = [
  {
    'start': {
      'hour': 6,
      'minute': 0
    },
    'background': '#6b5400'
  },
  {
    'start': {
      'hour': 6,
      'minute': 45
    },
    'background': '#133b00'
  },
  {
    'start': {
      'hour': 20,
      'minute': 0
    },
    'background': '#520000'
  },
]

main()