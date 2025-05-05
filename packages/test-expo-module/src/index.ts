// Reexport the native module. On web, it will be resolved to TestExpoModule.web.ts
// and on native platforms to TestExpoModule.ts
export { default } from './TestExpoModule';
export { default as TestExpoModuleView } from './TestExpoModuleView';
export * from  './TestExpoModule.types';
