import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time AQI Prediction using Map Bound",
      description: "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1726819849148-9be9bee2cafd?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/Real-TIme-AQI-Prediction",
      live: "https://aqi-prediction-map-bound-site.vercel.app"
    },
    {
      title: "Heart Risk Prediction",
      description: "You can enter your details and check if you have a high or low risk of heart attack.",
      image:"https://plus.unsplash.com/premium_photo-1719618754072-fc516f6698b1?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/Heart_Risk_Prediction",
      live: "https://heart-disease-prediction-kappa.vercel.app/login"
    },
    {
      title: "AI-Study Assistant",
      description: "In this you can upload the material for class 9-12 and also use AI if you wish to.",
      image: "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/AI-Study-Assistant",
      live: "https://ai-study-assistant-one.vercel.app"
    },
    {
      title: "Stock Price Prediction",
      description: "Data scrapping with interactive charts and it will tell you about the closing price of the particular stock next day.",
      image: "https://images.unsplash.com/photo-1745270917331-787c80129680?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/stock_price_prediction",
      live: "https://stock-prize-prediction-site.vercel.app"
    },
    {
      title: "Stock Price Prediction Real Time",
      description: "Data scrapping with interactive charts and it will tell you about the closing price of the particular stock next day.",
      image: "https://images.unsplash.com/photo-1745270917331-787c80129680?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/stock_price_prediction",
      live: "https://stock-price-prediction-real-time.vercel.app"
    },
    {
      title: "CSV Music Recommendation System",
      description: "It will help you to choose the singer first and then what type of genre you want to listen of that singer.",
      image: "https://plus.unsplash.com/premium_photo-1676747629901-3f41c941d8fc?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/Csv_Music_Recommendation_System",
      live: "https://csv-music-recommendation-system.vercel.app"
    },
    {
      title: "General Music Recommendation System",
      description: "It will help you to choose the singer first and then what type of genre you want to listen of that singer.",
      image: "https://plus.unsplash.com/premium_photo-1676747629901-3f41c941d8fc?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/lucifer43562/General_Music_Recomendation_Site",
      live: "https://general-music-recomendation-site.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group bg-background border-0 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <LinkIcon className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* No technologies */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
