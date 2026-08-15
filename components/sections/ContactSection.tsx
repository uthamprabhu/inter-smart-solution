'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Save to localStorage
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };
    localStorage.setItem('contactFormSubmission', JSON.stringify(submissionData));
    
    // Show success alert
    setShowAlert(true);
    
    // Reset form
    setFormData({
      email: '',
      name: '',
      message: '',
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Reusable input classes - DRY principle
  const inputClasses = "w-full px-4 md:px-6 py-4 sm:py-5 lg:py-5.5 bg-white border border-form-border rounded-lg text-base sm:text-lg text-brand-navy placeholder:text-brand-navy placeholder:text-base sm:placeholder:text-lg placeholder:leading-8 placeholder:font-normal focus:outline-none focus:border-brand-navy transition-colors duration-300";

  return (
    <section id="contact" className="bg-bg-contact py-16 lg:py-24">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-[48px] font-semibold leading-15 text-brand-navy max-w-xl">
              Let&apos;s talk about how digital initiatives can transform your business
            </h2>
            <p className="text-base md:text-lg font-normal leading-8 text-brand-navy max-w-lg">
              We&apos;ll happily assist in exploring what will work best for you. Like, really best.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium text-brand-navy-dark leading-15 mb-4">
              Schedule Meeting
            </h3>
            
            {/* Success Alert */}
            {showAlert && (
              <Alert variant="success" className="mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your message has been submitted successfully. We&apos;ll get back to you soon!
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" variant="large">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
