import mobile1 from '/public/category/mobile1.png';
import mobile2 from '/public/category/mobile2.png';
import mobile3 from '/public/category/mobile3.png';
import mobile4 from '/public/category/mobile4.png';

import web4 from '/public/category/web4.png';
import web1 from '/public/category/web1.png';
import web3 from '/public/category/web2.png';
import web2 from '/public/category/web3.png';

import ux4 from '/public/category/ux4.png';
import ux1 from '/public/category/ux1.png';
import ux2 from '/public/category/ux2.png';
import ux3 from '/public/category/ux3.png';

import video1 from '/public/category/video1.png';
import video2 from '/public/category/video2.png';
import video3 from '/public/category/video3.png';
import video4 from '/public/category/video4.png';






type CardData = {
    id:number;
    image:string;
    title:string;
    des:string;
    price:string;
    oldPrice:string;
    category:string;
}

export const cardData: CardData[] = [
    // Web Category
    {
      id: 1,
      image: web1.src,
      title: "Responsive Website Design",
      des: "Get a fully responsive and modern website for your business.",
      price: "$499",
      oldPrice: "$599",
      category: "web",
    },
    {
      id: 2,
      image: web2.src,
      title: "E-Commerce Website",
      des: "Build an e-commerce platform with advanced features.",
      price: "$899",
      oldPrice: "$999",
      category: "web",
    },
    {
      id: 3,
      image: web3.src,
      title: "Portfolio Website",
      des: "Showcase your work with a personalized portfolio website.",
      price: "$299",
      oldPrice: "$399",
      category: "web",
    },
    {
      id: 4,
      image: web4.src,
      title: "Web Application Development",
      des: "Develop scalable and secure web applications.",
      price: "$1299",
      oldPrice: "$1399",
      category: "web",
    },
  
    // Mobile Category
    {
      id: 5,
      image: mobile1.src,
      title: "iOS App Development",
      des: "Custom iOS applications tailored to your needs.",
      price: "$999",
      oldPrice: "$1199",
      category: "mobile",
    },
    {
      id: 6,
      image:  mobile2.src,
      title: "Android App Development",
      des: "Feature-rich Android apps for businesses.",
      price: "$899",
      oldPrice: "$1099",
      category: "mobile",
    },
    {
      id: 7,
      image:  mobile3.src,
      title: "Cross-Platform App Development",
      des: "Apps for both iOS and Android platforms.",
      price: "$1299",
      oldPrice: "$1499",
      category: "mobile",
    },
    {
      id: 8,
      image: mobile4.src,
      title: "Mobile Game Development",
      des: "Build engaging games for mobile devices.",
      price: "$1999",
      oldPrice: "$2299",
      category: "mobile",
    },
  
    // Video Category
    {
      id: 9,
      image: video1.src,
      title: "Video Editing",
      des: "Professional video editing services for any project.",
      price: "$299",
      oldPrice: "$399",
      category: "video",
    },
    {
      id: 10,
      image:video2.src,
      title: "Motion Graphics",
      des: "Eye-catching motion graphics for videos.",
      price: "$499",
      oldPrice: "$599",
      category: "video",
    },
    {
      id: 11,
      image: video3.src,
      title: "Explainer Videos",
      des: "Create explainer videos to promote your business.",
      price: "$699",
      oldPrice: "$799",
      category: "video",
    },
    {
      id: 12,
      image: video4.src,
      title: "Animation Videos",
      des: "Custom animation videos for storytelling.",
      price: "$899",
      oldPrice: "$999",
      category: "video",
    },
  
    // UX Category
    {
      id: 13,
      image: ux1.src,
      title: "UI/UX Design",
      des: "Design user-friendly interfaces for your product.",
      price: "$499",
      oldPrice: "$599",
      category: "ux",
    },
    {
      id: 14,
      image: ux2.src,
      title: "User Research",
      des: "Understand your audience with in-depth research.",
      price: "$699",
      oldPrice: "$799",
      category: "ux",
    },
    {
      id: 15,
      image: ux3.src,
      title: "Wireframing and Prototyping",
      des: "Create wireframes and prototypes for testing.",
      price: "$399",
      oldPrice: "$499",
      category: "ux",
    },
    {
      id: 16,
      image: ux4.src,
      title: "Usability Testing",
      des: "Test your product with real users for insights.",
      price: "$599",
      oldPrice: "$699",
      category: "ux",
    },
  ];
  

  