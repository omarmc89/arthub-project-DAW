// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}