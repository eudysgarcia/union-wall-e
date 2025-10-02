
export default function Navbar() {
    return (
        <>
        <nav className="bg-white light:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 light:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.svg" className="h-14 transform scale-250" alt="Union Wall-E" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:fouces:ring-blue-800">
                        Donar
                    </button>
                    <button type="button" className="border m-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-4 
                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
                    dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-700">
                        Voluntario
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center
                    p-2 w-10 h-10 m-2 justify-center text-sm text-blue-500 rounded-lg md:hidden 
                    hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 
                    light:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Abrir menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dart:text-blue-500" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Programas</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Eventos</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}