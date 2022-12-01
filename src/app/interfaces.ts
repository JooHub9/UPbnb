interface Catalogo {
  page: number,
  total: string,
  pages: number,
  limit: string,
  data: Casa[]

}

interface Casa {
  id : number,
  title?: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  host_type?: string,
  featured_photo: string
  description?: string
  time?: string
}

interface Anfitriao {
  name: string,
  photo: string,
  type: string,
  rating: number
}

interface Galeria {
  photos: string[]
}
