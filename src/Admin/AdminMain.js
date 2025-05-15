import Header from '../functions/Header';

function AdminMainPage() {

    const unAnsweredCount = 5;
    const todayUnAnsweredCount = 2;

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>

            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <span className="text-3xl font-bold text-indigo-600">{todayUnAnsweredCount}</span>
                        <span className="text-gray-600">오늘 들어온 문의 </span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <span className="text-3xl font-bold text-indigo-600">{unAnsweredCount}</span>
                        <span className="text-gray-600"> 현재까지 미답변 문의 </span>
                    </div>

                    <div className="flex items-center justify-center p-12">
                        <div className="mx-auto w-full max-w-[550px] bg-white">
                            <form className="py-6 px-9">
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-xl font-semibold text-[#07074D]">Upload Image For
                                        mainPage Slide</label>
                                    <div className="mb-8">
                                        <input type="file" name="file" id="file" className="sr-only"/>
                                        <label htmlFor="file"
                                               className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                            <div>
                                                <span className="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
                                                <span
                                                    className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                                                <span
                                                    className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">Browse</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Send File
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminMainPage;