interface postType {
    id: number
    title: string
    content: string
    category_id: number
    image: string
    }
export async function getPosts(): Promise<postType[]> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/api/posts`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}