

export default function Header() {
    return (
        <div className="container mx-auto truncate">
            <div className="flex items-center justify-between max-w-xs mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
                <div>
                    <h2 className="font-serif text-xl font-bold tracking-widest text-white uppercase cursor-pointer md:text-2xl">naga motors</h2>
                </div>
                <div className="hidden text-white lg:block">
                    <ul className="flex">
                        <li><a className="px-[25px] uppercase font-semibold text-base tracking-wider" href="#">Home</a></li>
                        <li><a className="px-[25px] uppercase font-semibold text-base tracking-wider" href="#">Brand</a></li>
                        <li><a className="px-[25px] uppercase font-semibold text-base tracking-wider" href="#">Service</a></li>
                        <li><a className="px-[25px] uppercase font-semibold text-base tracking-wider" href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <img className="w-[30px] h-[30px] text-black" src="./image/menu.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
