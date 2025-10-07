export function NavBarAdm() {
  return (
    <nav className=" navbar sticky-top navbar-expand-lg navbar-light bg-light py-2">
      <div className=" container-fluid">
        <h1 className="navbar-brand"> Admin </h1>
        <button
          className=" navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
          aria-controls="navbarcontents"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className=" navbar-toggler-icon"></span>
        </button>

        <div className=" navbar-collapse collapse" id="navbarcontents">
          <ul className="navbar-nav mb-auto mb-auto mb-lg-0">
            <li className=" nav-item">
              <a className=" nav-link active" href="/Frontpg">
                Home
              </a>
            </li>
            <li className=" nav-item">
              <a className=" nav-link  " href="/StdRec">
                Student Records
              </a>
            </li>
            <li className=" nav-item">
              <a className=" nav-link  " href="/CrtExm">
                Create New Test
              </a>
            </li>
            <li className=" nav-item">
              <a className=" nav-link  " href="/">
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
