import React from 'react';
import { ArrowRight, Shield, Clock, Star, CheckCircle, Phone, MapPin, Mail, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-roofing-light">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-roofing-blue to-roofing-orange rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-roofing-dark">Jason's Roofing Co</h1>
              <p className="text-sm text-muted-foreground">Professional Roofing Services</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/estimate')}
            className="bg-roofing-orange hover:bg-roofing-orange/90 text-white font-semibold px-6"
          >
            Get Free Estimate
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-roofing-blue/10 text-roofing-blue border-roofing-blue/20">
                  ⭐ 20+ Years Experience
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-roofing-dark leading-tight">
                  Quality Roofing
                  <span className="block bg-gradient-to-r from-roofing-blue to-roofing-orange bg-clip-text text-transparent">
                    You Can Trust
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional roofing services with over two decades of experience. 
                  From repairs to complete replacements, we've got your home covered.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/estimate')}
                  className="bg-gradient-to-r from-roofing-blue to-roofing-orange hover:opacity-90 text-white font-semibold px-8 py-6 text-lg shadow-elegant"
                >
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-roofing-blue text-roofing-blue hover:bg-roofing-blue hover:text-white px-8 py-6 text-lg"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">24/7 Emergency</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-roofing-blue/20 to-roofing-orange/20 rounded-2xl blur-3xl"></div>
              <img 
                src="https://pub.overskill.com/app-1201/production/src/assets/hero-roofing.jpg"
                alt="Professional roofing services - beautiful home with quality roof"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roofing-dark/40 to-transparent rounded-2xl flex items-end">
                <div className="text-white p-8">
                  <p className="text-lg font-semibold">Professional Roofing Excellence</p>
                  <p className="text-sm opacity-90">Quality you can see, trust you can feel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-roofing-dark mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Complete roofing solutions for your home</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Roof Replacement",
                description: "Complete roof replacement with premium materials and expert installation."
              },
              {
                icon: Clock,
                title: "Roof Repair",
                description: "Quick and reliable roof repairs to fix leaks and damage."
              },
              {
                icon: Star,
                title: "Emergency Service",
                description: "24/7 emergency roofing services when you need us most."
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-roofing-blue to-roofing-orange rounded-xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-roofing-dark mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-roofing-blue to-roofing-orange">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free, no-obligation estimate today. Our experts will assess your roofing needs 
            and provide you with a detailed quote.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/estimate')}
            className="bg-white text-roofing-blue hover:bg-gray-50 font-semibold px-8 py-6 text-lg shadow-lg"
          >
            Get Your Free Estimate Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-roofing-dark text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-roofing-blue to-roofing-orange rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jason's Roofing Co</h3>
                  <p className="text-sm opacity-80">Professional Roofing Services</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Over 20 years of experience providing quality roofing services to homeowners.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-ROOF</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>info@jasonsroofing.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Serving Greater Metro Area</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Why Choose Us</h4>
              <ul className="space-y-2 text-white/80">
                <li>• Licensed & Insured</li>
                <li>• Free Estimates</li>
                <li>• 24/7 Emergency Service</li>
                <li>• Quality Guarantee</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Jason's Roofing Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}