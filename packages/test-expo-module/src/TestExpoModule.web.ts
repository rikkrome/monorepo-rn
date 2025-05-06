import { NativeModule, registerWebModule } from 'expo'

import { TestExpoModuleEvents } from './TestExpoModule.types'

class TestExpoModule extends NativeModule<TestExpoModuleEvents> {
  PI = Math.PI
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value })
  }
  hello() {
    return 'Hello world! 👋'
  }
}

export default registerWebModule(TestExpoModule, 'TestExpoModule')
