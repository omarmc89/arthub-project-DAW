export default defineAppConfig({
    ui: {
        colors : ['shark'],
        container: {
            base: 'flex flex-col items-center justify-stretch w-full h-full'
          },
        formGroup: {
            label: {
              wrapper: 'flex content-center items-center justify-between',
              base: 'block font-medium text-shark-900 dark:text-shark-900',
              required: "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400",
            },
        },
        skeleton: {
          base: 'animate-pulse flex-grow',
          background: 'bg-gray-400',
          rounded: 'rounded-xl',
        },
        button: {
          size: {
            xxl: 'h-12 w-12',
          }
        }
    }
})