export interface Props {
    email: string;
    emailText: string;
    linkedin: string;
    dribbble: string;
    instagram: string;
  }
  
  export default function Header({
    email,
    emailText,
    linkedin,
    dribbble,
    instagram,
  }: Props) {
    const socialMedia = [
      { name: "Linkedin", href: "/" },
      { name: "Dribbble", href: "/" },
      { name: "Instagram", href: "/" },
    ];
  
    return (
      <section>
        <header>
          <div class="w-full flex leading-6 bg-black text-sm text-gray-700 py-6 px-12">
            <div class="flex flex-1 ml-12">
              <a href={`mailto:${email}`} class="flex">
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z">
                    </path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </div>
  
                <div>
                  {emailText}
                </div>
              </a>
            </div>
            <div class="flex mr-12">
              <a href={linkedin} target="_blank">
                <div class="">
                  <p>Linkedin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/</p>
                </div>
              </a>
  
              <a href={dribbble} target="_blank">
                <div class="">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dribbble&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/
                  </p>
                </div>
              </a>
  
              <a href={instagram} target="_blank">
                <div>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram</p>
                </div>
              </a>
            </div>
          </div>
          <div class="flex border-b border-gray-700 mx-24"></div>
        </header>
      </section>
    );
  }
  