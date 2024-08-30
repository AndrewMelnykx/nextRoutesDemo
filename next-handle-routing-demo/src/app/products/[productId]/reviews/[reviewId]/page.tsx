import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { productId: string; reviewId: string };
};
const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });
  return { title: `Product ${title}` };
};

const ReviewPage = ({ params }: Props) => {
  if (parseInt(params?.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params?.reviewId} for product {params?.productId}
    </h1>
  );
};

export default ReviewPage;
