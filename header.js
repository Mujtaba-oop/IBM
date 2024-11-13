class HeaderElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div id="page" class="site">
          <header id="masthead" class="site-header" role="banner">
            <div class="ak-container">
              <div class="social_htext_wrap">
                <span class="text_wrap">Nation Need Professionals with Knowledge, Skill, Innovation & Commitment</span>
                <span class="fa_wrap">
                  <i class="fa-brands fa-facebook"></i>
                </span>
              </div>
            </div>
            <div class="logo_info_wrap">
              <div class="header-logo-container">
                <a href="https://ibm.uet.edu.pk/" class="custom-logo-link">
                  <img width="294" height="113" src="./images/cropped-IBM_UET.jpg" class="custom-logo" alt="IB&M LHR" decoding="async"
                       srcset="https://ibm.uet.edu.pk/wp-content/uploads/2017/02/cropped-IBM_UET.jpg 294w, https://ibm.uet.edu.pk/wp-content/uploads/2017/02/cropped-IBM_UET-160x61.jpg 160w"
                       sizes="(max-width: 294px) 100vw, 200px">
                </a>
              </div>
              <div class="header_info_wrap">
                <div class="i-phone">
                  <img src="/images/phone.png" alt="Icon" width="29px">
                </div>
                <div class="title_phone">
                  <span class="phone_title">Call Support</span>
                  <span class="phone">+92-42-9925-0403</span>
                </div>
              </div>
              <div class="header_info_wrap">
                <div class="i-location">
                  <img src="/images/location.png" alt="Icon" width="29px">
                </div>
                <div class="title_location_wrap">
                  <span class="title_location">Location</span>
                  <span class="location">IB&M UET Lahore</span>
                </div>
              </div>
            </div>
          </header>
        </div>
      `;
    }
  }
  
  // Register the custom element
  customElements.define('header-element', HeaderElement);
  