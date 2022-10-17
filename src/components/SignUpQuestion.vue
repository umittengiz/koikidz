<template>
  
    <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-stone-100 max-w-sm">
    
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Soru 1</h5>
    <p class="text-gray-700 text-base mb-4 py-5">
    Çocuğunuzda herhangi bir yeti farklılığı var mı? (Birden fazla seçenek işaretleyebilirsiniz)
    </p>
    <div class="py-2">
      <input class=" h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      <label class="inline-block text-gray-800" for="flexCheckDefault">
        Falan filan ve falan filan
      </label>
    </div>
    <div class="py-2">
      <input class="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="inline-block text-gray-800" for="flexRadioDefault1">
        Falan filan veya falan filan
      </label>
    </div>
    <div class="flex justify-center">
  <div class="mb-3 py-5 xl:w-96">
    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
      >Cevabinizi Buraya Yazabilirsiniz...</label
    >
    <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Cevabiniz"
    ></textarea>
  </div>
  
</div>
<div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-10 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Devam Et</button>
</div>
  </div>
  
</div>


</template>