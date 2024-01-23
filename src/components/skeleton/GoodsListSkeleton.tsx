
export default function GoodsListSkeleton() {
    return (
        <div className="p-4 bg-white">
            <div className="flex flex-col flex-nowrap items-center max-w-[1120px] m-auto">
                <div className="relative mt-[50px] mb-[45px]">
                <div className="flex flex-wrap mb-[24px] justify-center">
                        <div className="flex m-4 rounded w-[200px] flex-col shadow-lg drop-shadow-lg overflow-hidden">
                            <figure className="w-full h-[200px] bg-gray-100 mb-[10px]"></figure>
                            <div>
                                <div className="w-full h-[20px] bg-gray-100 mb-3"></div>
                                <div className="w-full h-[40px] bg-gray-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}