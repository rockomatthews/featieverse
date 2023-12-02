

function Header({onLoginClick}) {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-lg">FestieVerse</h1>
            <nav>
                <a href="/" className="text-white p-2">Home</a>
                <button onClick={onLoginClick}>Login</button>
            </nav>
        </header>
    );
}

export default Header;