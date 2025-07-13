
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how we collect, use, and protect your personal information when you use our AI marketplace platform. We are committed to protecting your privacy and ensuring transparency about our data practices.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We collect personal information that you provide directly to us, including:</p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Profile information and professional background</li>
              <li>Payment information and billing details</li>
              <li>Project descriptions and service requirements</li>
              <li>Communications with other users and support staff</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>We automatically collect certain information when you use our platform:</p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our platform</li>
              <li>Referring websites and search terms</li>
              <li>Device information and identifiers</li>
            </ul>

            <h3>2.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>Providing and maintaining our marketplace services</li>
              <li>Facilitating connections between clients and service providers</li>
              <li>Processing payments and managing transactions</li>
              <li>Communicating with you about your account and services</li>
              <li>Improving our platform and developing new features</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
              <li>Marketing and promotional communications (with your consent)</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <h3>4.1 With Other Users</h3>
            <p>
              Certain profile information is visible to other users to facilitate connections and trust. You can control what information is publicly displayed through your privacy settings.
            </p>

            <h3>4.2 With Service Providers</h3>
            <p>
              We share information with trusted third-party service providers who assist us in operating our platform, including payment processors, hosting providers, and analytics services.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, legal process, or government request, or to protect our rights, property, or safety, or that of others.
            </p>

            <h3>4.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to confidentiality protections.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
            </p>

            <h2>7. Your Rights and Choices</h2>
            <h3>7.1 Access and Update</h3>
            <p>
              You can access and update your personal information through your account settings or by contacting us directly.
            </p>

            <h3>7.2 Data Portability</h3>
            <p>
              You have the right to request a copy of your personal information in a structured, machine-readable format.
            </p>

            <h3>7.3 Deletion</h3>
            <p>
              You can request deletion of your personal information, subject to certain exceptions for legal compliance and legitimate business purposes.
            </p>

            <h3>7.4 Marketing Communications</h3>
            <p>
              You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails or updating your communication preferences.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during international transfers.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will take steps to delete the information.
            </p>

            <h2>10. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@aimarketplace.com</li>
              <li>Address: 123 AI Street, Tech City, TC 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>

            <h2>13. Data Protection Officer</h2>
            <p>
              If you are located in the European Union or have questions about our GDPR compliance, you can contact our Data Protection Officer at dpo@aimarketplace.com.
            </p>

            <h2>14. Regulatory Compliance</h2>
            <p>
              We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy regulations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
