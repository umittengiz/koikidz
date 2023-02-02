<template>
  <div class="flex justify-center sticky flex-col top-0 self-start">

    <form class="overflow-auto mx-auto divide-y divide-gray-100  rounded-lg border border-gray-100 shadow-lg">
      <header class="px-6 py-4" aria-label="Filter University Courses">
        <strong class="text-lg font-medium text-gray-900">
          Sister Filters
        </strong>

        <p class="mt-1.5 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>

      <div class="flow-root h-96 overflow-y-auto px-6">
        <div class="divide-y divide-gray-100">
          <div class="py-8">
            <fieldset>
              <legend class="font-medium text-gray-900">Mezuniyet Durumu</legend>

              <ul class="mt-6 grid gap-4 grid-cols-1">
                <li>
                  <label class="flex items-center gap-3">
                    <input type="radio" name="study_type" class="h-6 w-6 border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Okumus
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="radio" name="study_type" class="h-6 w-6 border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Cahil :)
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-8">
            <fieldset>
              <legend class="font-medium text-gray-900">Konum</legend>

              <ul class="mt-6 grid grid-cols-1 gap-4">
                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="location" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Butun Ilceler
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="location" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Uskudar
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="location" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Umraniye
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="location" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">Fatih</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-8">
            <fieldset>
              <legend class="font-medium text-gray-900">Yetkinlikler</legend>

              <ul class="mt-6 grid grid-cols-1 gap-4">
                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="university" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Cocuk Gelisimi
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="university" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Psiko-Motor Beceri Egitimi
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="university" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Ingilizce Egitimi
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="university" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Keman Egitimi
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>


          </div>

          <div class="py-8">
            <fieldset>
              <legend class="font-medium">Mesai Saatleri</legend>

              <ul class="mt-6 grid grid-cols-1 gap-4">
                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="commitment" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Tam Zamanli
                    </span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="commitment" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">
                      Yari Zamanli
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-8">
            <fieldset>
              <legend class="font-medium">Deneyim</legend>

              <ul class="mt-6 grid grid-cols-1 gap-4">
                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="rating" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">Abla gibi</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="rating" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">Abla</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="rating" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">Abla gibi abla</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center gap-3">
                    <input type="checkbox" name="rating" class="h-6 w-6 rounded-md border-gray-200" />

                    <span class="text-sm font-medium text-gray-700">ANA</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-around py-4">
        <button class="rounded-lg p-3 border-2 border-amber-600 text-sm font-medium text-amber-600" type="reset">
          Tumunu Temizle
        </button>

        <button class="rounded-lg bg-amber-600 p-3 text-sm font-medium text-white" type="submit">
          Sonuclari goster
        </button>
      </div>
    </form>
  </div>
</template>
  
<script>
export default {
  name: "FilterBar",
};
</script>
  