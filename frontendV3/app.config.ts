export default defineAppConfig({
    ui: {
        colors : ['shark'],
        formGroup: {
            label: {
              wrapper: 'flex content-center items-center justify-between',
              base: 'block font-medium text-shark-900 dark:text-shark-900',
              required: "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400",
            },
        }
    }
})