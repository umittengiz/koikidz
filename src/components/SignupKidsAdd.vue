<template>

    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto bg-white rounded-lg">
    <h1 class="text-2xl font-bold text-center text-blue-400 sm:text-3xl">Add Child</h1>

    <!-- <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
      mollitia?
    </p> -->

    <form action="" class="p-8 mb-0 rounded-lg shadow-2xl space-y-4">
      

      <div>
        <label for="text" class="text-sm text-blue-600 font-medium">Name</label>

        <div class="relative mt-1">
          <input
            type="text"
            id="text"
            class="w-full p-4 pr-12 text-sm border border-gray-400 rounded-lg shadow-sm"
            placeholder="Enter Name"
          />

          
        </div>
      </div>

      <div>
        <label for="age" class="text-sm text-blue-600 font-medium">Age</label>

        <div class="relative mt-1">
          <input
            type="number"
            id="age"
            class="w-full  p-4 pr-12 text-sm border border-gray-400 rounded-lg shadow-sm"
            placeholder="Enter Age"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            
          </span>
        </div>
        <div class="flex w-full mt-5  text-blue-600 mb-5 justify-evenly">
          <div class="flex w-full justify-between ">
              <div class="relative w-5/12">
                <input class="hidden group peer" type="radio" name="shippingOption" value="standard_alt"
                  id="standard_alt" />

                <label
                  class="block p-4 text-sm xl:text-xs font-medium transition-colors border-gray-400 border rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-blue-500"
                  for="standard_alt">
                  <span>Boy</span>

                  <span class="hidden mt-1 text-xs text-gray-500">
                    Free
                  </span>
                </label>

                <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
              </div>

              <div class="relative w-5/12">
                <input class="hidden group peer" type="radio" name="shippingOption" value="next_day_alt"
                  id="next_day_alt" />

                <label
                  class="block p-4 text-sm xl:text-xs font-medium transition-colors border border-gray-400  rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50  peer-checked:ring-blue-500"
                  for="next_day_alt">
                  <span class="">Girl</span>

                  <span class="hidden mt-1 text-xs text-gray-500">
                    $ 5.99
                  </span>
                </label>

                <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
</div>
      </div>

      <button type="submit" class="block w-full  px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 bg-blue-400 rounded-lg">
        Add
      </button>

      
    </form>
  </div>
</div>


</template>