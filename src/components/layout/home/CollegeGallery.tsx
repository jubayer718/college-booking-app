/* eslint-disable @next/next/no-img-element */
'use client';

const galleryImages = [
  {
    college: 'Oxford College',
    session: '2022-2023',
    image: 'https://www.shutterstock.com/image-photo/portrait-group-smiling-happy-multiracial-260nw-2465071745.jpg',
  },
  {
    college: 'Dhaka University',
    session: '2021-2022',
    image: 'https://images.pexels.com/photos/8106649/pexels-photo-8106649.jpeg',
  },
  {
    college: 'Cambridge Institute',
    session: '2023-2024',
    image: 'https://images.pexels.com/photos/7942476/pexels-photo-7942476.jpeg',
  },
  {
    college: 'Kustia University',
    session: '2020-2021',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1B0wSUCl6qEq_KdFc2lOeA7Y2FXlXazW2w&s',
  },
  {
    college: 'MIT',
    session: '2022-2023',
    image: 'https://i.ytimg.com/vi/auTigLRfwZc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYK09mmLi6ykZ6VL2Dag9bqJoDSg',
  },
  {
    college: 'Harvard College',
    session: '2019-2020',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ltj9QuC83sbOpuLbppUMPf2kaSy8APpq6Q&s',
  },
];

const CollegeGallery = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">🎓 College Graduate Group Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden bg-white transition hover:scale-[1.02]"
          >
            <img
              src={item.image}
              alt={`${item.college} Graduation`}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.college}</h3>
              <p className="text-gray-600">Session: {item.session}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeGallery;
