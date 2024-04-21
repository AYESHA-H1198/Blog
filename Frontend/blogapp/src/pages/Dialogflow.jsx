
import React from 'react';

import { Helmet } from 'react-helmet';

const Dialogflow = () => {
  return (
    <div>
    
      <Helmet>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" async />
      </Helmet>
      
      <df-messenger
        chat-title="MY BLOG CHATBOT"
        agent-id="13bd78c0-4ddf-42cf-9755-02a9719860f9"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Dialogflow;
