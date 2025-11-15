import Groq from "groq-sdk";

// Small client interface to make testing easier
export type GroqModel = {
  chat?: {
    completions?: {
      create?: (opts: any) => Promise<any>;
    };
  };
};

export async function handleGeminiQuestion(
  question: string,
  apiKey?: string,
  client?: any
) {
  if (!question) throw new Error('Question is required');

  const systemPrompt = `You are a helpful AI assistant for Prince Sharma (Princezoid), a 3D Artist. 
Your goal is to answer questions from potential clients or recruiters based on his portfolio. 
Be professional, concise, and helpful. 

**Prince Sharma's Profile:**
- **Role:** 3D Artist, Environment Artist, Texturing Artist, Arch-Viz & AR/VR Assets.
- **Location:** Lucknow, India (open to remote/international work).
- **Summary:** 3D artist with experience in game environments, realistic props, and product visualization.
- **Core Skills:** Modeling/UVs (Maya), Texturing (Substance Painter), Animation/Export (Blender), Delivery (GLB/GLTF for web).
- **Tools:** Blender 4.x, Autodesk Maya 2023, Substance Painter 11, Photoshop, Unreal Engine, Unity, Marmoset, Sketchfab, WebGL.
- **Services:** Realistic game environment art, Product visualization, AR/VR asset creation, Architectural visualization, Look-dev & PBR texturing.
- **Portfolio:** https://artstation.com/princezoid
- **LinkedIn:** https://www.linkedin.com/in/prince-s-414803133/

When asked about portfolio or projects, direct them to ArtStation. For professional background, direct to LinkedIn.`;

  let groqClient = client;
  if (!groqClient) {
    if (!apiKey) throw new Error('API key is required when no client is provided');
    groqClient = new Groq({ apiKey });
  }

  try {
    const completion = await groqClient.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    // Extract text from response
    if (completion.choices && completion.choices[0] && completion.choices[0].message) {
      return completion.choices[0].message.content;
    }

    throw new Error('No response received from Groq');
  } catch (err) {
    console.error('Failed to get response from Groq:', err);
    throw err;
  }
}
