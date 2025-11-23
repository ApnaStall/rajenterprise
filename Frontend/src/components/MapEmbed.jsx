import React from 'react';

function MapEmbed() {
  return (
    <>
      <section className="w-full py-10">
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.266141835038!2d73.02146387466769!3d19.183574648587655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf1040000001%3A0x2bb26603d961a4!2sRose%20Garment!5e0!3m2!1sen!2sin!4v1763534421604!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </section>
    </>
  );
}

export default MapEmbed