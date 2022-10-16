<template>

    <body class="overflow-auto ">
        <div class="flex justify-center items-center">
            <div class="py-16 w-full px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div class="flex flex-col justify-start items-start w-full space-y-9">


                    <div class="flex flex-col xl:flex-row justify-center space-y-6 xl:space-y-0 xl:space-x-6 w-full">


                        <div class="p-8 bg-blue-300 flex flex-col rounded-xl w-full lg:w-3/5 ">
                            <div class="flex">
                                <h1 class="text-white">Payment</h1>
                            </div>
                            <div class="mt-8">
                                <input
                                    class="border border-gray-300 outline-none p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                    type="email" name="" placeholder="Email" />
                            </div>

                            <label class="mt-8 text-base leading-4 text-white">Card details</label>
                            <div class="mt-2 flex-col">
                                <div>
                                    <input
                                        class="border rounded-tl outline-none
                                     rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="email" name="" placeholder="0000 1234 6549 15151" />
                                </div>
                                <div class="flex-row flex">
                                    <input
                                        class="border rounded-bl outline-none border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="email" name="" placeholder="MM/YY" />
                                    <input
                                        class="border rounded-br outline-none border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="email" name="" placeholder="CVC" />
                                </div>
                            </div>

                            <label class="mt-8 text-base leading-4 text-white">Name on card</label>
                            <div class="mt-2 flex-col">
                                <div>
                                    <input
                                        class="border rounded outline-none border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="email" name="" placeholder="Name on card" />
                                </div>
                            </div>

                            <label class="mt-8 text-base leading-4 text-white">Country or region</label>
                            <div class="mt-2 flex-col">

                                <input
                                    class="border rounded-bl outline-none rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                    type="text" name="" placeholder="ZIP" />
                            </div>

                            <router-link to="/checkout/success">
                                <button
                                    class="mt-8 border border-transparent hover:border-gray-300 bg-blue-400 hover:bg-blue-500 text-white  flex justify-center items-center py-4 rounded w-full">
                                    <div>
                                        <p class="text-base leading-4">Pay $54652</p>
                                    </div>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>


</template>



