import React from 'react'
import { reduxForm } from 'redux-form'
import { Schema, Autoform, addTranslations, translatable } from 'redux-form-auto-bootstrap4'

addTranslations({
  models: {
    owner: {
      name: 'Owner\'s name',
      height: {
        _field: 'Height',
        tall: 'Tall',
        short: 'Short',
      },
      usesHat: 'Wears hat',
      pets: 'Owned pets',
      
    },
    pet: {
      name: 'Pet\'s name',
      heads: 'Number of heads',
      type: {
        _field: 'Kind',
        dog: 'Dog',
        cat: 'Cat'
      }
    }
  },
  add: 'Add',
  warning: {
    max: 'Should be shorter than __max__ characters or it will not understand its name'
  },
  nohat: 'Only short people are allowed to have pets'
})

export const DemoForm = ({ code, config }) => {
  let gibberish,
    schema

  try {
    gibberish = new Function('Schema', 'translatable', code)
    schema = gibberish(Schema, translatable)

    return (
      <Autoform
        schema={schema}
        form="demo"
        destroyOnUnmount={false}
        config={config}
      />
    )
  } catch (err) {
    return <pre>{err.toString()}</pre>
  }
}
