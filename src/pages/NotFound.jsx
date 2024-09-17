import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 lg:gap-8 px-[5%] py-[3%] *:m-0">
      <Title className="text-9xl">404</Title>
      <Title level={2}>Not Found Page</Title>
      <Link
        to={"/"}
        className="hover:underline hover:text-blue-500 visited:underline visited:text-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
