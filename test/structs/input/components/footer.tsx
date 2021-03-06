/* eslint-disable @typescript-eslint/naming-convention */
import htmx from '@chronocide/htmx';

const Footer = () => (
  <footer class="Footer">
    <div class="logos">
      <div class="partners">
        <img
          alt="Art and Humanities Research Council Logo"
          src="./logos/ukri.png"
          width="200"
          height="100"
          loading="lazy"
        />
        <img
          alt="University of Bradford Logo"
          src="./logos/uob.png"
          width="200"
          height="100"
          loading="lazy"
        />
        <img
          alt="University of Wolverhampton Logo"
          src="./logos/uow.png"
          width="200"
          height="100"
          loading="lazy"
        />
      </div>
      <a href="https://continuingbonds.live/" rel="external" title="Continuing Bonds">
        <img
          alt="Continuing Bonds Logo"
          src="./logos/cb.png"
          width="100"
          height="100"
          loading="lazy"
        />
      </a>
    </div>
    <div class="socials">
      <a
        href="https://twitter.com/dying_talk"
        rel="nofollow"
        title="@dying_talk"
        class="link-hover-black link-icon-black"
      >
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
        </svg>
        @dying_talk
      </a>
      <a
        href="https://www.instagram.com/dying2talk2021"
        rel="nofollow"
        title="dying2talk2021"
        class="link-hover-black link-icon-black"
      >
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
        </svg>
        dying2talk2021
      </a>
      <a
        href="mailto:dyingtotalkproject@gmail.com"
        rel="external"
        title="dyingtotalkproject@gmail.com"
        class="link-hover-black link-icon-black"
      >
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
        dyingtotalkproject@gmail.com
      </a>
    </div>
    <div class="source">
      <p class="caption">
        Developed by
        <a
          class="link-underline-black"
          href="https://github.com/Dying-2-Talk"
          rel="nofollow"
          title="Dying-2-Talk"
        >Dying to Talk</a>
      </p>
      <p class="caption">
        This website is open source. See our repository on
        <a
          class="link-underline-black"
          href="https://github.com/Dying-2-Talk/website"
          rel="nofollow"
          title="Dying-2-Talk/website"
        >GitHub</a>
      </p>
    </div>
  </footer>
);

export default Footer;
