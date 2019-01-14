import { Component } from 'can'
import view from '~/app.stache'

import 'styles.less'

Component.extend({
  tag: 'bitovian-feedback',
  view,
  ViewModel: {
    message: {
      default: "Work in progress. Come back later."
    }
  }
})

