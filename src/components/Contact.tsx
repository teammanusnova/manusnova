import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our work? Need a prosthetic? Want to collaborate? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      The Bronx High School of Science<br />
                      75 W 205th St, Bronx, NY 10468
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:teammanusnova@gmail.com" className="text-primary hover:underline">
                      teammanusnova@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">🕒</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Workshop Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 3:30 PM - 5:30 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">For Prosthetic Requests</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you or someone you know needs a prosthetic device, please reach out to us. We provide free 
                consultations and custom fittings. Our typical turnaround time is 2-4 weeks depending on complexity.
              </p>
            </div>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Prosthetic Request</option>
                  <option>Volunteer Opportunity</option>
                  <option>Donation Inquiry</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;