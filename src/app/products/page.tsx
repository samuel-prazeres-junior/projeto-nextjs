function ProductsListPage() {
  return (
    <div className="m-2">
      <form>
        <input type="search" placeholder="Pesquisar..." name="search" />
        <button type="submit">Pesquisar</button>
      </form>
      <div className="container mt-8">
        <h1 className="text-2xl front-bold">Lista Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="#" />
            <h2 className="text-lg text-black font-semibold">
              Nome do Produto
            </h2>
            <div className="text-blue-600 font-bold">R$: 10,00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsListPage;
