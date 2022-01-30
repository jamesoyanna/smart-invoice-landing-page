import React, { Component } from "react";
import BannerSection from "../components/Banner/BannerSection";
import Services from "../components/services/Services";
import AskQuestion from "../components/Features/Features";
import Footer from "../components/footer/footer";

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
            {/* Importing Footer */}
            <Footer />
          </>
        );
    }
}

export default AppContainer;
