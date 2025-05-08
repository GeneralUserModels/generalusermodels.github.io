import React, { useState } from 'react';
import LeftPane from './LeftPane';
import Carousel from './Carousel';
import App from '../App';
import dynamicData from '../data/dynamicData.json';
import { DynamicDataProvider } from '../context/DynamicDataContext';
import { FaFileAlt, FaGithub } from 'react-icons/fa'; // Updated icons
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DemoPage = () => {
  const [selectedHour, setSelectedHour] = useState(13); // Default to 1 PM

  // Ensure we match the key type in dynamicData (keys as strings)
  const currentData = dynamicData[selectedHour.toString()] || { carousel: [], suggestions: [], activity: "" };

  const handleTimeChange = (newHour) => {
    setSelectedHour(newHour);
  };

  const codeString = `from gum import GUMClient, ObservationType

# Initialize the GUM client
client = GUMClient(api_key="your_api_key_here")

# Collect observations from various sources
observations = [
    {"type": ObservationType.SCREENSHOT, "data": screenshot_bytes, "timestamp": "2024-05-10T13:45:00Z"},
    {"type": ObservationType.TEXT, "data": "Meeting with Alex about project timeline", "timestamp": "2024-05-10T14:00:00Z"},
    {"type": ObservationType.APP_USAGE, "data": {"app": "VSCode", "duration": 3600}, "timestamp": "2024-05-10T15:30:00Z"}
]

# Add observations to user model
client.add_observations(observations)

# Query the user model to get personalized insights
results = client.query(
    query="What is the user working on today?",
    confidence_threshold=0.7
)

# Use insights to power proactive assistance
if "project deadline" in results.topics:
    reminder = client.generate_reminder(
        context=results,
        urgency="medium"
    )
    
    print(f"Suggested reminder: {reminder}")

# Retrieve user preferences for a specific context
preferences = client.get_preferences(
    context="code editor",
    attributes=["theme", "font_size", "language"]
)

print(f"User's coding preferences: {preferences}")`;

  return (

    <div style={{margin: '0 auto', paddingLeft: '5%', paddingRight: '5%', paddingTop: '40px', paddingBottom: '20px' }}>
      <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Learning General User Models from Computer Use</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>Omar Shaikh</div>
          <div style={{  fontWeight: '300' }}>Stanford</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500', }}>Shardul Sapkota</div>
          <div style={{  fontWeight: '300' }}>Stanford</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500', }}>Shan Rizvi</div>
          <div style={{  fontWeight: '300' }}>Independent</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500'}}>Eric Horvitz</div>
          <div style={{  fontWeight: '300' }}>Microsoft</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>Joon Sung Park</div>
          <div style={{  fontWeight: '300' }}>Stanford</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500'}}>Diyi Yang</div>
          <div style={{  fontWeight: '300' }}>Stanford</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px', marginBottom: '15px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500'}}>Michael S. Bernstein</div>
          <div style={{  fontWeight: '300' }}>Stanford</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
        <a href="https://arxiv.org/abs/2505.00000" target="_blank" rel="noopener noreferrer" className="start-chat-button">
          <FaFileAlt style={{ marginRight: '0.3rem', position: 'relative', top: '1px' }} /> Paper
        </a>
        <a href="https://arxiv.org/abs/2505.00000" target="_blank" rel="noopener noreferrer" className="start-chat-button">
          <FaGithub style={{ marginRight: '0.3rem', position: 'relative', top: '1px' }} /> GitHub
        </a>
      </div>

      <div style={{ 
        margin: '30px auto', 
        maxWidth: '90%',
        padding: '25px 30px', 
        borderLeft: '4px solid var(--chat-button-bg)',
        borderRadius: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <h3 style={{ 
          color: 'var(--color-main-text)', 
          margin: '0 0 15px 0',
          fontSize: '20px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ 
            backgroundColor: 'var(--chat-button-bg)', 
            color: '#d6ceba',
            padding: '4px 10px',
            borderRadius: '4px',
            marginRight: '12px',
            fontSize: '15px'
          }}>TL;DR</span>
          General User Models learn about you by observing your interactions with your computer
        </h3>
        <p style={{ 
          lineHeight: '1.6',
          margin: '0',
          fontSize: '15px'
        }}>
          We introduce General User Models (GUMs) that understand users across all applications. GUMs observe how you use your computer, infer your behaviors, knowledge and preferences, and help applications better serve your needs. Unlike traditional user models that are app-specific, GUMs provide a unified understanding of users that can power proactive assistants, contextual recommendations, and personalized experiences across your entire digital life.
        </p>
      </div>

      <div style={{display: 'flex', gap: '20px'}}>
            <div
            style={{
              flex: '1.1',
            }}
          >
            <LeftPane
              selectedHour={selectedHour}
              onTimeChange={handleTimeChange}
              activity={currentData.activity}
            />
          </div>

          <div
            style={{
              flex: '2.9',
              overflow: 'hidden'
            }}
          >
            <Carousel carouselData={currentData.carousel} />
          </div>
      </div>


      <div style={{ 
        margin: '30px auto', 
        maxWidth: '90%',
        padding: '25px 30px', 
        borderLeft: '4px solid var(--chat-button-bg)',
        borderRadius: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <h3 style={{ 
          color: 'var(--color-main-text)', 
          margin: '0 0 15px 0',
          fontSize: '20px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center'
        }}>
          What can you build with GUMs?
        </h3>
        <p style={{ 
          lineHeight: '1.6',
          margin: '0',
          fontSize: '15px'
        }}>
          placeholder placeholder placeholder...
        </p>
      </div>

        {/* Right Pane with the main App wrapped in the Dynamic Data Provider */}
        <div
          style={{
            flex: '2.9',
            border: '1px solid rgba(204, 204, 204, 0.5)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <DynamicDataProvider selectedHour={selectedHour} currentData={currentData}>
            <App 
              carouselData={currentData.carousel} 
              suggestionsData={currentData.suggestions} 
            />
          </DynamicDataProvider>
        </div>
        <div style={{ 
        margin: '30px auto', 
        maxWidth: '90%',
        padding: '25px 30px', 
        borderLeft: '4px solid var(--chat-button-bg)',
        borderRadius: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
      }}>
        
        <h3 style={{ 
          color: 'var(--color-main-text)', 
          margin: '0 0 15px 0',
          fontSize: '20px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center'
        }}>
          The GUM API
        </h3>
        <p style={{ 
          lineHeight: '1.6',
          margin: '0',
          fontSize: '15px'
        }}>
          We implement an easy-to-use Python API for GUMs. Check out the documentation on our <a href="https://github.com/omarshaikh/gum-api" target="_blank" rel="noopener noreferrer" style={{ color: '#ff9d9d' }}>GitHub</a> (under construction!)
        </p>
        
        <div style={{ marginTop: '15px', borderRadius: '8px', overflow: 'hidden' }}>
          <SyntaxHighlighter 
            language="python" 
            style={atomDark}
            customStyle={{ 
              borderRadius: '8px', 
              marginTop: '10px',
              fontSize: '14px',
              padding: '20px' 
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div style={{ marginTop: '20px' }}>
        <h3 style={{ 
          color: 'var(--color-main-text)', 
          margin: '0 0 15px 0',
          fontSize: '20px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center'
        }}>
          Abstract
        </h3>
        <p style={{ 
          lineHeight: '1.6',
          margin: '0',
          fontSize: '15px'
        }}>
          Human-computer interaction has long imagined technology that understands us—from our preferences and habits, to the timing and purpose of our everyday actions. Yet current user models remain fragmented, narrowly tailored to specific applications, and incapable of the flexible, cross-context reasoning required to fulfill these visions. This paper presents an architecture for a general user model (GUM) that can be used by any application. The GUM takes as input any unstructured observation of a user (e.g., device screenshots) and constructs confidence-weighted natural language propositions that capture that user's behavior, knowledge, beliefs, and preferences. GUMs can infer that a user is preparing for a wedding they're attending from a message thread with a friend. Or recognize that a user is struggling with a collaborator's feedback on a draft paper by observing multiple stalled edits and a switch to reading related work. GUMs introduce an architecture that infers new propositions about a user from multimodal observations, retrieves related propositions for context, and continuously revises existing propositions. To illustrate the breadth of applications that GUMs enable, we demonstrate how they augment chat-based assistants with contextual understanding, manage OS notifications to surface important information only when needed, and enable interactive agents that adapt to user preferences across applications. We also instantiate a new class of proactive assistants (Gumbos) that discover and execute useful suggestions on a user's behalf based on the their GUM. In our evaluations, we find that GUMs make calibrated and accurate inferences about users, and that assistants built on GUMs proactively identify and perform actions of meaningful value that users wouldn't think to request explicitly. From observing a user coordinating a move with their roommate, Gumbo worked backward from the user's move-in date and budget, generated a personalized schedule with logistical to-dos, and recommended helpful moving services. Altogether, GUMs introduce new methods that leverage large multimodal models to understand unstructured user context—enabling both long-standing visions of HCI and entirely new interactive systems that anticipate user needs.
        </p>
        </div>

        <div style={{ marginTop: '20px' }}>
        <h3 style={{ 
          color: 'var(--color-main-text)', 
          margin: '0 0 15px 0',
          fontSize: '20px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center'
        }}>
          Citation
        </h3>
        <div style={{ 
            position: 'relative',
            backgroundColor: 'rgba(0, 0, 0, 0.05)', 
            borderRadius: '6px',
            padding: '15px',
            fontFamily: 'monospace',
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
            overflowX: 'auto'
          }}>
            <pre id="bibtex-content" style={{ margin: '0' }}>
{`@article{shaikh2024gums,
  title={Learning General User Models from Computer Use},
  author={Shaikh, Omar and Sapkota, Shardul and Rizvi, Shan and Horvitz, Eric and Park, Joon Sung and Yang, Diyi and Bernstein, Michael S.},
  journal={arXiv preprint arXiv:2505.00000},
  year={2024}
}`}
            </pre>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(document.getElementById('bibtex-content').textContent);
                document.getElementById('copy-btn').textContent = 'Copied!';
                setTimeout(() => {
                  document.getElementById('copy-btn').textContent = 'Copy';
                }, 2000);
              }}
              id="copy-btn"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'var(--chat-button-bg)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DemoPage;
