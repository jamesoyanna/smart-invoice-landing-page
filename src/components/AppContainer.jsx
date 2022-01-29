import React, { Component } from "react";
import BannerSection from "./Banner/BannerSection";
import Services from "./services/Services";
import AskQuestion from "./askQuestion/askQuestion";
import DownloadSection from "./downloadSection/downloadSection";
import Testimonial from "./testimonial/testimonial";
import Blog from "./blog section/blog";
import Footer from "./footer/footer";

class AppContainer extends Component {
    state = {
        pos: document.documentElement.scrollTop,
        imglight: false,
        navClass: "",
    };
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        } else {
            this.setState({ navClass: "", imglight: false });
        }
    };
    render() {
        return (
          <>

            {/*Importing Banner section */}
            <BannerSection />
            {/*Importing Services section */}
            <Services />
            {/* Importing Ask Question section */}
            <AskQuestion />
            {/* Importing Download section */}
            <DownloadSection />
            {/*Importing Testimonial section */}
            <Testimonial />

            {/* Importing Blog */}
            <Blog />
            {/* Importing Footer */}
            <Footer />
          </>
        );
    }
}

export default AppContainer;
