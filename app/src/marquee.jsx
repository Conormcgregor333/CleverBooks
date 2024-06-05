export default function Marquee() {
  let compArray = [
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
  ];
  return (
    <section id="marquee">
      <div className="marquee-container">
        <div className="pic-container">
          {compArray.map((index) => {
            return (
              <div className="pic">
                <img className="marquee-img" src={index} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
