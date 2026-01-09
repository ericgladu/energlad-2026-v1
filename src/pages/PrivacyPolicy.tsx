const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground">
              When you visit our website, we automatically collect certain information about your device and your visit. This includes your IP address, browser type, operating system, referring URLs, and pages viewed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Google Analytics</h2>
            <p className="text-muted-foreground mb-3">
              We use Google Analytics 4 to analyze website traffic and improve our services. Google Analytics collects data such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Pages you visit and time spent on each page</li>
              <li>How you arrived at our website</li>
              <li>Your approximate geographic location</li>
              <li>Device and browser information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Google Signals</h2>
            <p className="text-muted-foreground">
              We have enabled Google Signals, which allows us to understand cross-device behavior for users who have opted into Ads Personalization. This helps us better understand how visitors interact with our website across different devices. Google Signals data is aggregated and does not personally identify you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="text-muted-foreground mb-3">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
            <p className="text-muted-foreground">
              Analytics data is retained for 14 months. After this period, the data is automatically deleted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-muted-foreground">
              You may opt out of Google Analytics tracking by installing the{" "}
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@energlad.com" className="text-primary hover:underline">
                info@energlad.com
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-12 pt-6 border-t border-border">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
