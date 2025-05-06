import { requireNativeView } from 'expo'
import * as React from 'react'

import { TestExpoModuleViewProps } from './TestExpoModule.types'

const NativeView: React.ComponentType<TestExpoModuleViewProps> =
  requireNativeView('TestExpoModule')

export default function TestExpoModuleView(props: TestExpoModuleViewProps) {
  return <NativeView {...props} />
}
