<template>
    <div class="w-full h-full flex justify-center">
        <a href="#"
            class="flex flex-col w-1/4 items-center justify-center p-2 rounded-lg border-2 border-blue-400 shadow-md shadow-indigo-100">
            <img alt="123 Wallaby Avenue, Park Road" src="https://www.bakiciburada.com/bakici/foto/197254-1.jpg"
                class="object-cover h-2/4 w-3/6 rounded-full shadow-lg border-blue-500 border" />

            <!-- src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" -->

            <div class="flex flex-col items-center  justify-center mt-3 ">
                <dl>
                    <!-- <div>
                        <dt class="sr-only">
                            Price
                        </dt>

                        <dd class="text-sm text-gray-500">
                            $240,000
                        </dd>
                    </div> -->

                    <div>
                        <!-- <dt class="sr-only">
                            Address
                        </dt> -->

                        <dd class="font-medium text-blue-400">
                            Yeşim Okyay
                        </dd>
                    </div>
                </dl>

                <dl class="flex items-start w-full mt-6 border-t  border-blue-200 p-5 space-x-8 text-xs">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Total Work
                            </dt>

                            <dd class="font-medium text-blue-500">
                                17
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Rank
                            </dt>

                            <dd class="font-medium text-blue-500">
                                8.4 / 10
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>

                        <div class="sm:ml-3  mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Text
                            </dt>

                            <dd class="font-medium text-blue-500">
                                4
                            </dd>
                        </div>

                    </div>
                </dl>
                <dl class="flex items-center justify-center w-full border-b p-5 space-x-8 text-xs">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Age
                            </dt>

                            <dd class="font-medium text-blue-500">
                                32
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                City
                            </dt>

                            <dd class="font-medium text-blue-500">
                                Yalova
                            </dd>
                        </div>
                    </div>


                </dl>
            </div>
        </a>

    </div>
</template>

<script>
export default {
    name: "BabySitterCard",
    components: {},
};
</script>
