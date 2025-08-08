export interface CategoryType {
    id: number;
    title: string; // Changed from `name` to `title` to match UI
}

export async function getCategories(): Promise<CategoryType[]> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/categories`);

    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    
    return response.json();
}
