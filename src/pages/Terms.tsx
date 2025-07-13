
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our AI marketplace platform, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our website and services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Our platform provides a marketplace connecting clients seeking AI services with qualified service providers. We facilitate communication, project management, and payment processing between parties but are not directly involved in the provision of AI services.
            </p>

            <h2>3. User Accounts</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              To use our services, you must create an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3>3.2 Account Responsibilities</h3>
            <p>
              You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>

            <h2>4. User Conduct</h2>
            <h3>4.1 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Post false, inaccurate, misleading, defamatory, or libelous content</li>
              <li>Attempt to gain unauthorized access to other user accounts</li>
              <li>Engage in any form of harassment or discrimination</li>
              <li>Upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h3>4.2 Content Standards</h3>
            <p>
              All content you post must be respectful, professional, and relevant to AI services. We reserve the right to remove any content that violates these standards.
            </p>

            <h2>5. Services and Payments</h2>
            <h3>5.1 Service Fees</h3>
            <p>
              We charge service fees for completed transactions on our platform. Current fee structures are available on our pricing page and may be updated from time to time.
            </p>

            <h3>5.2 Payment Processing</h3>
            <p>
              All payments are processed through secure third-party payment processors. We use escrow services to protect both clients and service providers.
            </p>

            <h3>5.3 Refunds and Disputes</h3>
            <p>
              Refund policies and dispute resolution procedures are outlined in our separate Refund Policy. We provide mediation services for disputes between users.
            </p>

            <h2>6. Intellectual Property</h2>
            <h3>6.1 Platform Content</h3>
            <p>
              All content, features, and functionality of our platform are owned by us and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3>6.2 User Content</h3>
            <p>
              You retain ownership of content you create, but grant us a license to use, display, and distribute such content as necessary to provide our services.
            </p>

            <h2>7. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>

            <h2>8. Disclaimers and Limitation of Liability</h2>
            <h3>8.1 Service Availability</h3>
            <p>
              We strive to maintain high availability but cannot guarantee uninterrupted access to our services. We reserve the right to suspend or terminate services for maintenance or other reasons.
            </p>

            <h3>8.2 Third-Party Services</h3>
            <p>
              We are not responsible for the quality, reliability, or performance of services provided by third-party service providers on our platform.
            </p>

            <h3>8.3 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@aimarketplace.com</li>
              <li>Address: 123 AI Street, Tech City, TC 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law.
            </p>

            <h2>14. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and us regarding our service and supersede and replace any prior agreements we might have between us regarding the service.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
