function Footer() {
    return (
        <footer className="page-footer deep-orange darken-3">          
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Nikolay Chernikov
            <a className="grey-text text-lighten-4 right" href="https://inoris7.github.io/react-toys-shop/">Repo</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer};