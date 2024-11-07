import { assetsConfig } from "@/config/assets";

export interface ProjectProps {
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  projectId: string;
  location: string;
}

export const projects: ProjectProps[] = [
  // {
  //   title: "New Hibernia House",
  //   description:
  //     "For this stylish Borough Market office, we designed and installed a custom-sprayed finish kitchenette and print station, featuring a sleek finger-pull detail. Both pieces were complemented by microcement countertops and sides, creating a seamless, modern aesthetic. Our bespoke design struck the perfect balance between form and function, enhancing the industrial charm of the office interior while providing practical and durable workspace solutions",
  //   src: assetsConfig["new-hibernia-house"][2].src,
  //   alt: assetsConfig["new-hibernia-house"][2].description,
  //   width: 200,
  //   height: 200,
  //   projectId: "new-hibernia-house",
  //   location: "London",
  // },
  {
    title: "Finsbury Square",
    description:
      "For the Finsbury Square office project, we designed, manufactured, and installed a stylish wall-dividing planter, featuring reeded panelling, integrated banquette seating, and a glazed screen partition. This creative solution not only divides the space but enhances its functionality and aesthetic appeal, providing both seating and visual separation. As part of the project, we also installed client-supplied kitchen units, ensuring seamless integration with the overall design of the office space. The result is a modern and inviting environment that maximises utility while maintaining an elegant, cohesive design.",
    src: assetsConfig["finsbury-square"][1].src,
    alt: assetsConfig["finsbury-square"][1].description,
    width: 400,
    height: 600,
    projectId: "finsbury-square",
    location: "London",
  },
  {
    title: "Saffron Hill",
    description:
      "Our Saffron Hill, Farringdon project delivered a comprehensive suite of services, showcasing our expertise in joinery and upholstery. The CMF area was stylishly finished in birch plywood, treated with a white oil stain to achieve a refined, natural look. Our scope included the fabrication and installation of bespoke banquette seating, work pod desks, and new coat cupboards. Additionally, we revitalised existing bookshelves through a meticulous dismantling and respraying process, ensuring they seamlessly integrated with the new design elements. The result was a thoughtfully crafted, functional workspace, with a harmonious balance of form and function, tailored to reflect the aesthetic vision of the top-tier design consultancy while enhancing the overall user experience.",
    src: assetsConfig["saffron-hill"][0].src,
    alt: assetsConfig["saffron-hill"][0].description,
    width: 400,
    height: 600,
    projectId: "saffron-hill",
    location: "Farringdon",
  },
  {
    title: "Capability Green",
    description:
      "For the Capability Green commercial office in Luton, our team carried out extensive upholstery work, including the reupholstery of existing banquette seating and the manufacture of new booths. In addition to the seating solutions, we crafted and installed solid timber slatted wall dividers, adding both functionality and style to the space. The project was completed with the installation of a seamlessly integrated oak veneer door, enhancing the overall aesthetic and providing a warm, natural touch to the office environment.",
    src: assetsConfig["capability-green"][0].src,
    alt: assetsConfig["capability-green"][0].description,
    width: 400,
    height: 600,
    projectId: "capability-green",
    location: "Luton",
  },
  {
    title: "New Street",
    description:
      "This prestigious office project in the heart of Liverpool Street provided us with the opportunity to deliver a range of sophisticated joinery solutions. We crafted a bespoke bar with ample storage, accentuated by rich walnut veneers and fluted solid walnut panels. A pull-down hidden bed was discreetly integrated into what appeared to be a storage wall. Additionally, we designed multiple tea points and sleek print stations to enhance functionality throughout the workspace.One of the standout pieces was a custom director's desk, featuring antique brass trims, a luxurious leather inlay, and LED lighting. We also installed a beautifully detailed wine rack to complement the high-end aesthetics of the office. This project is a testament to our craftsmanship and ability to combine form, function, and elegance.",
    src: assetsConfig["new-street"][2].src,
    alt: assetsConfig["new-street"][2].description,
    width: 400,
    height: 600,
    projectId: "new-street",
    location: "London",
  },
  {
    title: "Woodbury House",
    description:
      "For the Woodbury House project in Mayfair, we crafted and installed several bespoke pieces. These included a modern reception desk with sleek, fluted panelling, creating a sophisticated welcome point for visitors. Additionally, we designed and built a stylish bar in a striking black finish, complete with integrated shelving for glassware and display. To enhance the gallery's aesthetic, we upholstered a curved bench seat using luxurious fabrics that complement the contemporary artwork. The seating provides a soft contrast to the bold, angular lines of the furniture, creating a balanced and inviting atmosphere. This project seamlessly merges art and function within the gallery space.",
    src: assetsConfig["woodbury-house"][0].src,
    alt: assetsConfig["woodbury-house"][0].description,
    width: 400,
    height: 600,
    projectId: "woodbury-house",
    location: "London",
  },
  {
    title: "Alexander Street",
    description:
      "For the residential project at 10 Alexander Street, we delivered bespoke joinery solutions that seamlessly combined style and function. This included the design, manufacture, and installation of a custom media wall with bi-folding doors for discreet entertainment storage. We also crafted shaker-style wardrobes, offering both elegance and ample storage space. Additionally, a tailored desk with integrated shelving was installed, creating a sleek and practical workspace. Each piece was thoughtfully designed to complement the home's character, blending traditional aesthetics with modern practicality. The result is a beautifully coordinated interior, with each joinery item expertly crafted to fit the space perfectly.",
    src: assetsConfig["alexander-street"][0].src,
    alt: assetsConfig["alexander-street"][0].description,
    width: 400,
    height: 600,
    projectId: "alexander-street",
    location: "London",
  },
  {
    title: "Dalling Road",
    description:
      "For the Dalling Road residential project, we crafted and installed bespoke wardrobes with V-groove door fronts, adding a touch of modern elegance to the space. The wardrobes were finished with custom solid timber handles, sprayed for a refined look. In addition to the wardrobes, we provided various other joinery pieces throughout the home to create a cohesive aesthetic. Our attention to detail and use of high-quality materials ensured a stunning finish, enhancing both the functionality and style of the client's home.",
    src: assetsConfig["dalling-road"][0].src,
    alt: assetsConfig["dalling-road"][0].description,
    width: 400,
    height: 600,
    projectId: "dalling-road",
    location: "London",
  },

  {
    title: "Fulton Mews",
    description:
      "On this beautiful Mews property, we delivered a comprehensive bespoke joinery solution. Our team designed, manufactured, and installed custom wardrobes, sleek vanity units, a stylish media wall, and charming bunk beds for the children's room. Additionally, we incorporated a discreet and functional secret door, blending seamlessly with the surrounding storage. Every element was crafted to align with the client's vision of a modern, sophisticated space while maximizing functionality. The result is a harmonious blend of design and craftsmanship, perfect for this elegant London home.",
    src: assetsConfig["fulton-mews"][4].src,
    alt: assetsConfig["fulton-mews"][3].description,
    width: 400,
    height: 600,
    projectId: "fulton-mews",
    location: "London",
  },
  {
    title: "Hype Park Corner",
    description:
      "The Hyde Park Corner residential project involved the manufacture and installation of custom wardrobes with glazed door fronts, delivering a sleek and modern aesthetic. The interior components were finished in oak veneer, adding warmth and texture to the design. Integrated LED lighting illuminated the wardrobes, enhancing both their functionality and visual appeal. These bespoke wardrobes blend elegance and practicality, offering a luxurious storage solution that elevates the overall atmosphere of the space.",
    src: assetsConfig["hyde-park-corner"][0].src,
    alt: assetsConfig["hyde-park-corner"][0].description,
    width: 400,
    height: 600,
    projectId: "hyde-park-corner",
    location: "London",
  },
  {
    title: "Yester Park",
    description:
      "At Yester Park, Kent, we created bespoke storage solutions to elevate the interior design of this residential project. Our work included custom bookshelves and wall-mounted shelving units, ensuring ample space for display and storage. Additionally, we designed and installed innovative under-stair drawer storage to maximize space, as well as fitted wardrobes, blending practicality with aesthetic appeal. Each piece was tailored to the client's needs, adding functional elegance throughout the home. The finished result offers both versatility and a refined, minimalist look.",
    src: assetsConfig["yester-park"][0].src,
    alt: assetsConfig["yester-park"][0].description,
    width: 400,
    height: 600,
    projectId: "yester-park",
    location: "Kent",
  },

  //   {
  //     title: "Pentonville",
  //     src: assetsConfig.pentonville[4].src,
  //     alt: assetsConfig.pentonville[4].description,
  //     projectId: "pentonville",
  //   },
];
