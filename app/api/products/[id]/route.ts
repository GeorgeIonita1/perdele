import { getSingleProduct } from "@/lib/utils";

export async function GET(
    request: Request,
    { params }: { params: { id: number } }
) {
    const id = params.id;
    const data = await getSingleProduct(id);

    return Response.json({ data });
}
