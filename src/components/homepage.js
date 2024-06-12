import { useMyState } from "../Context";


function HomePage() {
  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 14,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 4,
      name: "Vintage Leather Jacket",
      href: "#",
      price: "$250",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      imageAlt: "Vintage brown leather jacket with front zipper and collar.",
    },
    {
      id: 5,
      name: "Wireless Bluetooth Headphones",
      href: "#",
      price: "$80",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt: "Black wireless Bluetooth headphones with over-ear design.",
    },
    {
      id: 6,
      name: "Smartphone Tripod Mount",
      href: "#",
      price: "$20",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg",
      imageAlt: "Tripod mount for smartphones with adjustable grip.",
    },
    {
      id: 7,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 8,
      name: "Leather Messenger Bag",
      href: "#",
      price: "$120",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-03-image-card-01.jpg",
      imageAlt:
        "Brown leather messenger bag with brass buckles and adjustable shoulder strap.",
    },
    {
      id: 9,
      name: "Stainless Steel Water Bottle",
      href: "#",
      price: "$30",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-04.jpg",
      imageAlt: "Stainless steel water bottle with twist-off cap.",
    },
    {
      id: 10,
      name: "Classic Aviator Sunglasses",
      href: "#",
      price: "$50",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-04.jpg",
      imageAlt:
        "Classic aviator sunglasses with gold frame and dark tinted lenses.",
    },
    {
      id: 11,
      name: "Portable External Hard Drive",
      href: "#",
      price: "$100",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-03-image-card-02.jpg",
      imageAlt: "Black portable external hard drive with USB cable.",
    },
    {
      id: 12,
      name: "Ceramic Coffee Mug Set",
      href: "#",
      price: "$40",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      imageAlt: "Set of four ceramic coffee mugs in assorted colors.",
    },
    {
      id: 13,
      name: "Portable Bluetooth Speaker",
      href: "#",
      price: "$70",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Black portable Bluetooth speaker with control buttons.",
    },
  ];



  function addToCart(product) {
    // setCart((prevData) => [...prevData, product]);
    // console.log(cart);
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <button
                className="bg-transparent hover:bg-blue-500 
              text-blue-700 font-semibold hover:text-white py-2 px-4 
              border border-blue-500 hover:border-transparent rounded"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
