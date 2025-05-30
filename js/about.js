document.addEventListener("DOMContentLoaded", function () {
  const funFactsBtn = document.getElementById("show-funfacts-btn");
  const certBtn = document.getElementById("show-certifications-btn");
  const modal = document.getElementById("about-modal");
  const modalBody = document.getElementById("about-modal-body");
  const modalClose = document.getElementById("about-modal-close");

  if (funFactsBtn && certBtn && modal && modalBody && modalClose) {
    funFactsBtn.addEventListener("click", function () {
      modalBody.innerHTML = `
        <h3>Personal Fun Facts</h3>
        <ul class="about-list">
            <li>I like going to the gym</li>
            <li>I enjoy coding and building websites</li>
            <li>I love running outdoors</li>
            <li>I'm a fan of watching movies, especially thrillers</li>
            <li>I play video games in my free time</li>
            <li>I have a passion for bikes and cars</li>
            <li>I enjoy trying new foods and cuisines</li>
            <li>I like traveling and exploring new places</li>
            <li>I listen to music while working</li>
            <li>I enjoy learning new tech tools and frameworks</li>
        </ul>
      `;
      modal.style.display = "block";
    });

    certBtn.addEventListener("click", function () {
      modalBody.innerHTML = `
        <h3>Certifications</h3>
        <div class="cert-list">
          <div class="cert-item">
            <img src="img/certifications/cisco.png" alt="Cisco Networking Academy logo" class="cert-logo" />
            <div>
              <strong>CCNA: Switching, Routing, and Wireless Essentials</strong><br>
              Cisco Networking Academy<br>
              Issued Mar 2025<br>
              <a class="cert-link" href="https://www.credly.com/badges/d8e7db3c-3f60-417d-a78a-b0f6e977d864/linked_in_profile" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/aws.png" alt="AWS logo" class="cert-logo" />
            <div>
              <strong>AWS Fundamentals</strong><br>
              Amazon Web Services (AWS)<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.coursera.org/account/accomplishments/specialization/B8RSQB52DKQP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/adobe.png" alt="Adobe logo" class="cert-logo" />
            <div>
              <strong>Adobe Graphic Designer</strong><br>
              Adobe<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.coursera.org/account/accomplishments/specialization/QW91B5G7EYU2" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/hackerrank.png" alt="HackerRank logo" class="cert-logo" />
            <div>
              <strong>CSS (Basic)</strong><br>
              HackerRank<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.hackerrank.com/certificates/1bb29356d0a2" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/cisco.png" alt="Cisco Networking Academy logo" class="cert-logo" />
            <div>
              <strong>Cisco Certified Support Technician Networking</strong><br>
              Cisco Networking Academy<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.credly.com/badges/f3fca5d4-c85d-4b7a-ba61-10860a931f22/public_url" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/ibm.png" alt="IBM logo" class="cert-logo" />
            <div>
              <strong>Data Science Foundations - Level 2 (V2)</strong><br>
              IBM<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.credly.com/badges/2ea0545d-b918-467b-9007-c9805ff46a22/linked_in_profile" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/ibm.png" alt="IBM logo" class="cert-logo" />
            <div>
              <strong>Data Science Methodologies</strong><br>
              IBM<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.credly.com/badges/3311e30a-6a0c-4863-9e81-f215d61e9f27/linked_in_profile" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/codecademy.png" alt="Codecademy logo" class="cert-logo" />
            <div>
              <strong>Full-Stack Engineer Career Path</strong><br>
              Codecademy<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.codecademy.com/profiles/css1412494123/certificates/ffd0f42cce1a44e9a0108b365047a0a6" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/google.png" alt="Google logo" class="cert-logo" />
            <div>
              <strong>Google UX Design</strong><br>
              Google<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.coursera.org/account/accomplishments/specialization/EPMIJRA2960W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/canva.png" alt="Canva logo" class="cert-logo" />
            <div>
              <strong>Graphic Design Essentials</strong><br>
              Canva<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.canva.com/design-school/certification-award/455520b3-f87e-482d-a470-3035d609e4ab" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/certiport.png" alt="Certiport logo" class="cert-logo" />
            <div>
              <strong>IT Specialist - Python</strong><br>
              Certiport - A Pearson VUE Business<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.credly.com/badges/fcb18c09-0bef-4662-9c63-8b6493b98f9e/linked_in_profile" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/freeCodeCamp.png" alt="freeCodeCamp logo" class="cert-logo" />
            <div>
              <strong>JavaScript Algorithms and Data Structures</strong><br>
              freeCodeCamp<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.freecodecamp.org/certification/fcc7b4e8976-3e02-4142-9b6d-6ad9c9d66a17/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/codecademy.png" alt="Codecademy logo" class="cert-logo" />
            <div>
              <strong>Learn JavaScript Course</strong><br>
              Codecademy<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://www.codecademy.com/profiles/css1412494123/certificates/705dcb15de0da4dd9d9fc4f3274b430e" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/ibm.png" alt="IBM logo" class="cert-logo" />
            <div>
              <strong>Python 101 for Data Science</strong><br>
              IBM<br>
              Issued Feb 2025<br>
              <a class="cert-link" href="https://courses.cognitiveclass.ai/certificates/27589ca69156415587a72161ac68ea08" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/cisco.png" alt="Cisco Networking Academy logo" class="cert-logo" />
            <div>
              <strong>CCNA: Introduction to Networks</strong><br>
              Cisco Networking Academy<br>
              Issued Jan 2025<br>
              <a class="cert-link" href="https://www.credly.com/badges/12f3a4ec-d1a8-4e93-b939-e9a0c9ed9bd0/public_url" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/certiport.png" alt="Certiport logo" class="cert-logo" />
            <div>
              <strong>IT Specialist - Databases</strong><br>
              Certiport - A Pearson VUE Business<br>
              Issued Nov 2024<br>
              <a class="cert-link" href="https://www.credly.com/badges/b5c85a7d-8f29-4ef8-90e0-f3857953dc52/public_url" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/ibm.png" alt="IBM logo" class="cert-logo" />
            <div>
              <strong>Data Science Foundations - Level 1</strong><br>
              IBM<br>
              Issued Jun 2023<br>
              <a class="cert-link" href="https://www.credly.com/badges/c812f270-0bc1-4658-9e5e-68a675f3ba9b/public_url" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
          <div class="cert-item">
            <img src="img/certifications/freeCodeCamp.png" alt="freeCodeCamp logo" class="cert-logo" />
            <div>
              <strong>Responsive Web Design</strong><br>
              freeCodeCamp<br>
              Issued Jan 2022<br>
              <a class="cert-link" href="https://www.freecodecamp.org/certification/fcc7b4e8976-3e02-4142-9b6d-6ad9c9d66a17/responsive-web-design" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
          </div>
        </div>
      `;
      modal.style.display = "block";
    });

    modalClose.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
