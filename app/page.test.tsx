import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('displays the correct heading text', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Hello World');
  });

  it('renders the Next.js logo with correct attributes', () => {
    render(<Home />);
    const nextLogo = screen.getByAltText('Next.js logo');
    expect(nextLogo).toBeInTheDocument();
    expect(nextLogo).toHaveAttribute('src', '/next.svg');
    expect(nextLogo).toHaveAttribute('width', '100');
    expect(nextLogo).toHaveAttribute('height', '20');
  });

  it('renders the Vercel logo with correct attributes', () => {
    render(<Home />);
    const vercelLogo = screen.getByAltText('Vercel logomark');
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLogo).toHaveAttribute('src', '/vercel.svg');
    expect(vercelLogo).toHaveAttribute('width', '16');
    expect(vercelLogo).toHaveAttribute('height', '16');
  });

  it('renders Deploy Now link with correct attributes', () => {
    render(<Home />);
    const deployLink = screen.getByRole('link', { name: /deploy now/i });
    expect(deployLink).toHaveAttribute('href', 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(deployLink).toHaveAttribute('target', '_blank');
    expect(deployLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Documentation link with correct attributes', () => {
    render(<Home />);
    const docLink = screen.getByRole('link', { name: /documentation/i });
    expect(docLink).toHaveAttribute('href', 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(docLink).toHaveAttribute('target', '_blank');
    expect(docLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has correct CSS classes on main container', () => {
    render(<Home />);
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toHaveClass('flex', 'min-h-screen', 'w-full', 'max-w-3xl');
  });

  it('renders both external links', () => {
    render(<Home />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('has proper semantic structure', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});