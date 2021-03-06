/* eslint-disable @typescript-eslint/naming-convention */
import htmx from '@chronocide/htmx';

const Header = () => (
  <header class="Navigation">
    <nav>
      <a class="logo" href="./index.html" title="Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 668 458"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          stroke="#000"
          xmlns:v="https://vecta.io/nano"
        >
          <g stroke-width="8">
            <path d="M100.924 263.4L78.315 135.702 483.163 11.656l148.602 33.312 31.321 126.7-116.745 97.953 75.533 14.738 39.494 27.011-25.493 99.898-30.339 24.22-82.415 10.419-464.117-41.158-46.186-115.408 88.106-25.941z" />
            <path d="M13.789 290.2l511.738 39.2 93.488-4.093 42.426-13.45" />
            <path d="M546.085 270.3l-2.3 57.3m77.8-42.3l-10.4 40.2m-85.6 4.7l-2.4 115.4m95.6-119.6l-12.8 108.2M101.301 264.65l.9 32.3m-.407-33.15l443.983 6" />
            <path d="M472.776 69l107.095 19.926 18.416 71.932-91.682 66.353L158.335 230l-10.009-70.139L472.776 69" />
            <path d="M546.377 269.35l-40-42.15m156.436-55.9l-65.15-10.9" />
            <path d="M631.154,45.274L579.659,89.203" transform="matrix(.993855 .00514 .00514 .9957 3.55488 -2.97348)" />
            <path d="M483.468 12l-10.65 57m-323.814 90.8l-69.75-23.05m78.35 93.45l-56.4 33.05" />
          </g>
        </svg>
        <p>
          Dying
          <br />
          to Talk
        </p>
      </a>
      <button>
        Menu
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </button>
      <ul>
        <li>
          <a class="link-hover-black" href="./about.html" title="About">About</a>
        </li>
        <li>
          <a class="link-hover-black" href="./showcase.html" title="Showcase">Showcase</a>
        </li>
        <li>
          <a class="link-hover-black active" href="./resources.html" title="Resources">Resources</a>
        </li>
        <li>
          <a class="link-hover-black" href="./contact.html" title="Contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
