import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "treact/helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "treact/components/hero/TwoColumnWithVideo.js";
// import Hero from "treact/components/hero/TwoColumnWithInput.js";
// import Hero from "treact/components/hero/SecondPage.js";
// import Hero from "treact/components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "treact/components/hero/FullWidthWithImage.js";
// import Hero from "treact/components/hero/BackgroundAsImage.js";
// import Hero from "treact/components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "treact/components/features/ThreeColSimple.js";
// import Features from "treact/components/features/ThreeColWithSideImage.js";
// import Features from "treact/components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "treact/components/features/VerticalWithAlternateImageAndText.js";
// import Features from "treact/components/features/DashedBorderSixFeatures";
// import MainFeature from "treact/components/features/TwoColWithButton.js";
// import MainFeature from "treact/components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "treact/components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "treact/components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "treact/components/features/TwoColWithSteps.js";
// import FeatureStats from "treact/components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "treact/components/pricing/ThreePlans.js";
// import Pricing from "treact/components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "treact/components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "treact/components/cards/ThreeColSlider.js";
// import TrendingCard from "treact/components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "treact/components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "treact/components/cards/TabCardGrid.js";

// import Blog from "treact/components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "treact/components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "treact/components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "treact/components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "treact/components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "treact/components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "treact/components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "treact/components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "treact/components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "treact/components/faqs/SimpleWithSideImage.js";
// import FAQ from "treact/components/faqs/SingleCol.js";
// import FAQ from "treact/components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "treact/components/forms/SimpleContactUs.js";
// import ContactUsForm from "treact/components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "treact/components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "treact/components/cta/GetStarted.js";
// import GetStarted from "treact/components/cta/GetStartedLight.js";
// import DownloadApp from "treact/components/cta/DownloadApp.js";

// import Footer from "treact/components/footers/SimpleFiveColumn.js";
// import Footer from "treact/components/footers/FiveColumnWithInputForm.js";
// import Footer from "treact/components/footers/FiveColumnWithBackground.js";
// import Footer from "treact/components/footers/FiveColumnDark.js";
// import Footer from "treact/components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "treact/demos/EventLandingPage.js";
// import HotelTravelLandingPage from "treact/demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "treact/demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "treact/demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "treact/demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "treact/demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "treact/demos/HostingCloudLandingPage.js";

/* Inner Pages */
// import LoginPage from "treact/pages/Login.js";
// import SignupPage from "treact/pages/Signup.js";
// import PricingPage from "treact/pages/Pricing.js";
// import AboutUsPage from "treact/pages/AboutUs.js";
// import ContactUsPage from "treact/pages/ContactUs.js";
// import BlogIndexPage from "treact/pages/BlogIndex.js";
// import TermsOfServicePage from "treact/pages/TermsOfService.js";
// import PrivacyPolicyPage from "treact/pages/PrivacyPolicy.js";

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/">
          // <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
