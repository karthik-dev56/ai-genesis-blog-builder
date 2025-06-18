
import { ArrowRight, Brain, Code, Image as ImageIcon, Music, Pen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center text-white animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 animate-scale-in">
              What's AI on the Blog
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fade-in [animation-delay:200ms]">
              Generative AI: The Creative Power of Machines
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
              Generative AI is redefining creativity in the digital age, bringing the remarkable ability to create human-like content across multiple domains.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 animate-fade-in hover:shadow-xl transition-all duration-300 hover-scale">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4076&q=80" 
              alt="White robot near brown wall representing AI technology"
              className="w-full h-64 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in [animation-delay:600ms]">
              Unlike traditional AI systems that classify data or follow preset rules, generative AI has the remarkable ability to create—whether it's writing human-like text, composing music, designing graphics, or even generating code. It is the technology behind tools like ChatGPT, DALL·E, and many others that are revolutionizing how we think about content creation.
            </p>
          </div>

          {/* How It Works Section */}
          <Card className="mb-12 border-0 shadow-lg animate-fade-in [animation-delay:800ms] hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3 animate-slide-in-right">
                    <Brain className="text-purple-600 animate-pulse" size={32} />
                    How It Works
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4 animate-fade-in [animation-delay:1000ms]">
                    At the heart of generative AI are machine learning models, particularly large language models and generative adversarial networks (GANs). These models are trained on massive datasets and learn to recognize patterns, enabling them to generate entirely new content that mimics human creativity.
                  </p>
                  <p className="text-gray-700 leading-relaxed animate-fade-in [animation-delay:1200ms]">
                    For example, ChatGPT can write essays, answer questions, or hold conversations, while image generators like DALL·E can produce realistic visuals from simple text descriptions.
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80" 
                  alt="Black circuit board macro photography showing AI hardware"
                  className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:1000ms]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Applications Section */}
          <div className="mb-12 animate-fade-in [animation-delay:1400ms]">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-scale-in [animation-delay:1600ms]">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in [animation-delay:1800ms]">
                <CardContent className="p-6 text-center">
                  <Pen className="mx-auto mb-4 text-blue-600 animate-bounce" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Marketing</h3>
                  <p className="text-gray-600">Create ad copy and campaign visuals in seconds</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in [animation-delay:2000ms]">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 text-green-600 animate-bounce [animation-delay:200ms]" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p className="text-gray-600">Assist with tutoring and personalized learning</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in [animation-delay:2200ms]">
                <CardContent className="p-6 text-center">
                  <Music className="mx-auto mb-4 text-purple-600 animate-bounce [animation-delay:400ms]" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Entertainment</h3>
                  <p className="text-gray-600">Script stories, generate concept art, and produce music</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in [animation-delay:2400ms]">
                <CardContent className="p-6 text-center">
                  <Code className="mx-auto mb-4 text-orange-600 animate-bounce [animation-delay:600ms]" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Development</h3>
                  <p className="text-gray-600">Write and debug code, accelerating development cycles</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in [animation-delay:2600ms]">
                <CardContent className="p-6 text-center">
                  <ImageIcon className="mx-auto mb-4 text-red-600 animate-bounce [animation-delay:800ms]" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Design</h3>
                  <p className="text-gray-600">Generate graphics, logos, and visual content</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in [animation-delay:2800ms]">
                <CardContent className="p-6 text-center">
                  <Brain className="mx-auto mb-4 text-teal-600 animate-bounce [animation-delay:1000ms]" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Research</h3>
                  <p className="text-gray-600">Analyze data and generate insights</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Responsibilities Section */}
          <Card className="mb-12 border-l-4 border-l-orange-500 shadow-lg animate-fade-in [animation-delay:3000ms] hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80" 
                  alt="Colorful software code on computer monitor representing AI programming"
                  className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300 animate-slide-in-right [animation-delay:3200ms]"
                />
                <div className="animate-fade-in [animation-delay:3400ms]">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Critical Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    However, with such powerful tools come critical responsibilities. Questions around intellectual property, misinformation, deepfakes, and ethical use are central to the ongoing conversation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    It's important for creators, users, and regulators to establish guidelines that promote transparency and fairness while preventing misuse.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Section */}
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg animate-fade-in [animation-delay:3600ms] hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-slide-in-right [animation-delay:3800ms]">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">The Future of Creativity</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Generative AI isn't just a technological advancement—it's a shift in how we create and collaborate. As it continues to evolve, the focus must remain on harnessing its potential to enhance human creativity, not replace it.
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-scale animate-fade-in [animation-delay:4000ms]">
                    Learn More About AI
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80" 
                  alt="MacBook with code on screen showing AI development"
                  className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:4200ms]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Author Section */}
          <Card className="border-0 shadow-lg bg-white animate-fade-in [animation-delay:4400ms] hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl animate-scale-in [animation-delay:4600ms]">
                LP
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in [animation-delay:4800ms]">P. Laxmi Priya</h3>
              <p className="text-gray-600 mb-4 animate-fade-in [animation-delay:5000ms]">Student ID: 24911A0547</p>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 animate-scale-in [animation-delay:5200ms]">
                Tech Blogger & Content Creator
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 animate-fade-in [animation-delay:5400ms]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Generative AI Blog. Exploring the future of artificial intelligence and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
