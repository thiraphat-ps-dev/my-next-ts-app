// src/utils/fetchPostsData.test.ts
import { fetchPostsData } from '../fetchPostsData';

describe('fetchPostsData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch posts data successfully', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        { id: 1, title: 'Post 1', body: 'This is the first post.' },
      ]),
    );

    const data = await fetchPostsData();
    expect(data).toEqual([
      { id: 1, title: 'Post 1', body: 'This is the first post.' },
    ]);
  });

  it('should throw an error when fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Network response was not ok'));

    await expect(fetchPostsData()).rejects.toThrow(
      'Network response was not ok',
    );
  });
});
