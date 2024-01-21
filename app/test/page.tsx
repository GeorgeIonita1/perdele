export default async function Test() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    await new Promise(resolve => setTimeout(resolve, 2000))
    const data = await response.json();

    return (
        <div>
            {data.map((item: any, idx: number) => (
                <div>
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    );
}
