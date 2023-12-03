import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import "./History.css";

const History = () => {
  const [histry, sethistry] = useState({});
  useEffect(() => {
    const fetchHistory = async () => {
      const histry = await axios.get("http://localhost:5000/event");
      sethistry(histry);
    };
    fetchHistory();
  }, []);

  return (
    <div className="history">
      <Navbar />
      <div className="h-container">
        <div className="h1">
          {" "}
          <h1>History & Traditions of the Family</h1>
        </div>
        <div className="first">
          <span>History</span>
          <p>
            <b>Introduction </b>
            <br />
            The history of the Smith family is a tale of resilience, love, and
            the enduring bonds that connect generations. From humble beginnings
            to the present day, the Smiths have carved a unique path through the
            tapestry of time. <br /> <b>Roots and Beginnings</b> <br />
            The story begins in the early 20th century when John and Mary Smith,
            a young couple with dreams of a better life, left their rural
            hometown to seek opportunities in the bustling city. With little
            more than determination and a strong work ethic, they laid the
            foundation for a family that would flourish for generations. <br />
            <b>The Early Years and Expanding Family</b> <br /> John and Mary
            were blessed with four children: Sarah, Robert, Emily, and Michael.
            As the family grew, so did their sense of unity and purpose. John, a
            skilled craftsman, and Mary, a devoted homemaker, instilled in their
            children the values of hard work, compassion, and the importance of
            education. <br />
            <b>Challenges and Triumphs</b> <br /> The Smiths faced their fair
            share of challenges, from economic hardships during the Great
            Depression to the turmoil of war. Yet, with each obstacle, the
            family emerged stronger. The post-war era saw the Smiths building a
            legacy through education, hard work, and a commitment to community.
            <br />
            Family Values <br /> Central to the Smith family narrative are the
            values of integrity, compassion, and unity. These values were passed
            down from one generation to the next, creating a sense of identity
            and belonging that transcended time and distance. <br />{" "}
            <b>Marriages and New Beginnings </b>
            <br /> As the children of John and Mary reached adulthood, they each
            embarked on their own journeys. Sarah, the eldest, married Thomas
            Johnson, a local teacher, and together they raised three children.
            Robert, the second child, pursued a career in medicine and married
            Elizabeth Davis, a fellow physician. Emily, the third child, became
            an artist and married James Turner, a writer, forming a creative
            partnership that would leave a lasting impact. Michael, the
            youngest, followed in his father's footsteps as a skilled craftsman
            and married Margaret White, a businesswoman.
            <br />
            <b>Achievements and Contributions</b> <br /> The Smith family
            continued to expand and diversify. The grandchildren, inspired by
            the values instilled by their grandparents, pursued careers in
            various fields, contributing to society in areas such as medicine,
            education, and the arts. Their collective impact on the community
            reflects the strength that comes from a shared history and common
            purpose. The Present Day Today, the Smith family continues to
            thrive, bound by the enduring spirit of those who came before. From
            family reunions to shared traditions, the Smiths celebrate their
            heritage while looking toward the future with optimism and unity.{" "}
            <br /> Conclusion
            <br />
            The history of the Smith family is a testament to the power of
            resilience, love, and the connections that bind us across time. As
            the family tree continues to grow, so too does the legacy of those
            who laid the groundwork for a journey that spans generations.
          </p>
        </div>
        <div className="first">
          <span>Tradition</span>
          <p>
            <b>Introduction </b>
            <br />
            The Smiths family holds dear a rich tapestry of traditions that have
            been passed down through generations. These rituals, celebrations,
            and customs serve as the foundation of our family identity,
            fostering a sense of unity, continuity, and shared values.
            <br />
            <b>Ancestral Roots</b> <br />
            The traditions of the Smiths family trace back to our ancestors who,
            with foresight and cultural significance, established practices that
            would bind the family together. These roots have grown deep,
            providing nourishment to the branches of our family tree. <br />
            <b>Marriage Customs and Dowry</b> <br />
            Marriage in the Smiths family is a sacred and joyous occasion marked
            by time-honored customs. In the past, marriages were often arranged
            with great consideration for compatibility and shared values. The
            exchange of dowry, a longstanding tradition, symbolized the joining
            of two families. It was a gesture of goodwill and support for the
            newlyweds, reflecting the family's commitment to their well-being.{" "}
            <br />
            Over the years, while the essence of arranged marriages has been
            preserved, there has been a shift towards more contemporary
            practices, allowing individuals greater autonomy in choosing their
            life partners. However, the spirit of familial support and
            celebration remains a constant. <br />
           <b>Funerals and Mourning Practices </b> <br />
            In times of loss, the Smiths family comes together to mourn and
            honor the departed with respect and dignity. Funerals are conducted
            with solemn rituals, providing a space for reflection and shared
            grief. Traditionally, mourning periods were observed, during which
            the family refrained from certain activities as a sign of respect
            for the deceased. <br />
            The support network extends beyond the funeral, with the family
            rallying around those who have lost a loved one. This tradition of
            communal support during times of grief reinforces the bond between
            family members and demonstrates the enduring strength of our
            collective spirit. <br />
            <b>Annual Gatherings</b> <br />
            A cornerstone of our family tradition is the annual reunion, where
            generations come together to celebrate kinship. This gathering
            serves not only as a time for shared laughter, stories, and joy but
            also as an opportunity for the younger members to learn about their
            heritage from the elders. <br />
            Passing Down Wisdom <br />
            A key aspect of our family tradition is the passing down of wisdom
            from one generation to the next. Elders share stories of resilience,
            success, and lessons learned. This oral history ensures that the
            values that have sustained our family are not just remembered but
            actively lived. <br />
            Conclusion <br />
            In conclusion, the traditions of the Smiths family are a testament
            to the enduring power of shared values, unity, and the importance of
            passing down cultural heritage. As we continue to grow and evolve,
            these traditions serve as a guiding light, anchoring us in our roots
            and inspiring future generations to carry the flame forward.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
