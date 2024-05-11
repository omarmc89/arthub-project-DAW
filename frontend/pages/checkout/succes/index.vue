<template>
    <div class="min-h-screen flex justify-center items-center">
      <div class="w-full md:w-10/12">
        <div class="border rounded-lg p-6">
          <h1 class="text-center text-3xl font-bold mb-4">Success Page</h1>
          <div class="flex justify-end">
            <button @click="$router.push('/')" class="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  