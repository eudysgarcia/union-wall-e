export function Logo() {
    return (
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo" className="w-5 h-5 text-primary-foreground fill-current" />
        </div>
    )
}