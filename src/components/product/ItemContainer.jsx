export default function ItemContainer({ product }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl justify-center h-[500px] ">
      <figure>
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-[70%] object-cover"
        />
      </figure>
      <div className="card-body h-[30%] p-4">
        <h2 className="card-title justify-between">
          {product?.name}
          <div className="badge badge-neutral ">{product?.category?.name}</div>
          {product.stock === 0 && (
            <div className="absolute top-32 left-0 min-w-full bg-white py-2 text-3xl font-semibold opacity-80 text-center shadow-xl">
              <p>Sold out</p>
            </div>
          )}
          {product.deleted === true && (
            <div className="absolute top-32 left-0 min-w-full bg-white py-2 text-3xl font-semibold opacity-80 text-center shadow-xl">
              <p>Temporarily suspended</p>
            </div>
          )}
        </h2>
        <p className="text-sm text-neutral-500 break-words">
          {product?.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product?.price} Baht</div>
          <div className="badge badge-outline">in stock: {product?.stock}</div>
        </div>
      </div>
    </div>
  );
}
