import React, { useState } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
import Pagination from './Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading } = useFetch();

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {data[currentPage - 1]?.map(item => {
            return <Follower key={item.id} data={item} />;
          })}
        </div>

        <Pagination pages={10} onPageChange={setCurrentPage} />
      </section>
    </main>
  );
}

export default App;
