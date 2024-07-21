import { IProduct } from "@/common/types/product";
import { getAllProducts, removeProduct } from "@/services/product";
import { FormOutlined, RestOutlined } from "@ant-design/icons";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Button, Image, message, Popconfirm, Space, Table } from "antd";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  _id: string;
  productName: string;
  categoryId: string;
  original_price: number;
  stock_quantity: number;
  main_image: string;
  featured: true;
}

const ProductsList = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Products"],
    queryFn: () => getAllProducts(),
    staleTime: 1000,
  });

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      try {
        return await removeProduct(id);
      } catch (error) {
        throw new Error((error as any).message);
      }
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "This is a success message",
      });
      queryClient.invalidateQueries({
        queryKey: ["Products"],
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "This is an error message",
      });
    },
  });
  // Định nghĩa dữ liệu truyền vào table
  const dataSource = data?.data?.map((product: IProduct) => ({
    key: product._id,
    ...product,
  }));
  // Định nghĩa các cột truyền vào table
  const columns = [
    {
      key: "image",
      title: "Image",
      dataIndex: "main_image",
      render: (_: any, product: IProduct) => (
        <>
          <Image src={product.main_image} alt="" width={100} />
        </>
      ),
    },
    { key: "name", title: "Name", dataIndex: "productName" },
    { key: "price", title: "Price", dataIndex: "original_price" },
    {
      key: "quantity",
      title: "Stock Quantity",
      dataIndex: "stock_quantity",
    },
    {
      key: "featured",
      title: "Featured",
      dataIndex: "featured",
      render: (_: any, product: IProduct) => {
        return product?.featured == true ? "Có" : "Không";
      },
    },
    {
      key: "action",
      title: "Action",
      render: (_: any, product: IProduct) => {
        return (
          <Space>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => mutate(product._id)}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>
                <RestOutlined />
              </Button>
            </Popconfirm>

            <Link to={"/admin/products/" + product._id + "/edit"}>
              <Button>
                <FormOutlined />
              </Button>
            </Link>
          </Space>
        );
      },
    },
  ];
  //check box delete button

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  if (isLoading) return <div>Loading ....</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      {contextHolder}
      <div>
        <h2 className="text-xl my-6">Product List</h2>
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </>
  );
};

export default ProductsList;
