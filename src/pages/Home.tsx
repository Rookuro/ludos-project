import Header from "../components/common/header/Header";
import Discover from "../components/projects/home/discover/Discover";
import HeadHome from "../components/projects/home/headhome/HeadHome";

export default function Home() {
    return (
    <>
        <Header />
        <HeadHome />
        <Discover />
    </>
    );
}