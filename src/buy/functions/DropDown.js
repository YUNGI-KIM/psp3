


function DropDown(){
    return(
<div className="mt-1 border rounded-full mr-10 ml-10 ">
                <div className="mb-1 flex mr-40 ml-40 justify-center">
                    <label class="text-gray-700" for="animals">
                        제조사
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                제조사를 선택해주세요.
                            </option>
                            <option value="dog">
                                현대자동차
                            </option>
                            <option value="cat">
                                기아자동차
                            </option>
                            <option value="hamster">
                                제네시스
                            </option>
                            <option value="parrot">
                                KGM모빌리티
                            </option>
                            <option value="spider">
                                쉐보레
                            </option>
                            <option value="goldfish">
                                르노자동차
                            </option>
                        </select>
                    </label>


                    <label class="text-gray-700" for="animals">
                        가격대
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                가격대를 선택해주세요
                            </option>
                            <option value="dog">
                                ~2,000만원
                            </option>
                            <option value="cat">
                                2,000만원 ~ 4,000만원
                            </option>
                            <option value="hamster">
                                4,000만원 ~ 6,000만원
                            </option>
                            <option value="parrot">
                                6,000만원 ~ 8,000만원
                            </option>
                            <option value="spider">
                                8,000만원 ~ 10,000만원
                            </option>
                            <option value="goldfish">
                                10,000만원 ~
                            </option>
                        </select>
                    </label>


                    <label class="text-gray-700" for="animals">
                        차 종
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                차종을 선택하세요
                            </option>
                            <option value="dog">
                                세단
                            </option>
                            <option value="cat">
                                SUV
                            </option>
                            <option value="hamster">
                                MPV
                            </option>
                            <option value="parrot">
                                CUV
                            </option>
                            <option value="spider">
                                경차
                            </option>
                        </select>
                    </label>


                    <label class="text-gray-700" for="animals">
                        연료
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                연료방식을 선택해주세요
                            </option>
                            <option value="dog">
                                휘발유
                            </option>
                            <option value="cat">
                                경유
                            </option>
                            <option value="hamster">
                                LPG
                            </option>
                            <option value="parrot">
                                전기
                            </option>
                            <option value="spider">
                                수소
                            </option>
                        </select>
                    </label>

                
                <div className=" mt-2 mb-2 flex-1 flex justify-center">
                    <input
                        type="search"
                        placeholder="Search"
                        className="border rounded-full px-4 py-2 w-40 sm:w-140 ml-15.5 focus:outline-none text-base"
                    />
                </div>
                </div>
            </div>
    );
}
export default DropDown;