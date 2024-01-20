import Image from "next/image";

function ProductDetail() {
    return (
        <div className="md:grid md:grid-cols-12 md:gap-16">
            <div className="col-span-5 aspect-square">
                <Image
                    alt="Imagine cu perdele"
                    src='/perdele.jpeg'
                    height={768}
                    width={768}
                    placeholder="blur"
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z'
                />
            </div>
            <div className="col-span-7 flex flex-col gap-12 max-md:mt-6">
                <h1 className="font-extrabold text-4xl">Product Title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum inventore libero maxime, iusto consequatur
                    voluptatibus necessitatibus facere, quaerat,
                    assumenda tenetur voluptatem deserunt numquam quisquam
                    nihil quas! Consequatur corrupti maxime accusantium!
                </p>
                <span className="block font-bold text-xl">$150.00 <s>$210.00</s></span>
                <div className="flex flex-col gap-2">
                    <small>SKU: 38495</small>
                    <small>Brand: Nutline</small>
                    <small>Category: Face</small>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
