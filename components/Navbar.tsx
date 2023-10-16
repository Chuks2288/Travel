import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="/hilink-logo.svg"
                    alt="logo"
                    width={74}
                    height={29}
                    className="object-contain"
                />
            </Link>

            <ul className="hidden lg:flex h-full gap-12">
                {[]}
            </ul>
        </nav>
    )
}

export default Navbar