import Image from "next/image";
import { boardMembers } from "@/data/eboard";

const welcomes = [
  {
    role: "First Vice-President",
    title: "First Vice President’s Welcome",
    message: <>
      <p>Greetings, Sorors!</p>
      <p>It is truly an honor and a privilege to serve as the First Vice President of the Monroe Alumnae Chapter of Delta Sigma Theta Sorority, Inc. for the 2026-2028 Biennium. I am grateful for the opportunity to serve in this capacity and excited about all that we can accomplish together as we continue to honor our legacy, strengthen our sisterhood, and make a meaningful difference in our community.</p>
      <p>In my role, I have the pleasure of working alongside our dedicated Sorors in the areas of Program Planning and Development, Risk Management, and May Week. My commitment is to support our committees, encourage collaboration, and help ensure that our collective efforts are intentional, impactful, and reflective of our shared commitment to excellence and service.</p>
      <p>Above all, I believe that our greatest strength lies in our sisterhood. My commitment is to serve with purpose, encourage collaboration, value the voices of our Sorors, and support opportunities for everyone to contribute their gifts and talents.</p>
      <p>I look forward to all that we will accomplish together as we continue to move our chapter forward through sisterhood, scholarship, service, and social action.</p>
      <p>Thank you for the opportunity to serve. Together, we will continue to make a difference!</p>
    </>,
  },
  {
    role: "Second Vice-President",
    title: "Second Vice President’s Welcome",
    message: <>
      <p>Dear Sorors,</p>
      <p>Sisterhood is more than a word; it is a lifelong commitment to love, support, service, and connection. As members of Delta Sigma Theta Sorority, Incorporated, we proudly dedicate ourselves to serving our communities, but I believe it is equally important that we remember to be of service to one another. After all, our sisterhood is strongest when we extend the same compassion, encouragement, and care to each other that we so freely give to others.</p>
      <p>I want to extend a special invitation to every soror who has been away from Delta, whether for a year, a decade, or even longer. I know what it feels like to be away because I, too, was inactive for more than 15 years.</p>
      <p>My journey back began with a soror who simply extended an invitation. There was no judgment, no questioning where I had been, and no expectation that I explain my absence. Just kindness, encouragement, and a genuine welcome home. That simple act of sisterhood changed the course of my Delta journey.</p>
      <p>Since returning, I have had the privilege of growing and serving in leadership at the local and state levels, chairing a regional committee, and collaborating with national committees on several occasions. None of those experiences would have happened had someone not reminded me that I still belonged.</p>
      <p>And now, I want to extend that same invitation to you.</p>
      <p>Forgot the words to some of our songs? That’s okay; I did too! Haven’t attended a chapter meeting in years? That’s okay too. Life happens. Careers, families, responsibilities, and circumstances sometimes take us in different directions. But time away does not erase the bond we share or the commitment we made.</p>
      <p>You are still our sister. You still belong. And you are welcome here!</p>
      <p>Whether you’re looking to reconnect with old friends, build new relationships, find your place in service, or simply rediscover the joy of sisterhood, there is a place for you in the Monroe Alumnae Chapter.</p>
      <p>I invite you to come home to Delta! Let’s reconnect, renew our bonds, and rediscover the reasons we first answered the call to sisterhood. Together, we can continue serving our communities, promoting scholarship, engaging in social action, and, just as importantly, uplifting and caring for one another.</p>
      <p>My hope is that every soror who joins our chapter feels seen, valued, appreciated, and welcomed, regardless of how long she has been away.</p>
      <p>So, my dear soror, consider this your personal invitation. No judgment. No explanations necessary. Just open arms, genuine sisterhood, and a place where you belong.</p>
      <p>Welcome home, Soror. I can’t wait to see you!</p>
    </>,
  },
];

export function VicePresidentsWelcome() {
  return <section className="container vice-presidents-section" aria-label="Welcomes from our vice presidents">
    {welcomes.map((welcome, index) => {
      const member = boardMembers.find(member => member.role === welcome.role);
      if (!member) return null;
      return <article className="vice-president-welcome" key={member.name} aria-labelledby={`vp-welcome-${index}`}>
        <figure className="president-portrait">
          <Image src={member.image} alt={`${member.name}, ${member.role}`} width={member.width} height={member.height} sizes="(max-width: 700px) 85vw, 320px" />
          <figcaption><strong>{member.name}</strong><span>{member.role}</span></figcaption>
        </figure>
        <div className="president-message">
          <h2 id={`vp-welcome-${index}`}>{welcome.title}</h2>
          {welcome.message}
          <p><em className="president-signature">{member.name}</em></p>
        </div>
      </article>;
    })}
  </section>;
}
