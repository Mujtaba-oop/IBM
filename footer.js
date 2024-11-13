class FooterElement extends HTMLElement {
    constructor() {
        super();
        
        // Attach a shadow root to the element
        const shadow = this.attachShadow({ mode: 'open' });

        // Define the HTML structure
        shadow.innerHTML = `
            <style>
                /* Your footer CSS styles here */
                #colophon {  
                    background-color: #2c2c2c;
                    color: white;
                    padding: 20px;
                }
                .footer_area {  
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .footer_area_one,
                .footer_area_two,
                .footer_area_three {  
                    flex: 1;
                    margin: 10px;
                    min-width: 250px;
                }
                .footer_area p {  
                    font-size: 1.5em;
                    margin-bottom: 15px;
                }
                .wp-block-table {  
                    width: 100%;
                    border-collapse: collapse;
                }
                table {  
                    margin: 10px 0;
                }
                td {  
                    padding: 8px;
                    border: 1px solid white;
                }
                footer iframe {  
                    width: 100%;
                    height: 300px;
                    border: none;
                    margin-top: 20px;
                }
                a {  
                    color: white;
                    text-decoration: underline;
                    transition: color 0.3s ease;
                }
                a:hover {  
                    color: #f39c12;
                }
                @media (max-width: 768px) {  
                    .footer_area {  
                        flex-direction: column;
                    }
                    .footer_area_one, .footer_area_two, .footer_area_three {  
                        min-width: 100%;
                    }
                }
            </style>

            <footer id="colophon" class="site-footer" role="contentinfo">
                <div class="ak-container">
                    <div class="footer_area clearfix">
                        <div class="footer_area_one">
                            <section class="widget widget_block widget_text">
                                <p><strong>Contact Us</strong></p>
                            </section>
                            <section class="widget widget_block">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Office #</strong> +92-42-9902-9494</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Mobile #</strong> +92 304 4937060</td>
                                        </tr>
                                        <tr>
                                            <td>Institute of Business &amp; Management, University of Engineering &amp; Technology, GT Road, Lahore, Pakistan.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                        <div class="footer_area_two">
                            <section class="widget widget_block widget_text">
                                <p><strong>Downloads</strong></p>
                            </section>
                            <section class="widget widget_block">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><a href="./html/time-table.html">Time Tables</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="./documents/Percribed-Performa-for-Fee-Concession-1.pdf">Scholarship Application Form</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="./html/fee-structure.html">Fee Structure</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                        <div class="footer_area_three">
                            <section class="widget widget_block widget_text"></section>
                            <section class="widget widget_block">
                                <iframe
                                    loading="lazy"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13596.121076627815!2d74.353792!3d31.5782178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33643ef682136caa!2sIBM-UET!5e0!3m2!1sen!2s!4v1560422525655!5m2!1sen!2s"
                                    width="600"
                                    height="200"
                                    frameborder="0"
                                    allowfullscreen
                                ></iframe>
                            </section>
                        </div>
                    </div>
                    <div class="site-info"></div>
                </div>
            </footer>
        `;
    }
}

// Define the custom element
customElements.define('footer-element', FooterElement);
