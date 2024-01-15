export async function getDisplayCategoryList() {
    try {
        const rep = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/display/v1/displayCategory`, {
            next: {
                tags: ['displayCategory', 'list'],
            },
            cache: 'no-store',
        });
        return await rep.json();
    } catch (err) {
        console.error(err);
        return;
    }
}