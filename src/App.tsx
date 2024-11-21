import './App.css'

export const  App = ()=> {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <div className="text-2xl font-bold text-gray-800">
                ElectroEpilacja
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li className="cursor-pointer text-gray-600 hover:text-gray-800">
                        О студии
                    </li>
                    <li className="cursor-pointer text-gray-600 hover:text-gray-800">
                        О процедуре
                    </li>
                    <li className="cursor-pointer text-gray-600 hover:text-gray-800">
                        Отзывы
                    </li>
                    <li className="cursor-pointer text-gray-600 hover:text-gray-800">
                        Услуги
                    </li>
                    <li className="cursor-pointer text-gray-600 hover:text-gray-800">
                        Цены
                    </li>
                    <li className="cursor-pointer text-gray-600 hover:text-gray-800">
                        Контакты
                    </li>
                </ul>
            </nav>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Запись онлайн
            </button>
        </header>
    );
}



