import React from "react";
import Layout from "../components/Layout";

const Terms = () => {
  return (
    <Layout>
      <h2>How was this agreement created?</h2>
      <p>
        These Terms of Service are a customized version of the Common Paper Cloud Service Agreement (CSA). 
        The CSA is an open-source, standard agreement for buying and selling cloud services and SaaS, created 
        by a committee of dozens of attorneys representing technology vendors, procurement teams, boutique firms, 
        and Big Law. The default version of the CSA is structured to be signed (whether with a pen or digitally) 
        by both the vendor and the customer. These Terms of Service are structured to be posted online by a vendor 
        and for customers to click-to-accept. Using the same foundational agreement for both self-serve customers 
        and direct sales enables smoother upsells, greater consistency, and easier compliance.
      </p>

      <h2>What is this for?</h2>
      <p>
        These Terms of Service support the use and sale of business-to-business cloud services or SaaS. If you’re 
        looking for terms for a consumer product, blog, or marketing website, this probably isn’t what you need.
      </p>
      <p>
        What happens if I negotiate and sign a Common Paper CSA with a customer that also agrees to the online Terms of Service?
        If the customer signed a Cover Page and it is active, then the Cover Page will control over the Terms of Service.
      </p>

      <h2>I see this agreement is hosted online. Does that mean it will change?</h2>
      <p>
        The latest version of the CSA is 2.0, and it will remain unchanged and hosted at 
        <a href="https://commonpaper.com/standards/cloud-service-agreement/2.0">commonpaper.com/standards/cloud-service-agreement/2.0</a>. 
        We expect future changes to occur infrequently, and they will be posted as a new version when they happen. New versions 
        will not change or otherwise impact agreements that incorporate prior versions, and you can see the full list of all CSA versions 
        <a href="https://commonpaper.com/standards/cloud-service-agreement/versions">here</a>.
      </p>

      <h2>How is Version 2 different from previous versions?</h2>
      <p>
        CSA v2 adds expanded support for product trials/pilots, more flexibility for defining payment terms, 
        language covering the use of data for training AI models, and many other improvements. You can see a 
        summary of changes along with a redline on the version history page at: 
        <a href="https://commonpaper.com/standards/cloud-service-agreement/versions">commonpaper.com/standards/cloud-service-agreement/versions</a>.
      </p>
      <p>
        Can I still use older versions of this agreement? Yes, older versions of standards will remain posted 
        under their version number. You can access all prior versions on a standard’s version history page.
      </p>

      <h2>How do I use this as a clickthrough agreement?</h2>
      <p>
        To create a clickthrough Terms of Service using the Common Paper CSA, click the "Configure Your TOS" button 
        on the top of the page. You’ll be guided through a series of questions to configure the agreement for your business, 
        and at the end you’ll receive an agreement that you can download and post to your website. Alternatively, you can 
        download a copy of the Cover Page and manually fill out the business terms of your agreement, like fees and subscription 
        period, and the legal terms like the governing law of your contract. The Cover Page incorporates the Standard Terms by 
        reference, allowing you to keep the version you present to users concise.
      </p>

      <h2>Do I have to use this as a clickthrough agreement?</h2>
      <p>
        You can also use the Common Paper CSA as a signed agreement.
      </p>

      <h2>Can I leave something out of the Cover Page?</h2>
      <p>
        Yes, some concepts in the Cover Page are optional, like whether your agreement includes SLAs. When you download the Cover 
        Page, you’ll see notes explaining which fields are optional. If you omit a variable from the Cover Page, the meaning will 
        default to “none” or “not applicable” when the capitalized word is used in the Standard Terms.
      </p>

      <h2>Can I customize the Standard Terms?</h2>
      <p>
        All modifications to the Standard Terms should be made by addendum on the Cover Page. Incorporating the Standard Terms 
        by reference from the Common Paper website gives both sides assurance that all key details and modifications are explicitly 
        called out in the Cover Page.
      </p>

      <h2>What license is this agreement released under?</h2>
      <p>
        Common Paper agreements are free to use and modify under CC BY 4.0.
      </p>
    </Layout>
  );
};

export default Terms;
