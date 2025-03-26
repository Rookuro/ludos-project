import Header from "../components/common/header/Header";
import Discover from "../components/projects/home/discover/Discover";
import Feature from "../components/projects/home/feature/Feature";
import HeadHome from "../components/projects/home/headhome/HeadHome";
import PresentationVideo from "../components/projects/home/presentationvideo/PresentationVideo";

export default function Home() {
    return (
    <>
        <Header />
        <HeadHome />
        <Discover />
        <PresentationVideo />
        <Feature />
    </>
    );
}