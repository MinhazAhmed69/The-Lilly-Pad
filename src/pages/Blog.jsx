import React, { useState } from 'react';
import image2001 from '../assets/2001.jpg';
import image2024 from '../assets/2024.jpg';
import image1999 from '../assets/1999.jpg';
import imageVeg from '../assets/veg.jpg';
import minhazImage from '../assets/minhaz.jpg';
import arvindImage from '../assets/arvind.jpg';
import saketImage from '../assets/saket.jpg';
import kushalImage from '../assets/kushal.jpg';
import vivekImage from '../assets/vivek.jpg';
import imageTeam from '../assets/team.jpg';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('latest');

  // Blog posts data
  const latestPosts = [
    { title: 'Opening of The Lily Pad', date: '1998', image: image1999, content: 'The Lily Pad opened in 1998 with a goal to bring the best of fine dining to the local community.', fullContent: 'In 1998, The Lily Pad opened its doors for the first time. With an emphasis on high-quality, locally sourced ingredients and a commitment to exceptional service, it quickly became a staple of fine dining in the community. Over the years, we’ve built strong relationships with local suppliers and crafted a unique menu that evolves with the seasons. The opening was a landmark moment in our journey.' },
    { title: 'First International Branch Opened', date: '2001', image: image2001, content: 'In 2001, we expanded globally, bringing our flavors to new regions with great success.', fullContent: 'In 2001, after years of successful growth, we made the decision to open our first international location. The new branch brought our signature dishes and unique culinary experience to a global audience. The opening was met with great excitement, and the new location was an immediate success, setting the stage for more international expansions in the years to follow.' },
    { title: 'New Vegan Menu Launch', date: '2023', image: imageVeg, content: 'In 2023, we launched our new vegan menu to cater to the growing demand for plant-based options.', fullContent: 'In 2023, we responded to the increasing demand for plant-based meals by launching a new vegan menu. This menu features a variety of delicious, innovative dishes designed to cater to vegan diets without compromising on flavor or quality. The launch was met with enthusiastic feedback from our community, and it has become one of our most popular offerings.' },
  ];

  const popularPosts = [
    { title: 'Our Journey', date: '2024', image: image2024, content: 'Since 1984, we have been dedicated to serving the best flavors and unforgettable experiences.', fullContent: 'Our journey began in 1984 with a single goal: to serve the finest flavors and create unforgettable dining experiences. Over the years, we’ve expanded and evolved, but our core values remain the same—quality, passion, and a commitment to excellence. We’ve seen many changes in the industry, but our focus on delivering exceptional experiences has remained constant.' },
    { title: 'Michelin Star Achievement', date: '2007', image: image2001, content: 'In 2007, we were awarded our first Michelin star, a testament to our dedication to quality and excellence.', fullContent: 'In 2007, we achieved one of the highest honors in the culinary world when we were awarded our first Michelin star. This recognition validated the hard work, creativity, and dedication of our entire team. We continued to innovate and strive for excellence, and this accolade served as a constant reminder of our commitment to providing the best possible dining experience for our guests.' },
  ];

  const teamPost = {
    title: 'Meet Our Team',
    date: '2024',
    image: imageTeam, // Placeholder image for the team post
    content: 'Our team is the backbone of The Lily Pad. Together, we strive to bring you the best dining experience, combining passion, creativity, and excellence in every dish and interaction.',
    fullContent: (
      <>
        <div className="team-member">
          <img src={minhazImage} alt="Minhaz Ahmed" className="w-32 h-32 object-cover rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">Minhaz Ahmed</h3>
          <p className="text-sm text-gray-500">CEO & Founder</p>
          <p className="mt-2 text-gray-700">Minhaz is the visionary behind The Lily Pad. As CEO and Founder, he has led the restaurant to international acclaim, combining his 15 years of culinary expertise with a passion for creating unforgettable dining experiences.</p>
        </div>
        <div className="team-member">
          <img src={arvindImage} alt="Arvind" className="w-32 h-32 object-cover rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">Arvind</h3>
          <p className="text-sm text-gray-500">Pastry Chef</p>
          <p className="mt-2 text-gray-700">Arvind’s expertise in crafting delicate pastries and desserts ensures every bite is a sweet masterpiece, adding a touch of elegance to every meal.</p>
        </div>
        <div className="team-member">
          <img src={saketImage} alt="Saket" className="w-32 h-32 object-cover rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">Saket</h3>
          <p className="text-sm text-gray-500">Sous Chef</p>
          <p className="mt-2 text-gray-700">Saket brings his innovative approach to fusion cuisine, blending global flavors with local ingredients, creating a truly unique dining experience.</p>
        </div>
        <div className="team-member">
          <img src={kushalImage} alt="Kushal" className="w-32 h-32 object-cover rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">Kushal</h3>
          <p className="text-sm text-gray-500">Sommelier</p>
          <p className="mt-2 text-gray-700">Kushal’s expertise in wine pairings elevates every dish, ensuring a perfect balance of flavors with every glass served.</p>
        </div>
        <div className="team-member">
          <img src={vivekImage} alt="Vivek" className="w-32 h-32 object-cover rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">Vivek</h3>
          <p className="text-sm text-gray-500">Restaurant Manager</p>
          <p className="mt-2 text-gray-700">Vivek’s exceptional management skills ensure that every guest has a seamless and memorable dining experience from the moment they walk in the door.</p>
        </div>
      </>
    ),
  };

  const allPosts = [...latestPosts, ...popularPosts, teamPost];

  // State to track the expanded post
  const [expandedPost, setExpandedPost] = useState(null);

  // Function to toggle the expansion of a post
  const toggleExpand = (postTitle) => {
    if (expandedPost === postTitle) {
      setExpandedPost(null); // Collapse if already expanded
    } else {
      setExpandedPost(postTitle); // Expand the clicked post
    }
  };

  // Function to get the correct tab content
  const getTabContent = () => {
    const posts = activeTab === 'latest' ? latestPosts : activeTab === 'popular' ? popularPosts : allPosts;
    return posts.map(post => (
      <div className="card w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-6" key={post.title}>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          <p className="mt-4 text-gray-700">{post.content}</p>

          {/* Show more or less content */}
          {expandedPost === post.title && (
            <div className="mt-4 text-gray-700">{post.fullContent}</div>
          )}

          <button
            className="mt-4 text-blue-600 hover:underline"
            onClick={() => toggleExpand(post.title)}
          >
            {expandedPost === post.title ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Blog</h1>

      {/* Tab Navigation */}
      <div role="tablist" className="tabs tabs-bordered w-full max-w-3xl mb-8">
        <a
          role="tab"
          className={`tab ${activeTab === 'latest' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('latest')}
        >
          Latest Posts
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'popular' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('popular')}
        >
          Popular Posts
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'all' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('all')}
        >
          All Posts
        </a>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-8">
        {getTabContent()}
      </div>
    </div>
  );
};

export default Blog;