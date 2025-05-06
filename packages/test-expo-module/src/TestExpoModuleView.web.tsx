import * as React from 'react'

import { TestExpoModuleViewProps } from './TestExpoModule.types'

export default function TestExpoModuleView(props: TestExpoModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  )
}
