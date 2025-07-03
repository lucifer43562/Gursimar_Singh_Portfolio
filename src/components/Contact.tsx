
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "singhgursimar37@gmail.com",
      href: "singhgursimar37@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7696960378",
      href: "tel:+917696960378"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/lucifer43562",
      href: "https://github.com/lucifer43562"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/gusimar-singh-a4a761292",
      href: "https://www.linkedin.com/in/gusimar-singh-a4a761292"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
           
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0 shadow-xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                
              </p>
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('mailto:john.doe@example.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group bg-background border-0 shadow-md"
                onClick={() => window.open(method.href)}
              >
                <CardContent className="p-0 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">
                      {method.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="border-t border-muted pt-8">
            <p className="text-muted-foreground">
              © 2025 Gursimar Singh. Built with ❤️ using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
