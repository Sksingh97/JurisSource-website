import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gold-400">Juris Source</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded by Advocate Rashmi Singh with the aim to provide comprehensive legal services 
              for a range of legal disputes. We are committed to excellence, integrity, and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-800">Our Story</h2>
                <p className="text-slate-600 leading-relaxed">
                  Juris Source was founded by Advocate Rashmi Singh with the aim to provide 
                  services for a range of legal disputes. The founder is an alumni of Delhi University 
                  and is a highly qualified legal professional. She has significant experience in 
                  working with individual clients to large scale companies.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The firm has the best resources to ensure that their work is of the highest quality. 
                  We conduct our business with the highest level of honesty and are transparent 
                  with our clients.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We have a group of experts that are passionate about their work since we are of 
                  the belief that high-quality can only be achieved with passion.
                </p>
              </div>

              {/* Guarantees */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">We Guarantee Our Clients</h3>
                <ul className="space-y-3">
                  {[
                    'Accomplice association in all arrangements and exchanges, consistently',
                    'Top notch Legal Advice – We convey administrations of the greatest quality, which are fit for fulfilling the most demanding guidelines',
                    'Accessibility and Responsiveness – We are proactive in our methodology and are accessible to our clients consistently',
                    'Legitimate Research and Analysis Based Advisory – We stay informed concerning market rehearses relevant to lawful translation'
                  ].map((guarantee, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-8">
              {/* Philosophy */}
              <div className="card p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Philosophy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Professionalism — is our key quality. Taking into account the high value of the 
                  entrusted issues, neither we nor our clients can afford any mistakes. That is 
                  why we concentrate our resources on supporting the highest level of our expertise 
                  and services.
                </p>
              </div>

              {/* Principle */}
              <div className="card p-8">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-gold-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Principle</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our Firm distinguishes itself by its strict observance of a set of 
                  uncompromising values and principles that mark our identity and professional culture. 
                  We also pride ourselves for being cost and time-efficient.
                </p>
              </div>

              {/* Key of Success */}
              <div className="card p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Key of Success</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Create a clear business strategy</li>
                  <li>• Differentiate your practice</li>
                  <li>• Put your clients front and centre</li>
                  <li>• Clients belong to the firm</li>
                  <li>• Allow the managing partner to manage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for Legal Assistance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let us help you with professional legal services. Call now for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918368980930" 
                className="btn btn-gold"
              >
                Call +91 83689 80930
              </a>
              <a 
                href="mailto:jurissource@gmail.com" 
                className="btn btn-secondary border-white text-white hover:bg-white hover:text-primary-900"
              >
                Send Email
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              Mon – Sat 09:00-18:00
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage