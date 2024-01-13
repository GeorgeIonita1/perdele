import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Support',
    lines: [
      'Help & Contact Us',
      'Return & Refunds',
      'Online Stores'
    ]
  },
  {
    title: 'Company',
    lines: [
      'What we do',
      'Gift Offers',
      'F.A.Q'
    ]
  },
  {
    title: 'Category',
    lines: [
      'Livingroom',
      'Bedroom',
      'Bathroom',
    ]
  }
];

export const navigationLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Categories',
    path: '/product/2'
  },
  {
    name: 'Bedroom',
    path: '/product/2'
  },
  {
    name: 'Livingroom',
    path: '/product/2'
  },
];

export const dummyData: DummyData[] = [
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 1,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 2,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 3,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 4,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 5,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 6,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpeg',
    id: 7,
    price: '$130.00',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD94v2W9S+G+q/s+f8ACRaumhal4oRZpdMkm1bSb/Ub+P7PZHyLOe01C7g1OGWd4p7W8s5ry1nSRJLW4lSVCfHp4+VSSkpTlCbvCarc13f4LQnKLXLrzpuL+G+qZ7dehVVTl9nOlaPvQnTceR66STXutbNX07d/h7xN8eP2tbPxJ4gtPC3we8B3Hhi11vVbbw5cXvgX9oW7vJ9Bgv7iLSJru60HwbdaHc3MunrbvPcaNdXOlTSs8mnTzWbQyN2SzvDRlKKxOGSi3FJ0sXdWdrPlpct1s+XS+2h50sBmzlJqgmruzdSF2r6N/vlvvseCfB+5uNN8G+DodOnm0+G1hs1torKV7WK2X+wbGXbBHA0awjzUSTEYUeYiv95QR+WzxGIWqr1k/aJ3VWad9Nb82/mfrkMPh2p3oUXekr3pQd9/7p9W6trmtQarqcMOr6pDDDqF5FFFFqF3HFFFHcyJHHHGkoVI0UBURQFVQAAAAK29tWWiq1ElokpySSWySvokZ0qNJ06bdKm24QbbhG7fKtXoAP/Z',
    oldPrice: '$220.00'
  },
];

