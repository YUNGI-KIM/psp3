import React, { useState, useEffect } from 'react';
const MainPage = () => {

  return (
    <div>
      <nav class="bg-black dark:bg-gray-800 shadow">
        <div class="px-8 mx-auto max-w-7xl">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0" href="/">
                <img class="w-8 h-8" src="/icons/rocket.svg" alt="Workflow" />
              </a>
              <div>
                <div class="flex items-baseline ml-10 space-x-4">
                  <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    차량구매
                  </a>
                  <a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    신규차량
                  </a>
                  <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    인기차량
                  </a>
                  <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    차량정보
                  </a>
                  <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    견적
                  </a>
                  <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    고객지원
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>


  );

}

export default MainPage;