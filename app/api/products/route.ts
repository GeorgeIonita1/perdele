import { getProducts } from "@/lib/utils";

export async function GET(request: Request) {
    const data = await getProducts();

    return Response.json({ data });
}
