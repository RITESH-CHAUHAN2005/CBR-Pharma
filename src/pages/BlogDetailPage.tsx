import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "understanding-diabetes-prevention-management",
    title: "Understanding Diabetes: Prevention and Management",
    excerpt: "Learn about the different types of diabetes and how to manage blood sugar levels effectively.",
    content: `Diabetes is a chronic health condition that affects how your body turns food into energy. There are three main types of diabetes: Type 1, Type 2, and gestational diabetes.

Type 1 diabetes is thought to be caused by an autoimmune reaction that stops your body from making insulin. Type 2 diabetes, the most common type, occurs when your body becomes resistant to insulin or doesn't make enough insulin. Gestational diabetes develops in pregnant women who have never had diabetes.

Prevention Tips:
• Maintain a healthy weight
• Stay physically active - aim for 30 minutes of moderate activity daily
• Eat a balanced diet rich in fruits, vegetables, and whole grains
• Limit processed foods and sugary drinks
• Get regular health checkups

Management Strategies:
• Monitor blood sugar levels regularly
• Take medications as prescribed
• Follow a diabetes-friendly meal plan
• Exercise regularly
• Manage stress effectively
• Get adequate sleep

At CBR Pharma, we offer a wide range of diabetes management products including glucose monitors, testing strips, and medications. Consult with our pharmacists for personalized guidance.`,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    author: "Dr. Priya Sharma",
    date: "December 1, 2024",
    readTime: "5 min read",
    category: "Health Tips"
  },
  {
    id: "2",
    slug: "importance-of-vitamin-d-overall-health",
    title: "The Importance of Vitamin D for Overall Health",
    excerpt: "Discover why Vitamin D is essential and how to ensure you're getting enough.",
    content: `Vitamin D, often called the "sunshine vitamin," plays a crucial role in maintaining overall health. It helps regulate calcium and phosphorus absorption, supports immune function, and promotes bone health.

Why is Vitamin D Important?
• Supports bone health and prevents osteoporosis
• Boosts immune system function
• May help prevent certain cancers
• Supports cardiovascular health
• Improves mood and reduces depression risk

Signs of Vitamin D Deficiency:
• Fatigue and tiredness
• Bone pain and muscle weakness
• Mood changes, including depression
• Slow wound healing
• Hair loss

How to Get Enough Vitamin D:
1. Sun Exposure: Spend 10-30 minutes in midday sunlight several times per week
2. Diet: Include fatty fish, egg yolks, and fortified foods
3. Supplements: Take Vitamin D3 supplements as recommended

The recommended daily intake varies by age, but most adults need 600-800 IU daily. However, many experts suggest higher doses, especially in regions with limited sunlight.

CBR Pharma offers high-quality Vitamin D supplements in various strengths. Consult with our healthcare team to find the right dosage for you.`,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800",
    author: "Dr. Rahul Verma",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Nutrition"
  },
  {
    id: "3",
    slug: "managing-hypertension-complete-guide",
    title: "Managing Hypertension: A Complete Guide",
    excerpt: "Everything you need to know about high blood pressure and how to keep it under control.",
    content: `Hypertension, or high blood pressure, is a common condition that affects millions of people worldwide. It's often called the "silent killer" because it typically has no symptoms but can lead to serious health problems.

Understanding Blood Pressure Numbers:
• Normal: Less than 120/80 mmHg
• Elevated: 120-129/less than 80 mmHg
• High Blood Pressure Stage 1: 130-139/80-89 mmHg
• High Blood Pressure Stage 2: 140 or higher/90 or higher mmHg

Risk Factors:
• Age
• Family history
• Being overweight
• Lack of physical activity
• High sodium diet
• Excessive alcohol consumption
• Stress

Lifestyle Modifications:
1. Reduce sodium intake to less than 2,300 mg per day
2. Exercise regularly - at least 150 minutes per week
3. Maintain a healthy weight
4. Limit alcohol consumption
5. Quit smoking
6. Manage stress through meditation or yoga

Monitoring at Home:
Regular home monitoring is essential. Use a validated blood pressure monitor and take readings at the same time each day. Keep a log to share with your healthcare provider.

CBR Pharma offers a range of digital blood pressure monitors and medications. Our pharmacists can guide you on proper monitoring techniques.`,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800",
    author: "Dr. Anita Desai",
    date: "November 25, 2024",
    readTime: "6 min read",
    category: "Heart Health"
  },
  {
    id: "4",
    slug: "boosting-immunity-naturally",
    title: "Boosting Immunity Naturally",
    excerpt: "Natural ways to strengthen your immune system and stay healthy year-round.",
    content: `A strong immune system is your body's first line of defense against infections and diseases. While no supplement can cure or prevent disease, certain lifestyle choices can help support your immune function.

Key Nutrients for Immunity:
• Vitamin C: Found in citrus fruits, berries, and leafy greens
• Vitamin D: From sunlight and supplements
• Zinc: Present in meat, nuts, and seeds
• Vitamin E: Found in nuts, seeds, and spinach
• Iron: From red meat, beans, and fortified cereals

Lifestyle Habits for Better Immunity:
1. Get adequate sleep (7-9 hours for adults)
2. Exercise regularly but don't overdo it
3. Manage stress effectively
4. Stay hydrated
5. Eat a balanced diet rich in fruits and vegetables
6. Limit alcohol and avoid smoking
7. Maintain a healthy weight

Foods That Boost Immunity:
• Citrus fruits
• Garlic and ginger
• Yogurt with live cultures
• Almonds and sunflower seeds
• Turmeric
• Green tea
• Papaya and kiwi

Remember, building immunity is a long-term process. Consistency in healthy habits is key to maintaining a strong immune system.`,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    author: "Dr. Meera Patel",
    date: "November 22, 2024",
    readTime: "5 min read",
    category: "Wellness"
  },
  {
    id: "5",
    slug: "mental-health-breaking-the-stigma",
    title: "Mental Health: Breaking the Stigma",
    excerpt: "Understanding mental health conditions and the importance of seeking help.",
    content: `Mental health is just as important as physical health, yet it's often overlooked or stigmatized. Understanding mental health conditions is the first step toward breaking down barriers and encouraging people to seek help.

Common Mental Health Conditions:
• Depression: Persistent feelings of sadness and loss of interest
• Anxiety disorders: Excessive worry and fear
• Bipolar disorder: Extreme mood swings
• PTSD: Trauma-related stress
• OCD: Obsessive thoughts and compulsive behaviors

Warning Signs to Watch For:
• Prolonged sadness or irritability
• Extreme mood changes
• Withdrawal from social activities
• Changes in eating or sleeping habits
• Difficulty concentrating
• Feelings of hopelessness

How to Support Mental Health:
1. Talk about your feelings
2. Stay connected with friends and family
3. Exercise regularly
4. Get enough sleep
5. Eat well and stay hydrated
6. Limit alcohol and avoid drugs
7. Take breaks when needed
8. Seek professional help when necessary

Remember: Seeking help is a sign of strength, not weakness. Mental health conditions are treatable, and recovery is possible.

CBR Pharma supports mental health awareness. If you or someone you know is struggling, please reach out to a mental health professional.`,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800",
    author: "Dr. Vikram Singh",
    date: "November 18, 2024",
    readTime: "5 min read",
    category: "Mental Health"
  },
  {
    id: "6",
    slug: "healthy-aging-tips-for-seniors",
    title: "Healthy Aging: Tips for Seniors",
    excerpt: "Practical advice for maintaining health and vitality as you age.",
    content: `Aging is a natural process, but how we age is largely influenced by our lifestyle choices. With the right habits, you can maintain your health, independence, and quality of life well into your golden years.

Key Areas to Focus On:
1. Physical Activity
• Aim for at least 150 minutes of moderate activity weekly
• Include strength training twice a week
• Practice balance exercises to prevent falls
• Stay flexible with stretching or yoga

2. Nutrition
• Eat plenty of fruits, vegetables, and whole grains
• Choose lean proteins and healthy fats
• Stay hydrated - aim for 8 glasses of water daily
• Consider supplements for Vitamin D, B12, and calcium

3. Mental Wellness
• Stay socially connected
• Keep learning new things
• Play brain games and puzzles
• Practice mindfulness or meditation

4. Preventive Care
• Get regular health screenings
• Keep vaccinations up to date
• Manage chronic conditions
• Take medications as prescribed

5. Safety at Home
• Remove trip hazards
• Install grab bars in bathrooms
• Ensure good lighting
• Use assistive devices if needed

CBR Pharma offers a comprehensive range of products for senior health, from mobility aids to supplements designed for older adults.`,
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800",
    author: "Dr. Sunita Kumar",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Senior Health"
  },
  {
    id: "7",
    slug: "understanding-common-cold-vs-flu",
    title: "Understanding Common Cold vs. Flu",
    excerpt: "Know the differences and when to seek medical attention.",
    content: `The common cold and flu share many symptoms, but they're caused by different viruses. Understanding the differences can help you take appropriate action and seek medical care when needed.

Common Cold:
• Develops gradually
• Mild symptoms
• Runny or stuffy nose
• Sneezing
• Sore throat
• Mild cough
• Rarely causes fever in adults

Flu (Influenza):
• Sudden onset
• More severe symptoms
• High fever (100-102°F or higher)
• Body aches and chills
• Fatigue and weakness
• Headache
• Dry, persistent cough

When to See a Doctor:
• Symptoms lasting more than 10 days
• High fever (above 103°F)
• Difficulty breathing
• Chest pain
• Confusion
• Severe vomiting
• Symptoms that improve then worsen

Prevention Tips:
1. Wash hands frequently
2. Avoid touching your face
3. Get the annual flu vaccine
4. Stay home when sick
5. Cover coughs and sneezes
6. Disinfect frequently touched surfaces

Treatment:
Most colds and mild flu cases can be treated at home with rest, fluids, and over-the-counter medications. CBR Pharma offers a range of cold and flu remedies to help you feel better faster.`,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    author: "Dr. Rajesh Kumar",
    date: "November 12, 2024",
    readTime: "4 min read",
    category: "Health Tips"
  },
  {
    id: "8",
    slug: "benefits-of-regular-exercise",
    title: "The Benefits of Regular Exercise",
    excerpt: "How physical activity improves both body and mind.",
    content: `Regular exercise is one of the best things you can do for your health. It has numerous benefits for both physical and mental well-being, and it's never too late to start.

Physical Benefits:
• Weight management
• Reduces risk of heart disease
• Helps regulate blood sugar
• Strengthens bones and muscles
• Improves balance and flexibility
• Boosts energy levels
• Promotes better sleep

Mental Benefits:
• Reduces anxiety and depression
• Improves mood and self-esteem
• Enhances cognitive function
• Reduces stress
• Improves memory
• Increases mental clarity

Types of Exercise:
1. Aerobic: Walking, running, swimming, cycling
2. Strength Training: Weight lifting, resistance bands
3. Flexibility: Stretching, yoga, Pilates
4. Balance: Tai chi, single-leg stands

How Much Exercise Do You Need?
• Adults: 150 minutes moderate or 75 minutes vigorous activity per week
• Plus muscle-strengthening activities twice a week

Getting Started:
• Start slow and gradually increase intensity
• Choose activities you enjoy
• Find an exercise buddy
• Set realistic goals
• Track your progress
• Reward yourself for milestones

Remember to consult with a healthcare provider before starting a new exercise program, especially if you have existing health conditions.`,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    author: "Dr. Priya Sharma",
    date: "November 8, 2024",
    readTime: "5 min read",
    category: "Fitness"
  },
  {
    id: "9",
    slug: "essential-first-aid-tips",
    title: "Essential First Aid Tips Everyone Should Know",
    excerpt: "Basic first aid knowledge that can save lives in emergencies.",
    content: `Knowing basic first aid can make a crucial difference in emergency situations. Here are essential skills everyone should have.

CPR (Cardiopulmonary Resuscitation):
1. Check for responsiveness
2. Call emergency services
3. Place heel of hand on center of chest
4. Push hard and fast (100-120 compressions per minute)
5. Give rescue breaths if trained

Choking:
• Encourage coughing if the person can speak
• Perform abdominal thrusts (Heimlich maneuver)
• Call emergency services if blockage persists

Burns:
• Cool the burn under running water for 10-20 minutes
• Remove jewelry near the burn
• Cover with clean, non-fluffy dressing
• Don't apply ice, butter, or creams

Cuts and Bleeding:
• Apply direct pressure with clean cloth
• Elevate the injured area
• Clean the wound when bleeding stops
• Apply antibiotic ointment and bandage

Fractures:
• Don't try to realign the bone
• Immobilize the area
• Apply ice to reduce swelling
• Seek medical attention

First Aid Kit Essentials:
• Bandages and gauze
• Antiseptic wipes
• Adhesive tape
• Scissors and tweezers
• Pain relievers
• Antibiotic ointment
• Emergency numbers

CBR Pharma offers complete first aid kits and supplies. Being prepared can help you handle emergencies confidently.`,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800",
    author: "Dr. Anita Desai",
    date: "November 5, 2024",
    readTime: "6 min read",
    category: "Emergency Care"
  },
  {
    id: "10",
    slug: "sleep-hygiene-key-to-better-rest",
    title: "Sleep Hygiene: The Key to Better Rest",
    excerpt: "Improve your sleep quality with these proven strategies.",
    content: `Quality sleep is essential for physical health, mental well-being, and overall quality of life. Good sleep hygiene practices can help you get the rest you need.

Why Sleep Matters:
• Supports immune function
• Aids memory consolidation
• Regulates hormones
• Repairs tissues and muscles
• Maintains mental health

Signs of Poor Sleep:
• Difficulty falling asleep
• Waking up frequently
• Feeling tired upon waking
• Daytime drowsiness
• Irritability and mood changes

Sleep Hygiene Tips:
1. Maintain a consistent sleep schedule
2. Create a relaxing bedtime routine
3. Keep your bedroom cool, dark, and quiet
4. Invest in a comfortable mattress and pillows
5. Limit screen time before bed
6. Avoid caffeine and alcohol in the evening
7. Don't eat heavy meals close to bedtime
8. Exercise regularly, but not too close to bedtime
9. Manage stress through relaxation techniques
10. Reserve your bed for sleep and intimacy only

When to Seek Help:
If you consistently have trouble sleeping despite practicing good sleep hygiene, consult a healthcare provider. You may have an underlying sleep disorder that requires treatment.

CBR Pharma offers sleep aids and supplements to support healthy sleep. However, always consult with a healthcare professional before using sleep medications.`,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800",
    author: "Dr. Meera Patel",
    date: "November 1, 2024",
    readTime: "5 min read",
    category: "Wellness"
  }
];

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    return (
      <main className="min-h-screen py-20">
        <div className="container-cbr text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </main>
    );
  }

  const relatedBlogs = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <>
      <SEOHead 
        title={`${blog.title} | CBR Pharma Blog`}
        description={blog.excerpt}
        url={`https://cbrpharm.com/blog/${blog.slug}`}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-12">
          <div className="container-cbr">
            <nav className="flex items-center gap-2 text-sm opacity-80 mb-6">
              <Link to="/" className="hover:opacity-100">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:opacity-100">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="opacity-100">{blog.category}</span>
            </nav>
            <button 
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all blogs
            </button>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-primary-foreground/80">
              <span className="bg-primary-foreground/20 px-3 py-1 rounded-full text-sm">
                {blog.category}
              </span>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container-cbr">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden mb-8 shadow-cbr-md">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="prose prose-lg max-w-none">
                  {blog.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground/80 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Author Card */}
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h3 className="font-display font-bold text-foreground mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                      <span className="font-bold text-primary-foreground text-xl">
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{blog.author}</p>
                      <p className="text-sm text-muted-foreground">Healthcare Expert at CBR Pharma</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                    <h3 className="font-display font-bold text-foreground mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedBlogs.map(related => (
                        <Link 
                          key={related.id}
                          to={`/blog/${related.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="w-20 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{related.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="gradient-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="font-display font-bold mb-2">Need Health Products?</h3>
                  <p className="text-sm opacity-90 mb-4">Browse our wide range of quality healthcare products.</p>
                  <Link to="/products" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full text-center">
                    Shop Now
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetailPage;
