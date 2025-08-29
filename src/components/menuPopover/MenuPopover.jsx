import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const MenuPopover = () => {
    return (
        <div className="flex items-center">
            <Popover>
                <PopoverButton
                    className="block text-sm font-semibold text-stone-50 hover:opacity-80 transition-opacity duration-300 focus:outline-none data-active:text-fuchsia-200 data-focus:outline data-focus:outline-black"
                >
                    Acceder
                </PopoverButton>
                <PopoverPanel
                    transition
                    anchor="bottom end"
                    className="divide-y divide-gray-200 rounded-xl bg-white text-sm shadow-lg transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                >
                    <div className="p-3">
                        <a className="block rounded-lg px-3 py-2 transition hover:bg-gray-100" href="/login">
                            <p className="font-semibold text-black">Iniciar sesión</p>
                            <p className="text-gray-500">Accede a tu cuenta</p>
                        </a>

                        <a className="block rounded-lg px-3 py-2 transition hover:bg-gray-100" href="/register">
                            <p className="font-semibold text-black">Registrarse</p>
                            <p className="text-gray-500">Crea una nueva cuenta</p>
                        </a>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    )
}

export default MenuPopover
