import { NativeModule, requireNativeModule } from 'expo';

import { TestExpoModuleEvents } from './TestExpoModule.types';

declare class TestExpoModule extends NativeModule<TestExpoModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<TestExpoModule>('TestExpoModule');
