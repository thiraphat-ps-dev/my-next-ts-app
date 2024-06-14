// src/utils/fetchUserData.test.ts
import { fetchUserData } from '../api/fetchUserData';

describe('fetchUserData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch user data successfully', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
      }),
    );

    const data = await fetchUserData();
    expect(data).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    });
  });

  it('should throw an error when fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Network response was not ok'));

    await expect(fetchUserData()).rejects.toThrow(
      'Network response was not ok',
    );
  });
});
