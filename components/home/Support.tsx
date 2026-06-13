export default function Support() {
  return (
    <section id="give" className="support-hero">
      <div className="container support-container">
         <div className="support-intro reveal-left">
           <span className="support-subtitle">— SUPPORT GOD&apos;S WORK —</span>
           <h2>Help Us Transform Lives Across Campuses</h2>
           <p>Your support facilitates missions, aids student welfare, and builds our infrastructure to advance the Kingdom of God across every campus in Ghana.</p>
         </div>
         
         <div className="support-card reveal-right">
            <p className="support-desc">Your support facilitates missions, aids welfare, and builds our infrastructure to advance the Kingdom.</p>
            
            <div className="donation-amount-group">
              <label>Your Donation:</label>
              <div className="amount-input-box">
                <span className="currency">GHS</span>
                <input type="number" id="customAmount" placeholder="100" />
              </div>
              <div className="amount-pills">
                <button className="amount-pill" data-value="20">20</button>
                <button className="amount-pill" data-value="50">50</button>
                <button className="amount-pill active" data-value="100">100</button>
                <button className="amount-pill" data-value="200">200</button>
                <button className="amount-pill" data-value="500">500</button>
                <button className="amount-pill custom" data-value="custom">Custom</button>
              </div>
            </div>

            <div className="payment-method-group">
              <label>Select Payment Method</label>
              <div className="radio-methods">
                <label className="radio-label">
                  <input type="radio" name="payment" value="momo" defaultChecked />
                  <span className="radio-custom"></span>
                  <span>Mobile Money</span>
                </label>
                <label className="radio-label">
                  <input type="radio" name="payment" value="bank" />
                  <span className="radio-custom"></span>
                  <span>Bank Transfer</span>
                </label>
              </div>
            </div>
            
            {/* Dynamic Info Box based on method */}
            <div id="payment-details-box" className="payment-details-box">
               <div id="momo-details">
                 <strong>MTN Mobile Money</strong><br/>
                 Number: 054 970 0111<br/>
                 Name: NUBS GHANA
               </div>
               <div id="bank-details" style={{display: "none"}}>
                 <strong>Fidelity Bank</strong><br/>
                 Account: 1050375192817<br/>
                 Name: National Union of Baptist Students Ghana
               </div>
            </div>

            <button className="btn btn-primary btn-block">Support Now <i className="ph ph-arrow-right"></i></button>
         </div>
      </div>
    </section>
  );
}
