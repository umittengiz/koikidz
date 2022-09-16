<template>

    <div class="LoginBlaBla flex justify-center">

        
<!--
  This component uses @tailwindcss/line-clamp

  yarn add@tailwindcss/line-clamp
  npm install@tailwindcss/line-clamp

  plugins: [require('@tailwindcss/line-clamp')]
-->

<article class="bg-white border-2 md:w-3/5 w-full flex flex-col border-gray-200 rounded-xl">
  <div class="flex flex-col lg:flex-row items-center p-1">
    <div class="w-full lg:w-1/4 h-full">
    <a href="" class="block h-full shrink-0">
      <img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="User Avatar"
        class="object-cover rounded-lg h-full w-full"
      />
    </a>
  </div>
<div class="md:w-3/4 w-full">
      <div class="ml-4">
      <strong class="font-medium sm:text-lg">
        <a href="" class="hover:underline">
          Yesim Okan</a
        >
      </strong>

      <p class="text-sm text-gray-700 line-clamp-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        accusantium temporibus iure delectus ut totam natus nesciunt ex?
        Ducimus, enim.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        accusantium temporibus iure delectus ut totam natus nesciunt ex?
        Ducimus, enim.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        accusantium temporibus iure delectus ut totam natus nesciunt ex?
        Ducimus, enim.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        accusantium temporibus iure delectus ut totam natus nesciunt ex?
        Ducimus, enim.

        
        
      </p>
<div class="grid grid-cols-2 gap-5 xl:flex w-full justify-evenly mt-5 border-t">
    <!-- bu satirin altina devam ediceksin mobil gorunumde yazilar kayip -->
      <div class="mt-2 flex-col items-center justify-center sm:gap-2">
        <div class="flex w-full justify-center text-gray-500">
            <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
          <p class="ml-1 font-semibold text-xs">Rank</p>
          
        </div>

        

        <p class=" text-center block text-xs sm:text-gray-500">
          78.9
          <!-- <a href="" class="font-medium underline hover:text-gray-700"
            >August</a
          > -->
        </p>
      </div>
      <div class="mt-2 flex-col items-center justify-center sm:gap-2">
        <div class="flex w-full justify-center items-center text-gray-500">
            <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
          <p class="ml-1 text-xs font-semibold">City</p>
          
        </div>

        

        <p class="text-center block text-xs sm:text-gray-500">
          Yalova
          <!-- <a href="" class="font-medium underline hover:text-gray-700"
            >August</a
          > -->
        </p>
      </div>
      <div class="mt-2 flex-col items-center justify-center sm:gap-2">
        <div class="flex w-full justify-center items-center text-gray-500">
            <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
          <p class="ml-1 text-xs font-semibold">Age</p>
          
        </div>

        

        <p class=" text-center block text-xs sm:text-gray-500">
          27
          <!-- <a href="" class="font-medium underline hover:text-gray-700"
            >August</a
          > -->
        </p>
      </div>
      <div class="mt-2 flex-col items-center justify-center sm:gap-2">
        <div class="flex w-full justify-center items-center text-gray-500">
            <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
          <p class="ml-1 text-xs font-semibold">Work</p>
          
        </div>

        

        <p class=" text-center block text-xs sm:text-gray-500">
          17
          <!-- <a href="" class="font-medium underline hover:text-gray-700"
            >August</a
          > -->
        </p>
      </div>
      <div class="mt-2 flex-col items-center justify-center sm:gap-2">
        <div class="flex w-full justify-center items-center text-gray-500">
            <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
          <p class="ml-1 text-xs font-semibold">Email</p>
          
        </div>

        

        <p class=" text-center block text-xs sm:text-gray-500">
          falanfilan@gmail.com
          <!-- <a href="" class="font-medium underline hover:text-gray-700"
            >August</a
          > -->
        </p>
      </div>
      <div class="mt-2 sm:flex-col sm:items-center sm:justify-center sm:gap-2">
        <div class="flex w-full justify-center items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <p class="ml-1 text-xs font-semibold">Phone</p>
          
        </div>

        

        <p class=" text-center block text-xs sm:text-gray-500">
          0(552) 480 21 45
          <!-- <a href="" class="font-medium underline hover:text-gray-700"
            >August</a
          > -->
        </p>
      </div>
    </div>
    </div>
  </div>
</div>

  <div class="flex justify-end">
    <strong
      class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>

      <span class="text-[10px] font-medium sm:text-xs">Primary</span>
    </strong>
  </div>
</article>

    </div>

</template>