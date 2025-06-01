import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaSun, FaMoon, FaGem } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const isDark = theme === 'dark';

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      bg={isDark ? 'dark' : 'light'} 
      variant={isDark ? 'dark' : 'light'} 
      sticky="top" 
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <FaGem className="text-primary" />
          <span className="fw-bold">PM App</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Button 
            variant={isDark ? 'light' : 'dark'} 
            onClick={toggleTheme}
            className="d-flex align-items-center gap-2"
          >
            {isDark ? <FaSun /> : <FaMoon />}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
