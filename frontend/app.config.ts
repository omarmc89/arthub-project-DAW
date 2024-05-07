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
        },
        card: {
          base: '',
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow',
          body: {
            base: 'flex flex-col gap-4 w-full',
            background: '',
            padding: 'px-4 py-5 sm:p-6',
          },
          header: {
            base: 'w-full text-center',
            background: '',
            padding: 'px-4 py-5 sm:px-6',
          },
          footer: {
            base: 'flex-row w-full text-center',
            background: '',
            padding: 'px-4 py-4 sm:px-6',
          },
        }
        
    }
})