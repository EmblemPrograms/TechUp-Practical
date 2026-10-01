function Practice() {
    return (
        <div className="px-8 py-4">
            <div className="p-8 space-y-6">
                <div className="flex gap-10 bg-gray-100 p-4">
                    <div className="bg-blue-500 text-white p-4">A</div>
                    <div className="bg-blue-500 text-white p-4">B</div>
                    <div className="bg-blue-500 text-white p-4">C</div>
                </div>
                <div className="flex gap-11 justify-end bg-gray-100 p-4">
                    <div className="bg-green-500 text-white p-4">A</div>
                    <div className="bg-green-500 text-white p-4">B</div>
                    <div className="bg-green-500 text-white p-4">C</div>
                </div>
                <div className="flex justify-center items-center h-40 bg-gray-100">
                    <div className="bg-purple-500 text-white p-4">Perfectly Centred</div>
                </div>
            </div>

        </div>
    );
}

export default Practice;