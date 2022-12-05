interface Catalogo {
  page: number,
  total: string,
  pages: number,
  limit: string,
  data: Casa[]

}

interface Casa {
  id: number,
  title: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  host_type?: string,
  featured_photo: string,
  description?: string,
  time?: string
}

interface Pessoa {
  name: string,
  photo: string
}

interface Anfitriao extends Pessoa {
  type: string,
  rating: number
}

interface Comentador extends Pessoa {
  date: string,
  comment: string
}

interface Comentarios {
  reviews: Comentador[]
}

interface ComodidadesAPI {
  features: string[]
}

interface GaleriaAPI {
  photos: string[]
}
