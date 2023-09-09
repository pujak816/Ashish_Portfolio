import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="space-x-7  flex justify-center items-center">
      <Link
        to="https://www.linkedin.com/in/ashish-shirodkar-720783223/"
        className="p-2 border border-white rounded-full hover:bg-violet-500"
        target="_blank"
      >
        <LinkedInIcon
          sx={{
            fontSize: 30,
            color: "#dbeafe",
          }}
          className="hover:text-white"
        />
      </Link>

      <Link
        to="https://github.com/Ashish-2027"
        target="_blank"
        className="p-2 border border-white rounded-full hover:bg-violet-500"
      >
        <GitHubIcon
          sx={{ fontSize: 30, color: "#dbeafe" }}
          className="hover:text-white"
        />
      </Link>

      <Link
        to="mailto:ashirodkar111@gmail.com"
        target="_blank"
        className="p-2 border border-white rounded-full hover:bg-violet-500"
      >
        <EmailIcon
          sx={{ fontSize: 30, color: "#dbeafe" }}
          className="hover:text-white"
        />
      </Link>
    </div>
  );
};

export default Contact;
