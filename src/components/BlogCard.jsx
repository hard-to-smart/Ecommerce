import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const BlogCard = ({blog}) => {
  return(
        <Card className="w-[250px] h-[200px] overflow-clip pb-2 bg-teal-100">
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-lg text-gray">
              {blog.title}
            </Typography>
            <Typography variant="lead" color="gray" className="py-2 font-normal text-base">
              {blog.body.split(" ").slice(0, 10).join(' ')} ...
            </Typography>
          </CardBody>
        </Card>
      );
    }


export default BlogCard;
