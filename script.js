console.log('Hello!');

const testimonialData = [
  {
    name: 'Alvan Morrison',
    role: 'BHT',
    quote: 'I love using the Cheatsheet app—it has been incredibly helpful in writing detailed progress notes and serves as a great refresher for ABA principles.',
    image: 'https://assets.codepen.io/6836864/Image-1.jpg'
  },
  {
    name: 'Zaniyah Thompson',
    role: 'BHT',
    quote: "The ABA concepts help me to better understand what I was doing during my sessions.",
    image: 'https://assets.codepen.io/6836864/Zaniyah.jpeg'
  },
  {
    name: 'Shruti Balasa',
    role: 'Full Stack Web Developer & Tech Educator',
    quote: 'I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Sara Vieira',
    role: 'CodeSandbox',
    quote: "I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.",
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Didier Catz',
    role: 'Co-founder @StyptApp',
    quote: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling.",
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'John Doe',
    role: 'Frontend Developer',
    quote: "Tailwind CSS has revolutionized the way I approach web design. It's intuitive and incredibly efficient.",
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Jane Smith',
    role: 'UX Designer',
    quote: 'The utility-first approach of Tailwind CSS allows for rapid prototyping and consistent designs across projects.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    quote: "Tailwind's flexibility has improved my workflow significantly. It's a game-changer for responsive design.",
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Emily Brown',
    role: 'Web Developer',
    quote: "I was skeptical at first, but Tailwind CSS has won me over. It's now an essential part of my toolkit.",
    image: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Michael Lee',
    role: 'Software Engineer',
    quote: "Tailwind CSS strikes the perfect balance between customization and convention. It's a joy to work with.",
    image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Sarah Connor',
    role: 'UI Designer',
    quote: 'The learning curve is worth it. Tailwind CSS has made me a more efficient and effective designer.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'David Wilson',
    role: 'Frontend Architect',
    quote: "Tailwind's approach to CSS is refreshing. It's changed how I think about styling web applications.",
    image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lisa Taylor',
    role: 'Web Design Instructor',
    quote: "I recommend Tailwind CSS to all my students. It's an excellent tool for learning modern CSS practices.",
    image: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Robert Martinez',
    role: 'Freelance Web Developer',
    quote: 'Tailwind CSS has sped up my development process significantly. My clients are happier with faster turnaround times.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX Designer',
    quote: 'The consistency and flexibility of Tailwind CSS have improved collaboration between design and development teams.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Chris Evans',
    role: 'Senior Frontend Developer',
    quote: "Tailwind CSS has simplified our design system implementation. It's a powerful tool for large-scale applications.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Olivia Parker',
    role: 'Web Accessibility Specialist',
    quote: 'I appreciate how Tailwind CSS makes it easy to create accessible designs right out of the box.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Daniel Kim',
    role: 'Mobile App Developer',
    quote: 'Even as a primarily mobile developer, I find Tailwind CSS invaluable for creating responsive web views in hybrid apps.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Sophia Rodriguez',
    role: 'E-commerce Developer',
    quote: 'Tailwind CSS has been a game-changer for quickly building and iterating on e-commerce sites.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Ethan Hunt',
    role: 'DevOps Engineer',
    quote: "The modularity of Tailwind CSS fits perfectly with our microservices architecture. It's DevOps friendly!",
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
];

let currentIndex = 0;
const testimonials = document.getElementById('testimonials');
const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');

function createTestimonialCard(testimonial) {
  const newTestimonial = document.createElement('div');
  newTestimonial.className = 'bg-white border border-silver p-4 rounded-lg shadow-sm';
  newTestimonial.innerHTML = `
      <div class="flex items-center mb-2">
          <img src="${testimonial.image}" alt="${testimonial.name}" class="w-8 h-8 rounded-full mr-2 object-cover">
          <div>
              <h3 class="font-semibold text-sm">${testimonial.name}</h3>
              <p class="text-gray-600 text-xs">${testimonial.role}</p>
          </div>
      </div>
      <p class="text-gray-800 text-sm">${testimonial.quote}</p>
  `;
  return newTestimonial;
}

showMoreBtn.addEventListener('click', function() {
  const fragment = document.createDocumentFragment();
  const cardsToAdd = 20 - (testimonials.children.length % 20);
  for (let i = 0; i < cardsToAdd; i++) {
    if (currentIndex >= testimonialData.length) {
      break;
    }
    const testimonial = testimonialData[currentIndex];
    fragment.appendChild(createTestimonialCard(testimonial));
    currentIndex++;
  }
  testimonials.appendChild(fragment);
  showMoreBtn.classList.add('hidden');
  showLessBtn.classList.remove('hidden');
});

showLessBtn.addEventListener('click', function() {
  const additionalCards = testimonials.querySelectorAll('.bg-white.border.border-silver.p-4.rounded-lg.shadow-sm');
  for (let i = 3; i < additionalCards.length; i++) {
    additionalCards[i].remove();
  }
  currentIndex = 0;
  showMoreBtn.classList.remove('hidden');
  showLessBtn.classList.add('hidden');
});