export const highlightDisplay = [
  {
    name: 'CLEW',
    rating: '★★★★★',
    price: '$23',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9BvhT8YNK1j4yfDbw7d+ENfj8aW3x21/XvEyaTDp+r3PhbTfEGqppkc/ie60i8vk0iDS59WsryJZ7yxTWXguG0C1vja3UtrUcxy2lhMPVlX1rTSgpUq0W5Vbvd04xlGPO5KSeqSto1Z8mKq1cRHkguTBYfDO06b/3Z0FNpKT5XUjTau7tXak09vpXw67/APCbeGDubI8TeHMHceM6xYZxzxnJz65NfltH+PRXT2tL84H0Uvgqf4J/kwD/2Q==',
    imgSrc: '/one.jpeg'
  },
  {
    name: 'VASE',
    rating: '★★★★',
    price: '$44',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9C/hz8ZvAGkfDXwfpt3450qbWbfxv8NI/JudfNj4+m1K68ZaJbPb3vgyDVNPSNZo7y5iYf2fF5enKmozWszpmSaWf4Z4N4f8AtCDrSlTik6tKLlea09ndP34O3wXs7pbG08oxn1r231Cs6KjUd1SquCShJqSq2aajJJ/xLXi03uj8zvgJZ2lp4/8Ah9ZWtrb21nB8T/DkcNpbwRw20McfjCwEccUEarFGiBFCKihVCrtAwK/CMQ2s8rpOyWbtWWit9bWnoftmH1yOk3q3ld23q2/q71vvcP/Z',
    imgSrc: '/two.jpeg'
  },
  {
    name: 'STORAGE',
    rating: '★★★★★',
    price: '$23',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5i1D9ovwV4y+O3wh+IPgG+0iy8G6r8ffBHg/S/D9l4L1hfsE82rfAzRtOv7fxKdD0ODWJr7xhqfxHj3w6JFbW1lLo01rdynw9qN3c/KYbKcHleQ4CNLiSpmmcyzOvDF4b6pOlhYYCmvaUMTSxVac41Kk7Tp1cNzOVN0oz19uow+6njcyxmcZlHE5HTwOSQyulPB4+OJjUxNbH1fcrYaphKcW6VKjGUKlPEPSr7SpFqHsHKfwP8HfGPi6H9on4UaZD4q8RxabB8W/hQINPi1zU47KESePLaGQRWiXQgjEkIEThIxujAjbKjFfBZVVqT+pYedSc8P8AW+f2EpylR5+aj7/sm3Dm1fvct9XrqfQcQydKderSbp1Xh5wdWm3Co4ctf3XONpcui929tFpoAP/Z',
    imgSrc: '/three.jpeg'
  },
  {
    name: 'DECORATIVE CANDLE',
    rating: '★★★★★',
    price: '$23',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5L+Cs3xw0vwL+ydqa+N/iCPEz/E/wF49+JPhrS/EFzqOoaN8IvGvxCvfCnhO21iOxvL/XdKj06L4d33iPVHuVtorbRPiHbRyotrpM6aX8XiMFjMvwOVSw+axxU8dyYirCFSlOVGE8X7L2UpxvKcoxjz1IzcZxjNQndxly/UU688THGqrhK9D6nN0XOpCpF1IPDRqKpGM4q1PmvCDjzKTUmvd5EeofsvW1tJ4N+BuvSW8D65rF54M07V9ZeKNtV1TT7TXLprSw1HUSpvL6ztmuJ2t7W5mlghM0pjRTI+7xssbdPB3d/wDaqa113qU7797K/c+jzXSpmFtP9kqbabU6lvuu7dug/9k=',
    imgSrc: '/four.jpeg'
  },
  {
    name: 'HOLDBACK',
    rating: '★★★',
    price: '$23',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhv2vf+Cfv7YfxFvpNV8SeBNT+NWm2OpaidMuLx/G48P6XpV7aXmlvDF4b0K18PWmn3Zl1O4nsdRutGiuI7hILq0uvLkhWA+r11Hmp4iMoSTXLCMYtuLVrSly+5eNtXaXRtam1TEUErTw0oy5lLncnK0ZJp3UHP3nfdpOD3Vz5f8M/8E4vG1j4b8PWWrfCH4q2mq2eh6Ta6naWHg3xfc2NrqFvYW8N7b2VzLP5lxaQXKSR288nzywqkj/MxrjdPE3f7upu/swf4+01NY1sFyq80tFpaXbzhf7w/9k=',
    imgSrc: '/five.jpeg'
  },
];

export const heroBanners = [
  {
    alt: 'Red show curtains',
    src: '/cashmere.jpeg',
    fit: 'object-left',
    title: 'Window Couture: Dressing Your Spaces with Distinctive Flair',
    grayscale: 'grayscale',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAHAAkDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+LHSrjRdN8IjWr6G3/tnU9dj0LTLuK2un/s3daC61C+aBrh7aZoI5IY7ZVSNyZnZV3R+ZX6DTr04YP29Tl9tUxCw9GUYStScoc9Sq1zNS5I8qjHq5N7ps/Ccxw+Y4vPllmFlV+oYPKqmbY6jOvRj9cjDEPDYPCRqqlGrBVqkatSvJuSSowjJuM+U4/wD4SXUP+f7Wv/ALRv8A5Z15/wDaWK/mr/8AgrDf/Lz3v7CwX/QNln/hVmf/AMwg/9k='
  },
  {
    alt: 'Gray curtains',
    src: '/gray.jpeg',
    fit: 'object-center',
    title: 'Most powerful concept',
    subtitle: `Transform your space with our exquisite curtains—where 
    fashion meets function. Elevate ambiance, embrace comfort, 
    and indulge in affordable luxury today!`,
    action: 'BROWSE',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAHAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD81f8AgnJ+xDd6xqmm6H8fPhasnhyP4b6h/qvEPhma4tdbTU7aaC4Euja1fXBVIBMjNGrDbKAuG3EdF13/AK6mdn+flsbniT9j/wAKQeIteht/g/qsdvDrWqRQRjxR4XYRwx306RIGbWwzbUCrkgE4yRmquvP7/wDgC5fJfgD/2Q=='
  },
]
