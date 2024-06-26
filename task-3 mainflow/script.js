
document.addEventListener('DOMContentLoaded', function() {
    
    var carForm = document.getElementById('carForm');
    if (carForm) {
        carForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            var selectedCar = document.getElementById('carSelect').value;

            var cars = {
                tata: {
                  title: "Tata",
                  image: "tata.jpg",
                  description:"Tata Motors was founded in 1945, as a locomotive manufacturer. Tata Group entered the commercial vehicle sector in 1954 after forming a joint venture with Daimler-Benz of Germany in which Tata developed a manufacturing facility in Jamshedpur for Daimler lorries. By November 1954 Tata and Daimler manufactured their first goods carrier chassis at their Jamshedpur plant with 90-100 hp and capacity of 3-5 tons. After years of dominating the commercial vehicle market in India, Tata Motors entered the passenger vehicle market in 1991 by launching the Tata Sierra, a sport utility vehicle based on the Tata Mobile platform. Tata subsequently launched the Tata Estate (1992; a station wagon design based on the earlier Tata Mobile), the Tata Sumo (1994, a 5-door SUV) and the Tata Safari (1998)."
                },

                hundai: {
                    title: "Hundai",
                    image:"hundai.jpg",
                    description:"Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, South Korea which has an annual production capacity of 1.6 million units. The company employs approximately 75,000 people worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms. As of 2022, Hyundai is the world's third-largest carmaker in terms of production, only falling behind Toyota and Volkswagen."
                  },
                honda: {
                    title: "Honda",
                    image:"honda.jpg",
                    description:"Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft, power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000. They have also ventured into aerospace with the establishment of GE Honda Aero Engines in 2004 and the Honda HA-420 HondaJet, which began production in 2012. Honda has two joint-ventures in China: Dongfeng Honda and GAC Honda."
                  },
               
                  maruti: {
                    title: "Maruti",
                    image:"maruthi.jpg",
                    description:"Maruti Suzuki India Limited (formerly Maruti Udyog Limited) is the Indian subsidiary of Japanese automaker Suzuki Motor Corporation. As of September 2022, the company had a leading market share of 42 percent in the Indian passenger car market. The Government of India established Maruti Udyog Limited in February 1981 as a joint venture with Suzuki Motor Corporation as a small partner. In 1982, Maruti opened its first production facility in Gurugram, Haryana, India."
                  },
                  mg: {
                    title: "MG",
                    image:"mg.jpg",
                    description:"MG cars had their roots in a 1920s sales promotion sideline of Morris Garages, a retail sales and service centre in Oxford belonging to William Morris. The business's manager, Cecil Kimber, modified standard production Morris Oxfords and added MG Super Sports to the plate at the nose of the car. A separate M.G. Car Company Limited was incorporated in July 1930. It remained Morris's personal property until 1 July 1935, when he sold it to his holding company, Morris Motors Limited."
                  },
                audi: {
                    title: "Audi",
                    image: "audi.jpg", 
                    description: "Audi, a German luxury car manufacturer based in Ingolstadt and owned by Volkswagen AG, has a rich heritage. The Audi name dates back to 1910, but it was in 1969 that VW consolidated multiple companies into the modern “Audi.” Notably, Audi made its mark in motorsport with the legendary four-wheel-drive rally champion, the Audi Quattro, during the early 1980s."
                },
                bmw: {
                    title: "BMW",
                    image: "bmw.jpg", 
                    description: " BMW, which stands for Bavarian Motor Works (Bayerische Motoren Werke in German), was founded in Munich in 1916. Initially, BMW manufactured airplane engines during World War I. However, it wasn’t until 1928 that the company produced its first car. Post-WWII, building cars became BMW’s primary focus. Iconic models like the 2002 and its successor, the 3 Series, laid the foundation for BMW’s reputation as a luxury and performance powerhouse from the 1980s onward."
                },
                mercedes: {
                    title: "Mercedes-Benz",
                    image: "benz.jpg", 
                    description: "Mercedes-Benz, a renowned German luxury car manufacturer, has a storied heritage. The brand’s origins trace back to 1926 when Daimler and Benz merged to form the company. Since then, Mercedes-Benz has consistently delivered elegance, performance, and cutting-edge technology."
                },
                tesla: {
                    title: "Tesla",
                    image: "tesla.jpg", 
                    description: "Tesla is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells battery electric vehicles (BEVs), stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services. The company is also developing artificial intelligence and robotics products."

                }
            };

            var carInfo = document.getElementById('carInfo');
            var carTitle = document.getElementById('carTitle');
            var carImage = document.getElementById('carImage');
            var carDescription = document.getElementById('carDescription');

            if (selectedCar in cars) {
                carTitle.textContent = cars[selectedCar].title;
                carImage.src = cars[selectedCar].image;
                carDescription.textContent = cars[selectedCar].description;
                carInfo.style.display = 'block'; 
            } else {
                alert('Please select a car brand.'); 
            }
        });
    }

   
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            alert('Form submitted!'); 
        });
    }
});
