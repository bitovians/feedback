import { Component } from 'can'
import view from '~/app.stache'

import 'styles.less'

Component.extend({
  tag: 'bitovian-reviews',
  view,
  ViewModel: {
    message: {
      default: "Still a work in progress. Come back later."
    }
  }
})

