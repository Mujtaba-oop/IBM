class NavigationElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav id="site-navigation" class="main-navigation center top" role="navigation">
          <div class="aki-container">
            <div class="menu-bar">
              <i class="fa-solid fa-bars fa-bars fa-2x iconi"></i>
            </div>
            <div class="menu-menu-1-container mmenu-wrapper">
              <ul id="primary-menu" class="menu nav-menu sf-js-enabled sf-arrows" aria-expanded="false">
                <li id="menu-item-2707" class="menu-item">
                  <a href="index.html" aria-current="page">Home</a>
                </li>
                <li id="menu-item-3086" class="menu-item menu-item-has-children">
                  <a href="#">About Us<i class="fa-solid fa-caret-down"></i></a>
                  <ul class="sub-menu">
                    <li id="menu-item-2714"><a href="director.html">Director’s Message</a></li>
                    <li id="menu-item-2710"><a href="vision.html">Vision and Mission</a></li>
                  </ul>
                </li>
                <li id="menu-item-2721" class="menu-item menu-item-has-children">
                  <a href="#">ACADEMIC <i class="fa-solid fa-caret-down"></i></a>
                  <ul class="sub-menu">
                    <li id="menu-item-3089" class="menu-item menu-item-has-children">
                      <a href="./html/program.html">Program <i class="fa-solid fa-caret-down"></i></a>
                      <ul class="sub-menu">
                        <li><a href="./html/bba.html">BBA</a></li>
                        <li><a href="./html/bbit.html">BBIT</a></li>
                        <li><a href="./html/mba30.html">MBA (30 Credit Hours)</a></li>
                        <li><a href="./html/mba60.html">MBA (60 Credit Hours)</a></li>
                        <li><a href="./html/emba.html">Executive MBA</a></li>
                        <li><a href="./html/ms-management.html">MS Management</a></li>
                        <li><a href="./html/ph-d-business-management.html">Ph.D</a></li>
                        <li><a href="./documents/Program-Commencement-Dates.pdf">Program Commencement Date</a></li>
                        <li><a href="./documents/Program-NOC.pdf">Program NOC</a></li>
                        <li><a href="./documents/Publications.pdf">Research Publications</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-2733" class="menu-item menu-item-has-children">
                      <a href="#">STAFF <i class="fa-solid fa-caret-down"></i></a>
                      <ul class="sub-menu">
                        <li><a href="./html/faculty-list.html">Academic Staff</a></li>
                        <li><a href="./html/staff.html">NON-ACADEMIC STAFF</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-2738" class="menu-item menu-item-has-children">
                  <a href="#">ADMISSION<i class="fa-solid fa-caret-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="https:/admission.uet.edu.pk/Modules/EntryTest/Default.aspx">Apply Online</a></li>
                    <li><a href="https:/ibm.uet.edu.pk/wp-content/uploads/2024/07/Instructions.pdf">TEST AND INTERVIEW GUIDE</a></li>
                    <li><a href="fee.html">Fee Structure</a></li>
                    <li><a href="./html/index.html">CAMPUS FACILITIES</a></li>
                  </ul>
                </li>
                <li id="menu-item-2744" class="menu-item menu-item-has-children">
                  <a href="#">STUDENT<i class="fa-solid fa-caret-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="https:/forms.office.com/Pages/ResponsePage.aspx?id=bAnfdXKL5Eibkcv3nYfuOoktSzs_uYVLmqHqpso3ZyBUQjJUWDFEVjYzTFZWMTZHMEVHNlFSVFgwUS4u">ALUMNI</a></li>
                    <li><a href="https://admission.uet.edu.pk/Modules/EntryTest/Default.aspx">FUTURE STUDENT</a></li>
                    <li><a href="https:/lms.uet.edu.pk/">CURRENT STUDENT</a></li>
                    <li><a href="https:/cco.uet.edu.pk/">CAREER</a></li>
                  </ul>
                </li>
                <li id="menu-item-2751" class="menu-item menu-item-has-children">
                  <a href="#">DOWNLOADS<i class="fa-solid fa-caret-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="table.html">Time Table</a></li>
                    <li><a href="https:/ibm.uet.edu.pk/wp-content/uploads/2023/08/Percribed-Performa-for-Fee-Concession-1.pdf">Scholarship Application Form</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="notice.html">Notice Board</a></li>
                <li class="menu-item menu-item-has-children">
                  <a href="#">Research <i class="fa-solid fa-caret-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="./html/research-publication.html">Research Publication</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define('navigation-element', NavigationElement);
  