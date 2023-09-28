import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center bg-gradient-to-r from-purple-400 to-purple-800 text-white p-4">
    <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300">Research Dao</Link>
    <div className="flex space-x-4">
      <span>Research Marketplace</span>
      <Link to="/upload" className="bg-white text-blue-600 px-3 py-1 rounded">Upload Research</Link>
    </div>
  </nav>
);

const SearchAndFilter = ({ setFilter }) => (
  <div className="flex justify-between items-center p-4">
    <input type="text" placeholder="Search..." className="p-2 rounded border flex-grow mr-4"/>
    <select className="p-2 rounded border bg-white" onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="public">Public</option>
      <option value="private">Private</option>
    </select>
  </div>
);

const ResearchGrid = ({ filter }) => {
const papers = [
    {
      id: 1,
      owner: "0x1234...abcd",
      publicationName: 'Public Paper 1',
      contentURI: "https://example.com/researchA",
      isPublic: true,
      price: 50,
      publishStatus: true,
      totalVotes: 10,
      votes: {},
      comments: []
    },
    {
      id: 2,
      owner: "0x1234...efgh",
      publicationName: 'Public Paper 2',
      contentURI: "https://example.com/researchB",
      isPublic: true,
      price: 40,
      publishStatus: true,
      totalVotes: 8,
      votes: {},
      comments: []
    },
    {
      id: 3,
      owner: "0x1234...ijkl",
      publicationName: 'Public Paper 3',
      contentURI: "https://example.com/researchC",
      isPublic: true,
      price: 45,
      publishStatus: false,
      totalVotes: 15,
      votes: {},
      comments: []
    },
    {
      id: 4,
      owner: "0x1234...mnop",
      publicationName: 'Public Paper 4',
      contentURI: "https://example.com/researchD",
      isPublic: true,
      price: 60,
      publishStatus: true,
      totalVotes: 20,
      votes: {},
      comments: []
    },
    {
      id: 5,
      owner: "0x1234...qrst",
      publicationName: 'Public Paper 5',
      contentURI: "https://example.com/researchE",
      isPublic: true,
      price: 30,
      publishStatus: false,
      totalVotes: 5,
      votes: {},
      comments: []
    },
    {
      id: 6,
      owner: "0x1234...uvwx",
      publicationName: 'Private Paper 1',
      contentURI: "https://example.com/researchF",
      isPublic: false,
      price: 70,
      publishStatus: true,
      totalVotes: 12,
      votes: {},
      comments: []
    },
    {
      id: 7,
      owner: "0x1234...yzab",
      publicationName: 'Private Paper 2',
      contentURI: "https://example.com/researchG",
      isPublic: false,
      price: 65,
      publishStatus: false,
      totalVotes: 18,
      votes: {},
      comments: []
    },
    {
      id: 8,
      owner: "0x1234...cdef",
      publicationName: 'Private Paper 3',
      contentURI: "https://example.com/researchH",
      isPublic: false,
      price: 75,
      publishStatus: true,
      totalVotes: 25,
      votes: {},
      comments: []
    },
    {
      id: 9,
      owner: "0x1234...ghij",
      publicationName: 'Private Paper 4',
      contentURI: "https://example.com/researchI",
      isPublic: false,
      price: 80,
      publishStatus: false,
      totalVotes: 22,
      votes: {},
      comments: []
    }
];


  const filteredPapers = papers.filter(paper => {
    if (filter === 'all') return true;
    if (filter === 'public' && paper.isPublic) return true;
    if (filter === 'private' && !paper.isPublic) return true;
    return false;
  });

return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {filteredPapers.map(paper => (
        paper.isPublic ? (
          <div key={paper.id} className="border p-4 rounded bg-gray-800 text-white h-[550px] flex flex-col">
            <h2 className="font-bold text-xl mb-2">{paper.publicationName}</h2>
            <p className="mb-2">Owner: {paper.owner}</p>
            <p className="mb-2">Content URI: <a href={paper.contentURI} className="underline">{paper.contentURI}</a></p>
            <div className="mt-auto flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="text-green-500">&#128077;</button> {/* Thumbs up emoji */}
                <button className="text-red-500">&#128078;</button>   {/* Thumbs down emoji */}
                <span>&#128172;</span> {/* Speech bubble emoji */}
              </div>
            </div>
          </div>
        ) : (
          <div key={paper.id} className="border p-4 rounded bg-gray-800 text-white relative h-[550px]">
            <div className="opacity-50">
              <h2 className="font-bold text-xl mb-2">{paper.publicationName}</h2>
              <p className="mb-2">Owner: {paper.owner}</p>
              <p className="mb-2">Content URI: <a href={paper.contentURI} className="underline">{paper.contentURI}</a></p>
              <p className="mb-2">Price: ${paper.price}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl text-gray-500">&#128274;</span> {/* Lock emoji */}
            </div>
          </div>
        )
      ))}
    </div>
  );

};

const Marketplace = () => {
  const [filter, setFilter] = useState('all'); 

  return (
    <div>
      <Navbar />
      <SearchAndFilter setFilter={setFilter} />
      <ResearchGrid filter={filter} />
    </div>
  );
};

export default Marketplace;
