import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupPage from '../SignupPage';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest'

describe('SignupPage', () => {
  beforeEach(() => {
    // Mock fetch so no real network request is sent
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'Form received!', received: {} }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks(); // clean up between tests
  });

  it('renders the signup form', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sign up for an account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e.g. John Doe/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e.g. 123/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Write your password again/i)).toBeInTheDocument();
  });

  it('fills and submits the form', async () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/e.g. John Doe/i), {
      target: { value: 'Gregory House' },
    });

    fireEvent.change(screen.getByPlaceholderText(/e.g. 123/i), {
      target: { value: 'vicodin123' },
    });

    fireEvent.change(screen.getByPlaceholderText(/Write your password again/i), {
      target: { value: 'vicodin123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        `${import.meta.env.VITE_API_URL}/submit`,
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uname: 'Gregory House',
            pass: 'vicodin123',
            passConfirm: 'vicodin123',
          }),
        })
      );
    });
  });
});
