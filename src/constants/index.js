import {
  adasi,
  backend,
  carrent,
  chakraUi,
  docker,
  git,
  java,
  liferay,
  mobile,
  pg,
  reactjs,
  redux,
  softreaming,
  springBoot,
  tailwind,
  taskmanager,
  typescript,
  web,
} from "../assets";
import moment from "moment";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springBoot,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Chakra UI",
    icon: chakraUi,
  },
  {
    name: "PostgreSQL",
    icon: pg,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Liferay Inc.",
    icon: liferay,
    iconBg: "#383E56",
    date: `Sep 2023 - ${moment(new Date()).format("MMM YYYY")}`,
    points: [
      "Developing and maintaining web applications using mostly Java, Spring Boot and Liferay.",
      "Collaborating with cross-functional teams including product managers, QA's, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Adasi Software",
    icon: adasi,
    iconBg: "#383E56",
    date: "Dez 2022 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "João Paulo é um verdadeiro gênio da tecnologia! Ele é um desenvolvedor incansável e habilidoso que tem um domínio completo das tecnologias React e Java.",
    name: "Jônatas Alves",
    designation: "Computer Scientist",
    company: "Adasi Software",
    image: "https://avatars.githubusercontent.com/u/49556955?v=4",
  },
  {
    testimonial:
      "Conheço João há algum tempo e posso dizer, sem sombra de dúvida, que ele é um desenvolvedor de alto nível, com habilidades incomparáveis.",
    name: "Antonio Cristovam",
    designation: "Software Developer",
    company: "Adasi Software",
    image: "https://avatars.githubusercontent.com/u/84741807?v=4",
  },
  {
    testimonial:
      "Existem muitos profissionais talentosos no mundo de tecnologia, mas há alguns que se destacam pela paixão e dedicação ao que fazem. É o caso de João Paulo, que tem se tornado cada vez mais reconhecido por suas habilidades em ReactJs, TypeScript e Java.",
    name: "Lucas Henrique",
    designation: "Mobile Developer",
    company: "Adasi Software",
    image: "https://avatars.githubusercontent.com/u/85376643?v=4",
  },
];

const projects = [
  {
    name: "Adote.Me",
    description:
      "Adote.Me is an innovative project that was born out of the need to find a solution to the persistent problem of animal adoption, especially cats and dogs. his initiative aims to create a network that facilitates the adoption process.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    front_code_link: "https://github.com/jpcchaves/adotar-front",
    back_code_link: "https://github.com/jpcchaves/adotar",
  },
  {
    name: "TaskManager",
    description:
      "The project introduces a user-friendly task management tool, allowing individuals to register, remove, and modify tasks with ease. This streamlined system enhances productivity by enabling efficient organization and clear task lists.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: taskmanager,
    front_code_link: "https://github.com/jpcchaves/taskmanagerv2",
    back_code_link: "https://github.com/jpcchaves/task-manager",
  },
  {
    name: "Softreaming",
    description:
      "The project is about an API inspired by a streaming service, where it's possible to register users and perform authentication. All users can create profiles, with a maximum of 4 profiles per account. Admin users have the ability to create, edit, and delete movies.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: softreaming,
    front_code_link: "https://github.com/jpcchaves/softeaming",
    back_code_link: "https://github.com/jpcchaves/softreaming-api",
  },
];

export { services, technologies, experiences, testimonials, projects };
