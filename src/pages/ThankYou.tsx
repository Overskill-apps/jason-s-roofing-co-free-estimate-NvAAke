import React from 'react';
import { CheckCircle, Home, Phone, Mail, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-roofing-light">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-roofing-dark hover:text-roofing-blue"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-roofing-blue to-roofing-orange rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-roofing-dark">Jason's Roofing Co</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center">
          <Card className="shadow-card border-0 max-w-2xl mx-auto">
            <CardContent className="p-12">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>

              {/* Thank You Message */}
              <h1 className="text-4xl font-bold text-roofing-dark mb-6">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your free estimate request has been successfully submitted. 
                We've received your information and will contact you within 24 hours 
                to schedule your free, no-obligation estimate.
              </p>

              {/* What's Next Section */}
              <div className="bg-roofing-light/50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-roofing-dark mb-6">What Happens Next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-roofing-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-roofing-dark">We'll Contact You</h3>
                      <p className="text-muted-foreground">Our team will reach out within 24 hours to schedule your free estimate at a convenient time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-roofing-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-roofing-dark">Professional Inspection</h3>
                      <p className="text-muted-foreground">Our certified roofing expert will visit your property to assess your roofing needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-roofing-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-roofing-dark">Detailed Estimate</h3>
                      <p className="text-muted-foreground">You'll receive a comprehensive, written estimate with no hidden fees or surprises.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white border border-border rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-roofing-dark mb-4">Need Immediate Assistance?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-ROOF</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>info@jasonsroofing.com</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-roofing-blue to-roofing-orange hover:opacity-90 text-white font-semibold px-8"
                >
                  <Home className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/estimate')}
                  className="border-roofing-blue text-roofing-blue hover:bg-roofing-blue hover:text-white px-8"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Submit Another Request
                </Button>
              </div>

              {/* Additional Information */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Reference Number:</strong> EST-{Date.now().toString().slice(-6)}
                  <br />
                  Please keep this number for your records.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}