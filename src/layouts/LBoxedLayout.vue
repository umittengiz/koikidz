<template>
    <div class="bg-white pb-10">
        <!-- Navigation starts -->
        <nav class="hidden w-full mx-auto bg-white shadow relative z-20">
            <div class="
          justify-between
          container
          px-6
          h-16
          flex
          items-center
          lg:items-stretch
          mx-auto
        ">
                <div class="flex items-center">
                    <div class="mr-10 flex items-center">
                        <svg aria-label="Home" id="logo" enable-background="new 0 0 300 300" height="44"
                            viewBox="0 0 300 300" width="43" :xmlns="xmlns" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path fill="#4c51bf"
                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" />
                            </g>
                        </svg>
                        <h3 class="
                text-base text-gray-800
                font-bold
                tracking-normal
                leading-tight
                ml-3
                hidden
                lg:block
              ">
                            KiddyFam
                        </h3>
                    </div>
                    <ul class="pr-32 xl:flex hidden items-center h-full">
                        <li class="
                hover:text-indigo-700
                cursor-pointer
                h-full
                flex
                items-center
                text-sm text-indigo-700
                tracking-normal
              ">
                            Ana Ekran
                        </li>
                        <li class="
                hover:text-indigo-700
                cursor-pointer
                h-full
                flex
                items-center
                text-sm text-gry-800
                mx-10
                tracking-normal
                relative
              " @click="dropdownHandler($event)">
                            <ul class="
                  bg-white
                  shadow
                  rounded
                  py-1
                  w-32
                  left-0
                  mt-16
                  -ml-4
                  absolute
                  hidden
                  top-0
                ">
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Landing Pages
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Templates
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Components
                                </li>
                            </ul>
                            Çocuklarım
                            <span class="ml-2">
                                <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-chevron-down" width="16"
                                    height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </span>
                        </li>
                        <li class="
                hover:text-indigo-700
                cursor-pointer
                h-full
                flex
                items-center
                text-sm text-gry-800
                mr-10
                tracking-normal
              ">
                            Adreslerim
                        </li>
                        <li class="
                hover:text-indigo-700
                cursor-pointer
                h-full
                flex
                items-center
                text-sm text-gray-800
                tracking-normal
                relative
              " @click="dropdownHandler($event)">
                            <ul class="
                  bg-white
                  shadow
                  rounded
                  py-1
                  w-32
                  left-0
                  mt-16
                  -ml-4
                  absolute
                  hidden
                  top-0
                ">
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Landing Pages
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Templates
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Components
                                </li>
                            </ul>
                            Oyun Ablaları
                            <span class="ml-2">
                                <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-chevron-down" width="16"
                                    height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="h-full xl:flex hidden items-center justify-end">
                    <div class="h-full flex items-center">
                        <div class="w-32 pr-16 h-full flex items-center justify-end border-r"></div>
                        <div class="w-full h-full flex">
                            <div class="
                  w-16
                  xl:w-32
                  h-full
                  flex
                  items-center
                  justify-center
                  xl:border-r
                ">
                                <div class="relative">
                                    <div class="
                      cursor-pointer
                      w-6
                      h-6
                      xl:w-auto xl:h-auto
                      text-gray-600
                    ">
                                        <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-bell" width="28"
                                            height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6">
                                            </path>
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                                        </svg>
                                    </div>
                                    <div class="
                      animate-ping
                      w-2
                      h-2
                      rounded-full
                      bg-red-400
                      border border-white
                      absolute
                      inset-0
                      mt-1
                      mr-1
                      m-auto
                    "></div>
                                </div>
                            </div>
                            <div aria-haspopup="true" class="
                  cursor-pointer
                  w-full
                  flex
                  items-center
                  justify-end
                  relative
                " @click="dropdownHandler($event)">
                                <ul class="
                    p-2
                    w-40
                    border-r
                    bg-white
                    absolute
                    rounded
                    z-40
                    left-0
                    shadow
                    mt-64
                    hidden
                  ">
                                    <li class="
                      cursor-pointer
                      text-gray-600 text-sm
                      leading-3
                      tracking-normal
                      py-2
                      hover:text-indigo-700
                      focus:text-indigo-700 focus:outline-none
                    ">
                                        <div class="flex items-center">
                                            <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-user" width="20"
                                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="7" r="4" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            </svg>
                                            <span class="ml-2"> My Profile </span>
                                        </div>
                                    </li>
                                    <li class="
                      cursor-pointer
                      text-gray-600 text-sm
                      leading-3
                      tracking-normal
                      mt-2
                      py-2
                      hover:text-indigo-700
                      focus:text-indigo-700 focus:outline-none
                      flex
                      items-center
                    ">
                                        <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-help" width="20"
                                            height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="12" y1="17" x2="12" y2="17.01" />
                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                        </svg>
                                        <span class="ml-2"> Help Center </span>
                                    </li>
                                    <li class="
                      cursor-pointer
                      text-gray-600 text-sm
                      leading-3
                      tracking-normal
                      mt-2
                      py-2
                      hover:text-indigo-700
                      flex
                      items-center
                      focus:text-indigo-700 focus:outline-none
                    ">
                                        <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-settings" width="20"
                                            height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span class="ml-2"> Account Settings </span>
                                    </li>
                                </ul>
                                <img class="rounded-full h-10 w-10 object-cover" :src="profilePhoto" alt="avatar" />
                                <p class="text-gray-800 text-sm ml-2">Ufuk Aygün</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="visible xl:hidden flex items-center">
                    <ul class="
              z-40
              p-2
              border-r
              bg-white
              absolute
              rounded
              top-0
              left-0
              right-0
              shadow
              mt-16
              md:mt-16
              hidden
            ">
                        <li class="
                flex
                xl:hidden
                cursor-pointer
                text-gray-600 text-base
                leading-3
                tracking-normal
                mt-2
                py-3
                hover:text-indigo-700
                focus:text-indigo-700 focus:outline-none
              ">
                            <div class="flex items-center">
                                <span class="leading-6 ml-2 font-bold"> Ana Ekran </span>
                            </div>
                        </li>
                        <li class="
                xl:hidden
                flex-col
                cursor-pointer
                text-gray-600 text-base
                leading-3
                tracking-normal
                py-3
                hover:text-indigo-700
                focus:text-indigo-700 focus:outline-none
                flex
                justify-center
              " @click="dropdownHandler($event)">
                            <div class="flex items-center">
                                <span class="leading-6 ml-2 font-bold"> Çocuklarım </span>
                            </div>
                            <ul class="ml-2 mt-3 hidden">
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Landing Pages
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Templates
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Components
                                </li>
                            </ul>
                        </li>
                        <li class="
                xl:hidden
                cursor-pointer
                text-gray-600 text-base
                leading-3
                tracking-normal
                py-3
                hover:text-indigo-700
                flex
                items-center
                focus:text-indigo-700 focus:outline-none
              ">
                            <span class="leading-6 ml-2 font-bold"> Adreslerim </span>
                        </li>
                        <li class="
                xl:hidden
                flex-col
                cursor-pointer
                text-gray-600 text-base
                leading-3
                tracking-normal
                mb-2
                py-3
                hover:text-indigo-700
                focus:text-indigo-700 focus:outline-none
                flex
                justify-center
              " @click="dropdownHandler($event)">
                            <div class="flex items-center">
                                <span class="leading-6 ml-2 font-bold"> Oyun Ablaları </span>
                            </div>
                            <ul class="ml-2 mt-3 hidden">
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Landing Pages
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Templates
                                </li>
                                <li class="
                    cursor-pointer
                    text-gray-600 text-sm
                    leading-3
                    tracking-normal
                    py-3
                    hover:bg-indigo-700 hover:text-white
                    px-3
                    font-normal
                  ">
                                    Components
                                </li>
                            </ul>
                        </li>
                        <li>
                            <hr class="border-b border-gray-300 w-full" />
                        </li>
                        <li class="
                ml-2
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                mt-2
                py-2
                hover:text-indigo-700
                flex
                items-center
                focus:text-indigo-700 focus:outline-none
              ">
                            <div class="flex items-center">
                                <div class="
                    w-12
                    cursor-pointer
                    flex
                    text-sm
                    border-2 border-transparent
                    rounded
                    focus:outline-none focus:border-white
                    transition
                    duration-150
                    ease-in-out
                  ">
                                    <img class="rounded h-10 w-10 object-cover" :src="profilePhoto" alt="logo" />
                                </div>
                                <p class="leading-6 text-base ml-1 cursor-pointer">Ufuk Aygün</p>
                                <div class="sm:ml-2 text-white relative">
                                    <svg :xmlns="xmlns" class="
                      icon icon-tabler icon-tabler-chevron-down
                      cursor-pointer
                    " width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </li>
                        <li class="
                ml-2
                cursor-pointer
                text-gray-600 text-base
                leading-3
                tracking-normal
                py-2
                hover:text-indigo-700
                focus:text-indigo-700 focus:outline-none
              ">
                            <div class="flex items-center">
                                <svg :xmlns="xmlns" class="icon icon-tabler icon-tabler-user" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span class="leading-6 ml-2"> Profile </span>
                            </div>
                        </li>
                    </ul>
                    <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu" :xmlns="xmlns"
                        class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="4" y1="8" x2="20" y2="8"></line>
                        <line x1="4" y1="16" x2="20" y2="16"></line>
                    </svg>
                    <div class="hidden close-m-menu" @click="MenuHandler($event, false)">
                        <svg aria-label="Close" :xmlns="xmlns" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Navigation ends -->
        <!-- Page title starts -->
        <div class="bg-gray-800 pt-8 pb-16 relative z-10">
            <div class="
          container
          px-6
          mx-auto
          flex flex-row
          lg:flex-row
          items-start
          lg:items-center
          justify-between
        ">
                <!-- <div class="flex-col flex lg:flex-row items-start lg:items-center"> -->
                <!-- <div class="flex flex-row items-center justify-between"> -->
                <h4 class="text-2xl font-bold leading-tight text-white mb-2">
                    Ana Ekran
                </h4>
                <div class="pl-5 block lg:hidden">
                    <router-link to="/login">
                        <button class="
                focus:outline-none
                mr-3
                bg-transparent
                transition
                duration-150
                ease-in-out
                rounded
                hover:bg-gray-700
                text-white
                px-5
                py-2
                text-sm
                border border-white
                ">
                            Geri
                        </button>
                    </router-link>
                    <button v-show="0" class="
              focus:outline-none
              transition
              duration-150
              ease-in-out
              hover:bg-gray-200
              border
              bg-white
              rounded
              text-indigo-700
              px-8
              py-2
              text-sm
            ">
                        Edit Profile
                    </button>
                </div>
                <p v-show="0" class="flex items-center text-gray-300 text-xs">
                    <span class="cursor-pointer"> Portal </span>
                    <span class="mx-2"> &gt; </span>
                    <span class="cursor-pointer"> Dashboard </span>
                    <span class="mx-2"> &gt; </span>
                    <span class="cursor-pointer"> KPIs </span>
                </p>
                <!-- </div> -->
                <!-- <div class="ml-0 lg:ml-20 my-6 lg:my-0">
                    <img class="border-2 shadow border-gray-600 rounded-full mr-3" :src="titlePhoto" alt="logo" />
                        <div>
                            <h5 class="text-sm text-white leading-4 mb-1">Andres Berlin</h5>
                            <p class="text-xs text-gray-400 leading-4">VP Operations</p>
                        </div>
                </div> -->
                <!-- </div> -->
                <div class="hidden lg:block">
                    <router-link to="/login">
                        <button class="
                focus:outline-none
                mr-3
                bg-transparent
                transition
                duration-150
                ease-in-out
                rounded
                hover:bg-gray-700
                text-white
                px-5
                py-2
                text-sm
                border border-white
                ">
                            Geri
                        </button>
                    </router-link>
                    <button v-show="0" class="
              focus:outline-none
              transition
              duration-150
              ease-in-out
              hover:bg-gray-200
              border
              bg-white
              rounded
              text-indigo-700
              px-8
              py-2
              text-sm
            ">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
        <!-- Page title ends -->
        <div class="container px-6 mx-auto">
            <!-- Remove class [ h-64 ] when adding a card block -->
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "LightWithDarkPageTitleAndWhiteBox",
    data() {
        return {
            xmlns: "http://www.w3.org/2000/svg",
            profilePhoto:
                "",
            titlePhoto:
                "",
        };
    },
    async created() {
        const res = await fetch("https://randomuser.me/api/?gender=male&inc=picture");
        const data = await res.json();
        this.profilePhoto = data.results[0].picture.medium;
        this.titlePhoto = this.profilePhoto;
    },
    methods: {
        dropdownHandler(/* event */) {
            // let single = event.currentTarget.getElementsByTagName("ul")[0];
            // single.classList.toggle("hidden");
        },
        MenuHandler(el, val) {
            let MainList =
                el.currentTarget.parentElement.getElementsByTagName("ul")[0];
            let closeIcon =
                el.currentTarget.parentElement.getElementsByClassName(
                    "close-m-menu"
                )[0];
            let showIcon =
                el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
            if (val) {
                MainList.classList.remove("hidden");
                el.currentTarget.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                showIcon.classList.remove("hidden");
                MainList.classList.add("hidden");
                el.currentTarget.classList.add("hidden");
            }
        },
    },
};
</script>
