import SEO from '@/components/SEO';
import seoData from '@/data/seoData';

const PortfolioPage = () => {
  const { title, description, url, image, keywords } = seoData.portfolio;

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={image}
        keywords={keywords}
      />
      <h1>Freelance Portfolio</h1>
      <p>Check out some of the projects I have worked on as a freelance MERN stack developer. From web applications to custom solutions, I bring your ideas to life.</p>
      <div>
        {/* Showcase your work here */}
      </div>
    </>
  );
};

export default PortfolioPage;
