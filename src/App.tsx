import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Card,
  CardHeader,
  CardBody,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Skeleton,
} from "@nextui-org/react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  const [activeContent, setActiveContent] = useState("Inicio");

  const menuItems = [
    "Inicio",
    "Acerca de mí",
    "Proyectos",
    "Habilidades",
    "Contacto",
    "Contrátame",
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleMenuItemClick = (item: string) => {
    setActiveContent(item); // Cambio de contenido aquí
    setMenuOpen(false); // Cerrar el menú aquí
  };

  return (
    <>
      <Navbar disableAnimation isBordered isMenuOpen={menuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle onClick={() => setMenuOpen(!menuOpen)} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            {/*<AcmeLogo />*/}
            <p className="font-bold text-inherit">ELMER</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            {/*<AcmeLogo />*/}
            <p className="font-bold text-inherit">ELMER</p>
          </NavbarBrand>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              underline="hover"
              onClick={() => setActiveContent("Inicio")}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              underline="hover"
              onClick={() => setActiveContent("Acerca de mí")}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              underline="hover"
              onClick={() => setActiveContent("Proyectos")}
            >
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              underline="hover"
              onClick={() => setActiveContent("Contacto")}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Button isIconOnly variant="light" aria-label="Like">
              <MoonIcon className="h-7 w-7 text-gray-400" />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              See resume
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={index === menuItems.length - 1 ? "danger" : "foreground"}
                href="#"
                size="lg"
                onClick={() => handleMenuItemClick(item)} // Cambio de contenido aquí
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <div>
        {activeContent === "Inicio" && <div>Contenido de Inicio</div>}
        {activeContent === "Acerca de mí" && (
          <div>Contenido de Acerca de mí</div>
        )}
        {activeContent === "Proyectos" && (
          <div>
            <h2 className="font-bold text-center text-4xl mt-5">
              Mis Proyectos
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto mt-5">
              <Card className="w-full space-y-5 p-5" radius="lg">
                <div className="space-y-3">
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </div>

                <Skeleton className="rounded-lg w-full h-full">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
              </Card>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-row items-center justify-between">
                  <div>
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                  </div>
                  <Button
                    color="secondary"
                    href="#"
                    variant="shadow"
                    onPress={onOpen}
                  >
                    más info
                  </Button>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-row items-center justify-between">
                  <div>
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                  </div>
                  <Button
                    color="secondary"
                    href="#"
                    variant="shadow"
                    onPress={onOpen}
                  >
                    más info
                  </Button>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-row items-center justify-between">
                  <div>
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                  </div>
                  <Button
                    color="secondary"
                    href="#"
                    variant="shadow"
                    onPress={onOpen}
                  >
                    más info
                  </Button>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-row items-center justify-between">
                  <div>
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                  </div>
                  <Button
                    color="secondary"
                    href="#"
                    variant="shadow"
                    onPress={onOpen}
                  >
                    más info
                  </Button>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        )}
        {activeContent === "Habilidades" && <div>Contenido de Habilidades</div>}
        {activeContent === "Contacto" && (
          <>
            <div>
              <h2 className="font-bold text-center text-4xl mt-5">Contacto</h2>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5 max-w-7xl mx-auto">
                <Input type="email" label="Nombre" />
                <Input type="email" label="Email" />
                <Input type="email" label="Asunto" />
              </div>
            </div>
          </>
        )}
        {activeContent === "Contrátame" && <div>Contenido de Contrátame</div>}
      </div>

      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Ver código
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Visitar proyecto
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </>
  );
}

export default App;
