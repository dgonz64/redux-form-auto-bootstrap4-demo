export const CHANGE = 'CHANGE'
export const CHANGE_CONFIG = 'CHANGE_CONFIG'

export const change = (code) => ({
  type: CHANGE,
  code
})

export const changeConfig = (config) => ({
  type: CHANGE_CONFIG,
  config
})

export const NAME = 'editing'

const initialCode =
`const pet = new Schema('pet', {
  name: {
    type: String,
    error: {
      max: 8
    },
    warning: {
      max: 4
    }
  },
  heads: {
    type: Number
  },
  type: {
    type: 'select',
    options: ['dog', 'cat']
  }
});

return new Schema('owner', {
  name: {
    type: 'string',
    required: true,
  },
  height: {
    type: 'radios',
    options: ['tall', 'short'],
    error: {
      // Retrurn translatable
      validation: value => value == 'tall' ?
        translatable('notall') : false
    }
  },
  usesHat: {
    type: 'boolean',
    error: {
      // Return direct string
      validation: value => value ? 'No hats, sorry.' : false
    }
  },
  pets: {
    type: [pet],
    minChildren: 1,
    maxChildren: 4
  }
});`

const initial = {
  code: initialCode,
  config: {
    arrayMode: 'panel'
  }
}

export const reducer = (state = initial, action) => {
  switch (action.type) {
  case CHANGE:
    return Object.assign(
      {},
      state,
      { code: action.code }
    )
  case CHANGE_CONFIG:
    return Object.assign(
      {},
      state,
      { config: action.config }
    )
  default:
    return state
  }
}

export const mapState = state => state[NAME]

export const mapActions = dispatch => {
  return {
    changeCode: code => {
      dispatch(change(code))
    },
    changeConfig: config => {
      dispatch(changeConfig(config))
    }
  }
}
